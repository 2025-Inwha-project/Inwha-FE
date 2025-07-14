'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import dummyData from '../lib/dummyData';

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

// weight에 따라 텍스트 크기를 결정하는 함수
function getFontSizeClass(weight) {
  switch (weight) {
    case 1:
      return 'text-xl';
    case 2:
      return 'text-3xl';
    case 3:
      return 'text-5xl';
    default:
      return 'text-xl'; // 기본값
  }
}

export default function FloatingText() {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  const [items, setItems] = useState(
    dummyData.map(() => ({
      top: Math.random() * 500,
      left: Math.random() * 500,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 - 1,
    }))
  );

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
    }, 33); // 약 30fps

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {dummyData.map((item, index) => (
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

