'use client';

import BookCard from '@/ui/BookCard';
import React from 'react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination  } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeatureBook = ({ Books }) => {
    return (
        <div className='container mx-auto space-y-5 mb-30'>
            <h2 className='font-bold text-4xl text-center mb-10'>
                Feature Book
            </h2>
            <Swiper
                spaceBetween={20}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                    0: {
                        slidesPerView: 1, 
                    },
                    640: {
                        slidesPerView: 2, 
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4, 
                    },
                }}
                className="mySwiper"
            >
                {Books.slice(0, 10).map((book) => (
                    <SwiperSlide key={book.id}>
                        <BookCard book={book} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default FeatureBook;