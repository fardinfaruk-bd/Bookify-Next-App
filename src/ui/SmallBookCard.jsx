import Image from 'next/image';
import React from 'react';

const SmallBookCard = ({ book }) => {
    return (
        <div className='shadow-md p-5 flex gap-5 rounded-lg'>
            <div>
                <Image src={book.image_url} alt={book.title} width={50} height={50} />
            </div>
            <div className='flex flex-col gap-1'>
                <p className='font-semibold'>{book.title}</p>
                <p className='text-gray-500'>{book.author}</p>
            </div>
        </div>
    );
};

export default SmallBookCard;