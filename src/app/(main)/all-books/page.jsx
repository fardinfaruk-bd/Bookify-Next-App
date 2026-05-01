import LeftSidebar from '@/components/AllBook/LeftSidebar';
import { getBooks } from '@/lib/data';
import BookCard from '@/ui/BookCard';
import React from 'react';

const AllBooksPage = async() => {
    const Books = await getBooks();
    return (
        <div className='container mx-auto my-8'>
            <div className='grid grid-cols-12 gap-5 '>
                <div className='col-span-3'>
                    <LeftSidebar />
                </div>
                <div className='col-span-9 '>
                    <h2 className='font-bold text-xl text-[#403F3F] mb-6'>All Books</h2>
                    <div className='border border-[#E7E7E7] rounded-lg p-7.5 space-y-5 grid grid-cols-3 gap-5'>
                        {
                            Books.map((book) => <BookCard book={book} key={book.id} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBooksPage;