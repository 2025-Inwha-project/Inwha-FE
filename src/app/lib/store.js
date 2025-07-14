import { create } from 'zustand';

const useInputStore = create((set) => ({
  // 상태값
  item: '',
  author: '',
  color: null,
  timestamp: null,

  // 상태 수정 함수
  setItem: (item) => set({ item }),
  setAuthor: (author) => set({ author }),
  setColor: (color) => set({ color }),

  // timestamp는 보통 전송 직전에 현재 시간으로 설정
  setTimestamp: () => set({ timestamp: Date.now() }),

  // 모든 값 초기화 (필요 시)
  reset: () =>
    set({
      item: '',
      author: '',
      color: null,
      timestamp: null,
    }),
}));

export default useInputStore;
