"use client"
import Image from 'next/image';
import React from 'react';
import LogoImage from "@/assets/Logo.png"
import { Button } from '@heroui/react';
import NavLinks from './NavLinks';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import UserImage from "@/assets/user.png"


const Navbar = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    return (
        <div className="container mx-auto navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLinks href="/">Home</NavLinks></li>
                        <li><NavLinks href="/all-books">All Books</NavLinks></li>
                        <li><NavLinks href="/profile">My Profile</NavLinks></li>
                    </ul>
                </div>
                <Link href="/" className="flex items-center gap-3">
                    <Image src={LogoImage} alt="logo" width={100} height={100} />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" flex gap-3 px-1">
                    <li><NavLinks href="/">Home</NavLinks></li>
                    <li><NavLinks href="/all-books">All Books</NavLinks></li>
                    <li><NavLinks href="/profile">My Profile</NavLinks></li>
                </ul>
            </div>
            <div className='navbar-end'>
                {isPending ? <span className="loading loading-spinner loading-xl"></span> : user ? <div className=' flex gap-2 items-center'>
                    <h2 className='font-bold hidden md:flex'> Hello! {user?.name}</h2>
                    <Image src={user?.image || UserImage} alt={user?.name} width={40} height={40} referrerPolicy='no-referrer' className="rounded-full" />
                    <Button className="bg-red-500 text-white" onClick={async () => await authClient.signOut()}>Logout</Button>
                </div> :
                    <Link href={"/login"}>
                        <Button  className="bg-linear-to-r from-[#21217167] to-[#3DAAB0] text-xs md:text-[16px]" >Login</Button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;