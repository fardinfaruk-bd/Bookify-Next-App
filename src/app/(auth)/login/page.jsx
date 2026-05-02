"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleLogin = async (data) => {
        toast.success("Sign in successfully")

    }

    return (
        <div className='container mx-auto min-h-screen flex justify-center items-center bg-[#F3F3F3]'>
            <div className='p-5 rounded-xl bg-white'>
                <h1 className='font-semibold text-[#403F3F] text-[30px] text-center p-10 '>Login Your Account</h1>
                <hr className='border-[#c9bebe] mb-6' />
                <form className='space-y-4' onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-[18px] text[#403F3F]">Email address</legend>
                        <input type="text" {...register("email", { required: "This email field is required" })} className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your email address" />
                        {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend font-semibold text-[18px] text[#403F3F]">Password</legend>
                        <input type={isShowPassword ? "text" : "password"} {...register("password", { required: "This Password field is required" })} className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your password" />
                        <span className='absolute right-2 top-4 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEyeSlash /> : <FaEye />}</span>
                        {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}
                    </fieldset>
                    <button className='btn bg-[#403F3F] text-white w-full text-xl p-6'>Log In</button>
                    <div className='flex justify-center items-center gap-1 mb-5'>
                        <p className='text-[#706F6F]'>Do not have an account?</p>
                        <Link href={"/register"}>
                            <button className='bg-linear-to-r from-[#21217167] to-[#3DAAB0] bg-clip-text text-transparent font-semibold cursor-pointer'>Register</button>
                        </Link>
                    </div>
                    <div className='space-y-2'>
                        <button className='btn w-full border-blue-500 text-blue-500'> <FcGoogle /> Login With Google</button>
                        <button className=' btn w-full'><FaGithub /> Login With Github</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;