"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const BookNotFound = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 bg-linear-to-br from-gray-50 to-gray-200">

            <motion.h1
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="text-7xl md:text-8xl font-extrabold text-gray-800">404</motion.h1>


            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl md:text-4xl font-semibold text-gray-700"
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                📚 Book Not Found
            </motion.h2>


            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-3 text-gray-500 max-w-md"
            >
                Sorry, the book you are looking for doesn’t exist in our library.
            </motion.p>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 flex gap-4"
            >
                <Link
                    href="/all-books"
                    className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                    Browse Books
                </Link>

                <Link href={"/"}>
                    <button

                        className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
                    >
                        Go Back
                    </button>
                </Link>
            </motion.div>

        </div>
    );
};

export default BookNotFound;