import { getBooks } from '@/lib/data';
import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestBook = async () => {
    const books = await getBooks();
    const NewArrival = books.filter(book => book.is_new === true);

    return (
        <div className='flex items-center gap-4 justify-between bg-[#F3F3F3] p-3 container mx-auto my-15  mt-15'>
            <button className='btn bg-[#3DAAB0] text-white text-xl font-medium p-5'>New Arrivals:</button>
            <Marquee pauseOnHover={true} speed={100} className='text-[#403F3F] font-medium text-xl space-x-5'>
                <h2 className='text-[#3DAAB0] font-medium text-xl'>Just For You: </h2>
                {NewArrival.map((n, i) => (
                    <p key={i}>
                        <span className="mx-2">
                            {n.title}
                        </span>
                        ------
                    </p>
                ))}
            </Marquee>
        </div>
    );
};

export default LatestBook;