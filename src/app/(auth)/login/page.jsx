"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false)
    const handleLogin = async(data) => {

        const { email, password } = data;
        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res, error);
        if (error) {
            toast.error(error.message)
        }
        if (res) {
            toast.success("Sign up successfully")

        }

    }
    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        
    };

    return (
        <div className='container mx-auto min-h-screen flex justify-center items-center bg-[#F3F3F3]'>
            <div className='p-8 rounded-xl bg-white'>
                <h1 className='font-semibold bg-linear-to-r from-[#21217167] to-[#3DAAB0] bg-clip-text text-transparent text-[30px] text-center px-10 py-5'>Login Your Account</h1>
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
                    <button className='btn bg-linear-to-r from-[#21217167] to-[#3DAAB0] text-white w-full text-xl p-6 hover:scale-105 transition duration-300'>Log In</button>
                    <div className='flex justify-center items-center gap-1 mb-5'>
                        <p className='text-[#706F6F]'>Do not have an account?</p>
                        <Link href={"/register"}>
                            <button className='bg-linear-to-r from-[#21217167] to-[#3DAAB0] bg-clip-text text-transparent font-semibold cursor-pointer'>Register</button>
                        </Link>
                    </div>
                    <div className='mb-5 hover:scale-105 transition duration-300 '>
                        <button className='btn w-full border-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white hover:border-none' onClick={handleGoogleLogin}> <FcGoogle size="20"/> Login With Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;