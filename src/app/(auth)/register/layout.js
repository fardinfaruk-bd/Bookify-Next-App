import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

export const metadata = {
  title: "Register || Bookify",
  description: "Online Book Borrowing Platform",
};


const RegisterLayout = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
};

export default RegisterLayout;