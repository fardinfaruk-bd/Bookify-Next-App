// components/NotFoundPage.jsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NotFoundPage = ({
  title = "404",
  subtitle = "Page Not Found",
  message = "Sorry, the page you are looking for doesn’t exist or has been moved.",
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-7xl font-bold text-black"
      >
        {title}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-2xl font-semibold text-gray-700"
      >
        {subtitle}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-2 text-gray-500 max-w-md"
      >
        {message}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Go Back Home
        </Link>
      </motion.div>

    </div>
  );
};

export default NotFoundPage;