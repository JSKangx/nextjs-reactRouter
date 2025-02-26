"use client";
import { useState } from "react";

export default function useCount() {
  const [count, setCount] = useState<number>(1);

  // 증가시키는 함수
  const onPlus = () => {
    setCount((prev) => prev + 1);
  };

  // 감소시키는 함수
  const onMinus = () => {
    setCount((prev) => {
      if (prev === 1) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  return { count, onPlus, onMinus };
}
