"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname();
    
    const isActive = pathname === href;
    return (
        <Link href={href} className={`font-semibold ${isActive ? "bg-linear-to-r from-[#212171] to-[#3DAAB0] bg-clip-text text-transparent border-b-2 border-[#212171]"  : "text-[#706F6F]"}`}>
            {children}
        </Link>
    );
};

export default NavLink;