import Image from 'next/image';
import React from 'react';
import BannerImage from '../../assets/BannerImage.jpeg';
import Link from 'next/link';
import 'animate.css';

const Banner = () => {
    return (
        <div className="relative bg-[url('https://i.ibb.co.com/GvhvVmdK/mordern-library-202605041920.jpg')] bg-cover min-h-[80vh] container mx-auto">

            <div className="absolute inset-0 bg-black opacity-60 blur/60"></div>

            <div className="relative z-10 md:flex-row flex flex-col justify-between w-full p-10 md:p-20 lg:p-30 items-center gap-10 md:gap-20">


                <div className='space-y-8 animate__animated animate__fadeInLeft'>
                    <h1 className="text-center md:text-left text-6xl lg:text-8xl font-bold text-white">
                        Find Your <br />
                        Next
                        <span className='bg-linear-to-r from-teal-500 to-green-500 bg-clip-text text-transparent text-6xl md:text-8xl lg:text-8xl bg-amber-30 italic'> Read!!!</span>
                    </h1>
                    <p className='text-xl text-white text-center md:text-left'>Best Books Collection and Online Book Borrowing Platform</p>

                    <div className='flex justify-center md:justify-start'>
                        <Link href={"/all-books"}>
                            <button className="btn text-xl px-15 py-8 border-none shadow-none bg-linear-to-r from-teal-500 to-green-500 text-white animate-pulse hover:animate-none">
                                Browse Now
                            </button>
                        </Link>
                    </div>
                </div>


                <div className='animate__animated animate__fadeInRight'>
                    <Image
                        src={BannerImage}
                        alt="BannerImage"
                        height={500}
                        width={500}
                        className='w-100 rounded-lg shadow-xl'
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;