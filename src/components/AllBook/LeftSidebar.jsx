"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LeftSidebar = () => {
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get("category");

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://bookify-next-server.onrender.com/categories")
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
                setLoading(false); 
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
        );
    }



    return (
        <div className="space-y-5 border border-[#E7E7E7] rounded-lg p-2 md:p-5 lg:p-6 h-full">
            <h2 className="font-bold text-sm md:text-xl text-[#403F3F] mb-6">
                Categories
            </h2>

            <Link
                href="/all-books"
                className={`btn w-full ${!activeCategory ? "bg-[#3DAAB0] text-white" : "bg-[#3daab02d]"
                    }`}
            >
                All Books
            </Link>

            {categories.map((category) => (
                <Link
                    key={category.id}
                    href={`/all-books?category=${category.name}`}
                    className={`btn w-full text-sm md:text-lg ${activeCategory === category.name
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