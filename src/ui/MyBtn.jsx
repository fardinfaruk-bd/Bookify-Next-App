"use client"
import React from 'react';
import { toast } from 'react-toastify';

const MyBtn = ({Book}) => {
    const handleBorrowBtn = ({}) => {
        toast.success(`${Book.title} borrowed successfully!`);
    }
    return (
        <div className="card-actions justify-center md:justify-start">
            <button className="btn bg-linear-to-r  from-[#212171c4] to-[#3DAAB0] p-5 text-lg text-white rounded-lg " onClick={handleBorrowBtn}>Borrow This Book</button>
        </div>
    );
};

export default MyBtn;