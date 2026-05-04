"use client";
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import userImage from "@/assets/user.png"
import { InfoUpdateModal } from '@/ui/InfoUpdateModal';


const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    return (
        <div className='min-h-[80vh] flex justify-center items-center'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                        src={user?.image || userImage}
                        alt={user?.name || "User"}
                        width={100}
                        height={100}
                        className='rounded-full'
                    />
                </figure>
                <div className="card-body text-center space-y-6  items-center">
                    <div>
                        <h2 className="font-bold font text-2xl ">{user?.name}</h2>
                        <p className=''>{user?.email}</p>
                    </div>
                    <InfoUpdateModal />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;