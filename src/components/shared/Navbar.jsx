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
    console.log(user);
    return (
        <nav className="container mx-auto shadow-md sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-3">
                    <Image src={LogoImage} alt="logo" width={100} height={100} />
                </Link>
                <ul className="flex items-center gap-4">
                    <li><NavLinks href="/">Home</NavLinks></li>
                    <li><NavLinks href="/all-books">All Books</NavLinks></li>
                    <li><NavLinks href="/profile">My Profile</NavLinks></li>
                </ul>
                {isPending ? <span className="loading loading-spinner loading-xl"></span> : user ? <div className='flex gap-2 items-center'>
                    <h2 className='font-bold'>{user?.name}</h2>
                    <Image src={ user?.image || UserImage} alt={user?.name} width={40} height={40} referrerPolicy='no-referrer' className="rounded-full" />
                    <Button className="bg-red-500 text-white" onClick={async() => await authClient.signOut()}>Logout</Button>
                </div> :
                    <Link href={"/login"}>
                        <Button className="bg-linear-to-r from-[#21217167] to-[#3DAAB0]" >Login</Button>
                    </Link>
                }

            </header>
        </nav>
    );
};

export default Navbar;