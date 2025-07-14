'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getFontSizeClass(weight) {
    if (weight >= 3) return 'text-6xl';
    if (weight === 2) return 'text-4xl';
    return 'text-2xl';
  }

export default function FloatingText() {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/word`);
        const json = await res.json();

        // 시간순 정렬 (선택사항): latest_timestamp 기준 최신순
        const sorted = json.sort(
          (a, b) => b.latest_timestamp - a.latest_timestamp
        );

        setData(sorted);

        setItems(
          sorted.map(() => ({
            top: Math.random() * 500,
            left: Math.random() * 500,
            dx: Math.random() * 2 - 1,
            dy: Math.random() * 2 - 1,
          }))
        );
      } catch (err) {
        console.error('데이터 불러오기 실패:', err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev =>
        prev.map((item, i) => {
          const container = containerRef.current?.getBoundingClientRect();
          const el = textRefs.current[i]?.getBoundingClientRect();
          if (!container || !el) return item;

          let { top, left, dx, dy } = item;
          const nextTop = top + dy * 2;
          const nextLeft = left + dx * 2;
          const maxTop = container.height - el.height;
          const maxLeft = container.width - el.width;

          if (nextTop <= 0 || nextTop >= maxTop) dy = -dy;
          if (nextLeft <= 0 || nextLeft >= maxLeft) dx = -dx;

          return {
            top: clamp(nextTop, 0, maxTop),
            left: clamp(nextLeft, 0, maxLeft),
            dx,
            dy,
          };
        })
      );
    }, 33);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {data.map((item, index) => (
        <motion.div
          key={index}
          ref={el => (textRefs.current[index] = el)}
          className={`absolute font-semibold whitespace-nowrap ${getFontSizeClass(item.weight)}`}
          animate={{
            top: items[index]?.top || 0,
            left: items[index]?.left || 0,
          }}
          transition={{
            duration: 0.3,
            ease: 'linear',
          }}
          style={{ color: item.color }}
        >
          {item.item}
        </motion.div>
      ))}
    </div>
  );
}

