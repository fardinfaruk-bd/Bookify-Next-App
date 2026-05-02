"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LeftSidebar = () => {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://bookify-next-server.onrender.com/categories") 
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="space-y-5 border border-[#E7E7E7] rounded-lg p-3 md:p-7.5 h-full">
      <h2 className="font-bold text-sm md:text-xl text-[#403F3F] mb-6">
        Categories
      </h2>

      <Link
        href="/all-books"
        className={`btn w-full ${
          !activeCategory ? "bg-[#3DAAB0] text-white" : "bg-[#3daab02d]"
        }`}
      >
        All Books
      </Link>

      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/all-books?category=${category.name}`}
          className={`btn w-full ${
            activeCategory === category.name
              ? "bg-[#3DAAB0] text-white"
              : "bg-[#3daab02d]"
          }`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSidebar;