"use client";

import CountControls from "@/components/_/CountControls";
import useCount from "@/hooks/useCount";
import { CountType } from "@/type/count";
import { useQuery } from "@tanstack/react-query";

export default function Count() {
  // 클라이언트 상태 관리
  const { count, onPlus, onMinus } = useCount();
  // data fetching
  const { data: serverCount } = useQuery({
    queryKey: ["count"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/count");
      const data: CountType = await res.json();
      return { data };
    },
  });

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[700px]">
      <h1 className="text-2xl">Client Count State : {count}</h1>
      <CountControls onMinus={onMinus} onPlus={onPlus} />
      <h1 className="text-2xl">
        Server Count State : {JSON.stringify(serverCount?.data)}
      </h1>
    </div>
  );
}
