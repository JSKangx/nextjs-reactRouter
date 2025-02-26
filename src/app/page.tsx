import Count from "@/components/_/Count";
import { getCount } from "@/server-action";
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

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Count />
      </HydrationBoundary>
    </>
  );
}
