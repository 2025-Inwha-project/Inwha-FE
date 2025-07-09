'use client';

import Image from 'next/image';

export default function WordPage() {
  return (
    <section className="h-screen w-screen bg-[#f8fafb] flex flex-col items-center font-sans">
      {/* 상단 로고 */}
      <div className="mt-10" style={{ transform: 'rotate(-25deg)' }}>
        <Image
          src="/IMG_1665.PNG"
          alt="로고"
          width={96}    // 120 → 96 (20% 줄임)
          height={96}
          priority
        />
      </div>

      {/* 중앙 넓은 공간 확보 */}
      <div className="h-[600px]" />

      {/* 하단 문구 박스 */}
      <div className="mb-12 border border-black py-3 rounded-xl w-[80%]">
        <p className="text-xl font-semibold text-center">
          <span className="font-bold">되찾고 싶은</span> 당신의 시선은 어디를 향하고 있었나요?
        </p>
      </div>
    </section>
  );
}
