import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

export const metadata = {
  title: "Login || Bookify",
  description: "Online Book Borrowing Platform",
};


const LoginLayout = ({ children }) => {
    return (
        <>
            
            {children}
            
        </>
    );
};

export default LoginLayout;