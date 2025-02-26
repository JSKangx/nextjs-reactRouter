"use client";

import { CountStore, createCountStore } from "@/countStore";
import { CountType } from "@/type/count";
import { useContext, useRef } from "react";
import { createContext } from "react";
import { useStore } from "zustand";

export function useCountContext() {
  const store = useContext(CountContext);
  if (!store) throw new Error("Missing CountContext.Provider in the tree");
  return useStore(store);
}

export const CountContext = createContext<CountStore | null>(null);

type CountProviderProps = React.PropsWithChildren<CountType>;
export function CountProvider({ children, ...props }: CountProviderProps) {
  const storeRef = useRef<CountStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = createCountStore(props);
  }

  return (
    <CountContext.Provider value={storeRef.current}>
      {children}
    </CountContext.Provider>
  );
}
