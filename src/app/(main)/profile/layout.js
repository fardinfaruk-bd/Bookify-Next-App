import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

export const metadata = {
  title: "My Profile || Bookify",
  description: "Online Book Borrowing Platform",
};

const ProfileLayout = ({ children }) => {
    return (
        <>
            
            {children}
            
        </>
    );
};

export default ProfileLayout;