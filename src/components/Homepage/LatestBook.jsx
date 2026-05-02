import { getBooks } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestBook = async () => {
    const books = await getBooks();
    const NewArrival = books.filter(book => book.is_new === true);

    return (
        <div className='flex items-center gap-4 justify-between bg-[#F3F3F3] p-3 container mx-auto my-15  mt-15'>
            <button className='btn bg-[#3DAAB0] text-white text-xl font-medium p-5'>New Arrivals:</button>
            <Marquee pauseOnHover={true} speed={100} className='text-[#403F3F] font-medium text-xl space-x-5'>

                {NewArrival.map((n, i) => (
                    <div key={i} className="mx-30  transition-all duration-500  transform hover:scale-110 flex flex-col items-center gap-3">
                        <Image src={n.image_url} alt={n.title} width={120} height={120} className="object-contain" />
                        <p>{n.title}</p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default LatestBook;