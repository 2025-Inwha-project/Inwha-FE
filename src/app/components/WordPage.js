'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function WordPage({ onClickScroll }) {
  const router = useRouter();

  // 로고 클릭 시 디자인 페이지로 이동 + 상위 클릭 이벤트 중단
  const handleLogoClick = (e) => {
    e.stopPropagation(); // ❗ section 클릭 이벤트 막기
    router.push('/design');
  };

  return (
    <section
      onClick={onClickScroll}
      className="h-screen w-screen bg-[#f8fafb] flex flex-col items-center font-sans cursor-pointer"
    >
      {/* 상단 로고 */}
      <div className="mt-10" onClick={handleLogoClick}>
        <div className="transform rotate-[-25deg] transition-transform duration-300 hover:rotate-[-35deg]">
          <Image
            src="/IMG_1665.PNG"
            alt="로고"
            width={96}
            height={96}
            priority
            className="cursor-pointer"
          />
        </div>
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


