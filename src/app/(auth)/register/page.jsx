"use client"

import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const RegisterPage = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleRegister = async (data) => {
        toast.success("Sign up successfully")
        const {email, password, name, photo} = data;

    }

    return (
        <div className='container mx-auto min-h-screen flex justify-center items-center bg-[#F3F3F3]'>
            <div className='p-10 rounded-xl bg-white'>
                <h1 className='font-semibold text-[#403F3F] text-[30px] text-center p-10 '>Register your account</h1>
                <hr className='border-[#c9bebe] mb-6' />
                <form className='space-y-5' onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-[18px] text[#403F3F]">Your Name</legend>
                        <input type="text" {...register("name", { required: "This name field is required" })} className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your Name" />
                        {errors.name && <span className='text-red-500'>{errors.name?.message}</span>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-[18px] text[#403F3F]">Photo URL</legend>
                        <input type="text" {...register("photo", { required: "This Photo field is required" })} className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your a Photo URL" />
                        {errors.photo && <span className='text-red-500'>{errors.photo?.message}</span>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-[18px] text[#403F3F]">Email</legend>
                        <input type="email" {...register("email", { required: "This Email field is required" })} className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your Email Address" />
                        {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend font-semibold text-[18px] text[#403F3F]">Password</legend>
                        <input type={isShowPassword ? "text" : "password"} {...register("password", { required: "This Password field is required" })} className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your password" />
                        <span className='absolute right-2 top-4 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEyeSlash /> : <FaEye />}</span>
                        {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}
                    </fieldset>
                    
                    <button className='btn bg-[#403F3F] text-white w-full text-xl p-6'>Log In</button>

                </form>
            </div>
        </div>
    );
};

export default RegisterPage;