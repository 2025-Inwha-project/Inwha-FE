'use client';

import useInputStore from '../lib/store';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function InputPage() {
  const router = useRouter();

  const {
    item, author, color,
    setItem, setAuthor, setColor,
  } = useInputStore();

  const [loading, setLoading] = useState(false);

  const colors = [
    '#675F90', '#002799', '#0055C2',
    '#007AD4', '#009CD2', '#00BCC3',
    '#00D9B0',
  ];

  const handleSubmit = async () => {
    if (!item || !author) {
      alert('모든 필드를 입력해주세요!');
      return;
    }
    else if(!color)
    {
      alert("색상을 선택해주세요.");
    }

    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/write`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item, author, color, weight: 1 }),
      });

      if (!res.ok) throw new Error('서버 오류');

      // ✅ 성공 시 메인 페이지로 이동 + 새로고침
      window.location.href = '/';
    } catch (e) {
      console.error(e);
      alert('서버 전송 실패!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative min-h-screen w-screen flex items-center justify-center font-sans px-4"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, #f8fafb 0%, #f8fafb 70%, #b0b0b0 85%, #2f2f2f 100%)',
      }}
    >
      <div className="absolute top-24 w-full text-center px-4">
        <h2 className="text-3xl font-bold text-black">
          되찾고 싶은 당신의 시선은 어디를 향하고 있었나요?
        </h2>
      </div>

      <div
        className="bg-white/30 shadow-md rounded-3xl px-8 py-10 w-[90%] max-w-md flex flex-col items-center mt-20 scale-[1.2]"
      >
        {/* 색상 선택 */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {colors.map((c, i) => (
            <button
              key={i}
              className={`
                w-7 h-7 rounded-full border-2 transition duration-200
                hover:scale-110 hover:ring-2 hover:ring-black
                ${color === c ? 'border-black' : 'border-transparent'}
              `}
              style={{ backgroundColor: c }}
              onClick={() => setColor(c)}
            />
          ))}
        </div>

        {/* 입력 필드 */}
        <input
          type="text"
          placeholder="되찾고 싶은 것"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="w-full mb-3 border border-gray-300 rounded-xl px-4 py-3 text-center placeholder-gray-400 transition duration-200 hover:scale-105"
        />
        <input
          type="text"
          placeholder="작성자"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full mb-6 border border-gray-300 rounded-xl px-4 py-3 text-center placeholder-gray-400 transition duration-200 hover:scale-105"
        />

        {/* 입력 버튼 */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-28 py-2 bg-black text-white rounded-xl text-base font-semibold
                     transition duration-200 hover:bg-gray-800 hover:scale-105"
        >
          {loading ? '전송 중...' : '입력'}
        </button>
      </div>
    </section>
  );
}




