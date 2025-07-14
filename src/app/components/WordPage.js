'use client';

import Image from 'next/image';
import FloatingText from './FloatingText';
import { useRouter } from 'next/navigation';

export default function WordPage({ onClickScroll }) {
  const router = useRouter();

  const handleLogoClick = (e) => {
    e.stopPropagation(); // 부모 클릭 방지!
    router.push('/design'); // 디자인 페이지로 이동
  };

  return (
    <section
      onClick={onClickScroll}
      className="h-screen w-screen bg-[#f8fafb] flex flex-col items-center font-sans cursor-pointer relative"
    >
      {/* 상단 로고 (클릭 시 디자인 페이지 이동) */}
      <div className="mt-10 z-10">
        <div
          onClick={handleLogoClick}
          className="transform rotate-[-25deg] transition-transform duration-300 hover:rotate-[-35deg]"
        >
          <Image
            src="/IMG_1665.PNG"
            alt="로고"
            width={96}
            height={96}
            priority
          />
        </div>
      </div>

      {/* 중앙 넓은 공간 + 글자 애니메이션 */}
      <div className="relative h-[600px] w-full z-0">
        <FloatingText />
      </div>

      {/* 하단 문구 박스 */}
      <div className="mb-12 border border-black py-3 rounded-xl w-[80%] z-10">
        <p className="text-xl font-semibold text-center">
          <span className="font-bold">되찾고 싶은</span> 당신의 시선은 어디를 향하고 있었나요?
        </p>
      </div>
    </section>
  );
}



