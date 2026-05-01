import { getCategories } from '@/lib/data';
import React from 'react';

const LeftSidebar = async() => {
    const categories = await getCategories()
    return (
        <div className='space-y-5 border border-[#E7E7E7] rounded-lg p-7.5 h-full'>
            <h2 className='font-bold text-xl text-[#403F3F] mb-6'>Categories</h2>
            {
                categories.map((category, i) => <button className='btn flex flex-col  w-full bg-[#3daab02d] border-none' key={i}>{category.name}</button>)
            }
        </div>
    );
};

export default LeftSidebar;