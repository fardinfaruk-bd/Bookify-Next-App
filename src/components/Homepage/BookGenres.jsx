import SmallBookCard from '@/ui/SmallBookCard';
import Link from 'next/link';
import React from 'react';

const BookGenres = ({ Books }) => {
    const trillerBooks = Books.filter((book) => book.category === "Thriller");
    const HistoryBooks = Books.filter((book) => book.category === "History");
    const ProgrammingBooks = Books.filter((book) => book.category === "Programming");

    return (
        <div className='container mx-auto mb-10'>
            <h2 className='font-bold text-4xl text-center mb-5'>Book Genres</h2>

            <div className='grid grid-cols-1 bg-white md:grid-cols-3 w-[80%] mx-auto '>
                <div className=' px-10 py-20 w-96'>
                    <h2 className='text-xl font-semibold'>Triller</h2>
                    <div className='flex flex-col gap-2'>
                        {
                            trillerBooks.slice(0, 2).map((book) => <SmallBookCard key={book.id} book={book} />)
                        }
                        <Link href="/all-books?category=Thriller" className='text-[#3DAAB0] font-semibold'>See All</Link>
                    </div>
                </div>

                <div className=' px-10 py-20 w-96'>
                    <h2 className='text-xl font-semibold'>History</h2>
                    <div className='flex flex-col gap-2'>
                        {
                            HistoryBooks.slice(0, 2).map((book) => <SmallBookCard key={book.id} book={book} />)
                        }
                        <Link href="/all-books?category=History" className='text-[#3DAAB0] font-semibold'>See All</Link>
                    </div>
                </div>

                <div className=' px-10 py-20 w-96'>
                    <h2 className='text-xl font-semibold'>Programming</h2>
                    <div className='flex flex-col gap-2'>
                        {
                            ProgrammingBooks.slice(0, 2).map((book) => <SmallBookCard key={book.id} book={book} />)
                        }
                        <Link href="/all-books?category=Programming" className='text-[#3DAAB0] font-semibold'>See All</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookGenres;