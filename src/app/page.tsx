import Count from "@/components/_/Count";
import { CountProvider } from "@/components/providers/ZustandProvider";
import { getCount } from "@/server-action";
import { CountType } from "@/type/count";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  // 새로운 queryClient 생성
  const queryClient = new QueryClient();

  // data prefetching
  await queryClient.prefetchQuery({
    queryKey: ["count"],
    queryFn: () => getCount(),
  });

  const res = await fetch("http://localhost:4000/count", {
    cache: "no-store",
  });
  const data: CountType = await res.json();

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CountProvider count={data.count}>
          <Count />
        </CountProvider>
      </HydrationBoundary>
    </>
  );
}
