'use client';

import { useRef } from 'react';
import WordPage from './components/WordPage';
import InputPage from './components/InputPage';

export default function HomePage() {
  const inputRef = useRef(null);

  const scrollToInput = () => {
    inputRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <WordPage onClickScroll={scrollToInput} />
      <div ref={inputRef}>
        <InputPage />
      </div>
    </>
  );
}


