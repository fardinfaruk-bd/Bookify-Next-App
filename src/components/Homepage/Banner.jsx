import Image from 'next/image';
import React from 'react';
import BannerImage from '../../assets/BannerImage.jpeg'
import Link from 'next/link';

const Banner = () => {
    return (
        <div className=" bg-base-200 min-h-[80vh] container mx-auto">
            <div className=" md:flex-row flex flex-col justify-between w-full p-10 md:p-20 lg:p-30 items-center gap-10 md:gap-30">
                <div className='space-y-8'>
                    <h1 className=" text-center md:text-left  text-6xl font-bold">Find Your <br /> Next <span className='bg-linear-to-r from-[#21217167] to-[#3DAAB0] bg-clip-text text-transparent text-7xl'>Read!!!</span></h1>
                    <div className='flex justify-center md:justify-start'>
                        <Link href={"/all-books"}><button className="btn bg-linear-to-r from-[#212171c4] to-[#3DAAB0] text-white ">Browse Now</button></Link>
                    </div>
                </div>
                <div>
                    <Image src={BannerImage} alt="BannerImage" height={500} width={500} className='w-100 rounded-lg shadow-xl' />
                </div>
            </div>
        </div>

    );
};

export default Banner;