import Banner from "@/components/Homepage/Banner";
import FeatureBook from "@/components/Homepage/FeatureBook";
import LatestBook from "@/components/Homepage/LatestBook";
import { getBooks } from "@/lib/data";
import React from "react";

export default async function Home() {
  const Books = await getBooks();
  return (
    <div>
      <Banner />
      <LatestBook />
      <FeatureBook Books={Books} />
      

    </div>
  );
}
