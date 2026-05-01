import Image from 'next/image';
import React from 'react';
import BannerImage from '../../assets/BannerImage.jpeg'

const Banner = () => {
    return (
        <div className=" bg-base-200 min-h-[80vh] container mx-auto">
            <div className="flex justify-between w-full p-30 items-center gap-30">
                <div className='space-y-8'>
                    <h1 className="text-5xl font-bold">Find Your <br /> Next <span className='bg-linear-to-r from-[#21217167] to-[#3DAAB0] bg-clip-text text-transparent text-6xl'>Read!!!</span></h1>        
                    <button className="btn bg-linear-to-r from-[#212171c4] to-[#3DAAB0] text-white">Browse Now</button>
                </div>
                <Image src={BannerImage} alt="BannerImage" height={500} width={300} className='rounded-lg shadow-xl' />
            </div>
        </div>

    );
};

export default Banner;