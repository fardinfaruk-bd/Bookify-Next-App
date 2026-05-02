import BookCard from '@/ui/BookCard';
import React from 'react';

const FeatureBook = ({ Books }) => {
    return (
        <div className='container mx-auto space-y-5 mb-30'>
            <h2 className='font-bold text-4xl text-center mb-10'>Feature Book</h2>
            <div className='grid grid-cols-4 gap-5'>
                {Books.slice(0, 4).map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default FeatureBook;