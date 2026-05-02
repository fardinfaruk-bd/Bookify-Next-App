import { getCategories } from '@/lib/data';
import Link from 'next/link';

const LeftSidebar = async () => {
    const categories = await getCategories();



    return (
        <div className='space-y-5 border border-[#E7E7E7] rounded-lg p-7.5 h-full'>
            <h2 className='font-bold text-xl text-[#403F3F] mb-6'>Categories</h2>
            <Link href="/all-books" className='btn w-full bg-[#3daab02d] border-none'>
                All Books
            </Link>
            {
                categories.map((category) => (
                    <Link key={category.id} href={`/all-books?category=${category.name}`}
                        className={ "btn w-full bg-[#3daab02d]"}
                    >
                        {category.name}
                    </Link>
                ))
            }


        </div>
    );
};

export default LeftSidebar;