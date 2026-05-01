import { getBookById } from '@/lib/data';
import MyBtn from '@/ui/MyBtn';
import Image from 'next/image';
import React from 'react';

const BooksDetailsPage = async ({ params }) => {
    const { id } = await params;
    const Book = await getBookById({ id })


    return (
        <div className='grid grid-cols-12 container mx-auto mt-20 gap-10'>
            <div className='col-span-12 md:col-span-5'>
                <figure className='p-6 bg-[#3daab02d] flex justify-center items-center rounded-lg'>
                    <Image src={Book.image_url} alt="bookImage" height={400} width={400} className='rounded-lg ' />
                </figure>
            </div>
            <div className="space-y-10 p-2 col-span-12 md:col-span-7">
                <div className='space-y-2'>
                    <h2 className="card-title text-5xl">{Book.title}</h2>
                    <p className='font-semibold text-[#131313c1] flex items-center gap-2'> By: <span className='text-black'>{Book.author}</span></p>
                </div>
                <p className='text-gray-500 text-xl'>{Book.description}</p>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='bg-white rounded-lg py-10 shadow-lg flex flex-col items-center '>
                        <p className='font-semibold text-[#131313c1] text-xs lg:text-[16px]'> Quantity</p>
                        <p className='font-semibold text-[#131313c1] text-xs lg:text-2xl text-center'> {Book.available_quantity}</p>
                    </div>
                    <div className='bg-white rounded-lg py-10 shadow-lg flex flex-col items-center text-center '>
                        <p className='font-semibold text-[#131313c1] text-xs lg:text-[16px]'>Category</p>
                        <p className='font-semibold text-[#131313c1] text-xs lg:text-2xl'> {Book.category}</p>
                    </div>
                    <div className='bg-white rounded-lg py-10 px-5 shadow-lg flex flex-col items-center text-center '>
                        <p className='font-semibold text-[#131313c1] text-xs lg:text-[16px]'>Published Date</p>
                        <p className='font-semibold text-[#131313c1] text-xs lg:text-2xl'> {Book.published_date}</p>
                    </div>
                </div>
                <MyBtn Book={Book} />
            </div>
        </div>

    );
};

export default BooksDetailsPage;