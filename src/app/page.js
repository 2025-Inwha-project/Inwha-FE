import WordPage from './components/WordPage';
import InputPage from './components/InputPage';

export default function HomePage() {
  return (
    <main className="overflow-y-scroll scroll-smooth h-screen">
      <WordPage />
      <InputPage />
    </main>
  );
}

