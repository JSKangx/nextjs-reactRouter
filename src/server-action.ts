"use server";

import { CountType } from "@/type/count";

export async function getCount() {
  const res = await fetch("http://localhost:4000/count", {
    cache: "no-store",
  });
  const data: CountType = await res.json();

  return { data };
}
