'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const inputRef = useRef(null);
  const router = useRouter();

  const scrollToInput = () => {
    inputRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToDesign = () => {
    router.push('/design');
  };

  return (
    <main>
      {/* 로고 클릭 → 디자인 페이지 이동 */}
      <section>
        <div onClick={goToDesign} style={{ cursor: 'pointer' }}>
          <h1>L ST & FOUND</h1>
        </div>
        <ul>
          <li>자신감</li>
          <li>첫사랑</li>
          {/* ... */}
        </ul>
        <button onClick={scrollToInput}>되찾고 싶은 걸 입력하러 가기</button>
      </section>

      {/* 입력 섹션 */}
      <section ref={inputRef}>
        <h2>되찾고 싶은 것</h2>
        <form>
          <input type="text" placeholder="작성자" />
          <textarea placeholder="되찾고 싶은 기억" />
          <button type="submit">제출하기</button>
        </form>
      </section>
    </main>
  );
}

