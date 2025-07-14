'use client';

import { useState } from 'react';

export default function InputPage() {
  const [color, setColor] = useState(null);

  const colors = [
    '#E6DFC7', '#BFD8B8', '#A4CCC0',
    '#92B7C3', '#7C9DB4', '#6C86A6',
    '#606B8A', '#514E63',
  ];

  return (
    <section
      className="relative min-h-screen w-screen flex items-center justify-center font-sans px-4"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, #f8fafb 0%, #f8fafb 35%, #b0b0b0 75%, #2f2f2f 100%)',
      }}
    >
      {/* 상단 문구 */}
      <div className="absolute top-24 w-full text-center px-4">
        <h2 className="text-3xl font-bold text-black">
          되찾고 싶은 당신의 시선은 어디를 향하고 있었나요?
        </h2>
      </div>

      {/* 투명한 입력 카드 */}
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
          className="w-full mb-3 border border-gray-300 rounded-xl px-4 py-3 text-center placeholder-gray-400
                     transition duration-200 hover:scale-105"
        />
        <input
          type="text"
          placeholder="작성자"
          className="w-full mb-6 border border-gray-300 rounded-xl px-4 py-3 text-center placeholder-gray-400
                     transition duration-200 hover:scale-105"
        />

        {/* 입력 버튼 */}
        <button
          className="w-28 py-2 bg-black text-white rounded-xl text-base font-semibold
                     transition duration-200 hover:bg-gray-800 hover:scale-105"
        >
          입력
        </button>
      </div>
    </section>
  );
}



