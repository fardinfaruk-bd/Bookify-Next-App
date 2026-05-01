import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUser } from 'react-icons/fa';

const BookCard = ({book}) => {
    return (
        <div href={`/all-books/${book.id}`} className="card bg-base-100 shadow-sm border border-gray-200">
            <figure className='p-6 bg-[#3daab02d]'>
                <Image src={book.image_url} alt="bookImage" height={100} width={100}  className='rounded-lg '/>
            </figure>
            <div className="card-body p-2">
                <h2 className="card-title text-xl">
                    {book.title}
                </h2>
                <h2 className="card-title text-xl">
                    {book.title}
                </h2>
                <p className='font-semibold text-[#131313c1] flex items-center gap-2'> <FaUser /> {book.author}</p>
                <p className='text-gray-500 line-clamp-2'>{book.description}</p>
                <Link href={`/all-books/${book.id}`} className="card-actions justify-end">
                    <button className="btn bg-linear-to-r from-[#212171c4] to-[#3DAAB0] text-white">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;