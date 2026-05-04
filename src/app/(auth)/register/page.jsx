"use client"

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const RegisterPage = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleRegister = async(data) => {
        const { name, photo, email, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            image: photo,
            email: email,
            password: password,
        })

        console.log(res, error);
        if (error) {
            toast.error(error.message)
        }
        if (res) {
            await authClient.signOut();
            toast.success("Sign up successfully")
            redirect("/login")

        }

    }

    return (
        <div className='container mx-auto min-h-screen flex justify-center items-center bg-[#F3F3F3]'>
            <div className='p-10 rounded-xl bg-white'>
                <h1 className='font-semibold bg-linear-to-r from-[#21217167] to-[#3DAAB0] bg-clip-text text-transparent text-[30px] text-center p-10 '>Register your account</h1>
                <hr className='border-[#c9bebe] mb-6' />
                <form className='space-y-5' onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold  text[#403F3F]">Name</legend>
                        <input type="text" {...register("name", { required: "This name field is required" })} className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your Name" />
                        {errors.name && <span className='text-red-500'>{errors.name?.message}</span>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold  text[#403F3F]">Photo URL</legend>
                        <input type="text" {...register("photo", { required: "This Photo field is required" })} className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your a Photo URL" />
                        {errors.photo && <span className='text-red-500'>{errors.photo?.message}</span>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold  text[#403F3F]">Email</legend>
                        <input type="email" {...register("email", { required: "This Email field is required" })} className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your Email Address" />
                        {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend font-semibold  text[#403F3F]">Password</legend>
                        <input type={isShowPassword ? "text" : "password"} {...register("password", { required: "This Password field is required" })} className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your password" />
                        <span className='absolute right-2 top-4 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEyeSlash /> : <FaEye />}</span>
                        {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}
                    </fieldset>

                    <button className='btn bg-linear-to-r from-[#21217167] to-[#3DAAB0] text-white w-full text-xl p-6 mb-10 hover:scale-105 transition duration-300  hover:from-[#3DAAB0] hover:to-[#21217167]'>Log In</button>

                </form>
            </div>
        </div>
    );
};

export default RegisterPage;