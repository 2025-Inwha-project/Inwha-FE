'use client';

import { useRouter } from 'next/navigation';

export default function DesignPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <main
      onClick={handleClick}
      className="h-screen w-screen bg-[#f8fafb] flex flex-col justify-center items-center cursor-pointer font-sans scale-[1.15]"
    >
      {/* 텍스트 영역 */}
      <div className="text-center leading-none mb-16">
        <div className="text-[6rem] font-bold tracking-widest">L&nbsp;&nbsp;ST</div>
        <div className="text-[6rem] font-bold tracking-widest">&FOUND</div>
      </div>

      {/* 더 긴 선 + 더 작은 화살표 */}
      <div className="relative w-[500px] h-[1px] bg-gray-400 mb-16">
        <div className="absolute right-[-6px] top-[-4px] w-0 h-0 border-t-[4px] border-b-[4px] border-l-[6px] border-t-transparent border-b-transparent border-l-gray-400"></div>
      </div>

      {/* 검정 원 + 진하고 선명한 그림자 */}
      <div className="w-[140px] h-[140px] bg-black rounded-full shadow-[6px_6px_4px_rgba(0,0,0,0.5)] mb-6" />

      {/* 하단 문구 */}
      <p className="text-gray-400 text-lg">잃어버린 시선을 찾아드립니다.</p>
    </main>
  );
}

