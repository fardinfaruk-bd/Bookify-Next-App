import Banner from "@/components/Homepage/Banner";
import BookGenres from "@/components/Homepage/BookGenres";
import FeatureBook from "@/components/Homepage/FeatureBook";
import LatestBook from "@/components/Homepage/LatestBook";
import Quotes from "@/components/Homepage/Quotes";
import { getBooks } from "@/lib/data";
import React from "react";

export default async function Home() {
  const Books = await getBooks();
  return (
    <div>
      <Banner />
      <LatestBook />
      <FeatureBook Books={Books} />
      <BookGenres Books={Books}/>
      <Quotes />
      

    </div>
  );
}
