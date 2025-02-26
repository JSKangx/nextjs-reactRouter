import { CountType } from "@/type/count";
import { createStore } from "zustand";

export interface CountState {
  count: number | undefined;
  addCount: () => void;
  minusCount: () => void;
  resetCount: () => void;
}

export type CountStore = ReturnType<typeof createCountStore>;

export const createCountStore = (initProps?: Partial<CountType>) => {
  // 카운트의 기본값으로 1을 설정
  const DEFAULT_COUNT: CountType = {
    count: 1,
  };

  // 스토어를 생성하는 함수 반환
  return createStore<CountState>()((set) => ({
    count: initProps?.count ?? DEFAULT_COUNT.count,
    addCount: () =>
      set((state) => ({
        count: (state.count ?? 1) + 1,
      })),
    minusCount: () =>
      set((state) => ({
        count: (state.count ?? 1) - 1,
      })),
    resetCount: () => set({ count: 0 }),
  }));
};
