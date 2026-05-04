import { Inter } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";


const InterFont = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "Bookify",
  description: "Online Book Borrowing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${InterFont.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        
        <ToastContainer />
      </body>
    </html>
  );
}
