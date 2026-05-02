'use client';

import BookCard from '@/ui/BookCard';
import React from 'react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeatureBook = ({ Books }) => {
    return (
        <div className='mx-auto space-y-5 mb-30'>
            <h2 className='font-bold text-4xl text-center mb-10'>
                Feature Book
            </h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                    
                }}
                modules={[Pagination]}
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