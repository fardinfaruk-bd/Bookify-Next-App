import React from 'react';

const Quotes = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-4xl text-center mb-10'>Quotes</h2>
            <div className='bg-[#a9d6d9] py-20 mb-10'>
                <div className='w-[50%] mx-auto flex flex-col gap-10 '>
                    <div className='flex justify-between'>
                        <div className='px-10 py-5 bg-white w-96 rounded-lg h-30 '>
                            <p className='text-[#212171] font-semibold italic'>“A Room without books is like a body without a soul.”</p>
                            <p className='italic text-gray-500 flex justify-end'>❝Marcus Tullius Cicero❞</p>
                        </div>
                        <div></div>
                    </div>
                    <div className='flex justify-between'>
                        <div></div>
                        <div className='px-10 py-5 bg-white h-30 w-96 rounded-lg '>
                            <p className='text-[#212171] font-semibold italic'>“So many books, so little time.”</p>
                            <p className='italic text-gray-500 flex justify-end'>❝Frank Zappa❞</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='px-10 py-5 bg-white w-96 h-30 rounded-lg'>
                            <p className='text-[#212171] font-semibold italic'>“Reading is essential for those who seek to rise above the ordinary.”</p>
                            <p className='italic text-gray-500 flex justify-end'>❝Jim Rohn❞</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quotes;