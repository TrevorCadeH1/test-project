'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useForm } from 'react-hook-form';

interface SignInFormInputs {
    email: string;
    password: string;
}

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const { login } = useAuth();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormInputs>({
        mode: 'onTouched',
    });

    const onSubmit = async (data: SignInFormInputs) => {
        setError('');
        setIsLoading(true);
        try {
            const result = await login(data.email, data.password);
            if (result.success) {
                router.push('/home');
            } else {
                setError(result.message || 'Login failed. Please check your information.');
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="responsive-max-width min-h-screen flex flex-col -mt-100 md:-mt-80">
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0">
                <div className="border border-neutral-300 rounded-lg shadow-md bg-white p-4 sm:p-8 w-full max-w-md">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-2">Account Sign in</h2>
                    <p className="text-center text-black mb-6 text-sm sm:text-md">
                        Log into your account to access custom pricing, exclusive discounts, personalized support, and many more.
                    </p>
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-4 text-sm">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Email/User ID"
                                className="w-full border border-neutral-200 rounded px-3 py-2 focus:outline-none text-sm sm:text-base text-black"
                                disabled={isLoading}
                                {...register('email', { required: 'Email/User ID is required' })}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="mb-4 relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                className="w-full border border-neutral-200 rounded px-3 py-2 focus:outline-none text-sm sm:text-base text-black"
                                disabled={isLoading}
                                {...register('password', { required: 'Password is required' })}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(prev => !prev)}
                                className="absolute right-4 top-2.5 text-black text-xs sm:text-sm font-semibold hover:cursor-pointer"
                                tabIndex={-1}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-black text-white font-semibold hover:cursor-pointer hover:bg-black/80 py-2 rounded mt-2 text-sm sm:text-base"
                        >
                            {isLoading ? 'Signing in...' : 'Sign in'}
                        </button>
                    </form>
                    <div className="flex flex-row justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-black mt-4">
                        <a href="#" className="hover:underline hover:text-red-700">Forgot user ID?</a>
                        <span className="inline">&bull;</span>
                        <a href="#" className="hover:underline hover:text-red-700">Forgot password?</a>
                    </div>
                    <div className="border-t border-neutral-200 mt-4" />
                    <div className="text-center text-xs sm:text-sm mt-4 text-black mb-2">
                        Don't have an online account?
                        <button className="border border-neutral-300 rounded px-3 sm:px-4 py-1 font-sans font-semibold bg-white hover:cursor-pointer hover:border-black ml-2 sm:ml-5 mt-2 sm:mt-0">
                            Create an Account
                        </button>
                    </div>
                </div>
            </div>
            <div className="-mt-100 md:-mt-100"></div>
        </div>
    );
}
