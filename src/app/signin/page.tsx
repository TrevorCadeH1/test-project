'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Header from '../home/header';
import Footer from '../home/footer';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEmailTouched(true);
        setPasswordTouched(true);
        setError('');

        if (!email || !password) return;

        setIsLoading(true);

        try {
            const result = await login(email, password);
            
            if (result.success) {
                // Redirect to the main page when logged in
                router.push('/home');
            } else {
                setError(result.message || 'Login failed. Please check your credentials.');
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="responsive-max-width min-h-screen flex flex-col">
            <Header />
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0">
                <div className="mt-10 sm:mt-20 border border-neutral-300 rounded-lg shadow-md bg-white p-4 sm:p-8 w-full max-w-md">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-2">Account Sign in</h2>
                    <p className="text-center text-black mb-6 text-sm sm:text-md">
                        Log into your account to access custom pricing, exclusive discounts, personalized support, and many more.
                    </p>
                    
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-4 text-sm">
                            {error}
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Email/User ID"
                                className="w-full border border-neutral-200 rounded px-3 py-2 focus:outline-none text-sm sm:text-base text-black"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                onBlur={() => setEmailTouched(true)}
                                disabled={isLoading}
                            />
                            {emailTouched && !email && (
                                <p className="text-red-500 text-xs mt-1">Email/User ID is required</p>
                            )}
                        </div>
                        <div className="mb-4 relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                className="w-full border border-neutral-200 rounded px-3 py-2 focus:outline-none text-sm sm:text-base text-black"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                onBlur={() => setPasswordTouched(true)}
                                disabled={isLoading}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(prev => !prev)}
                                className="absolute right-4 top-2.5 text-black text-xs sm:text-sm font-semibold hover:cursor-pointer"
                                tabIndex={-1}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                            {passwordTouched && !password && (
                                <p className="text-red-500 text-xs mt-1">Password is required</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading || !email || !password}
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
            <div className="mt-10 sm:mt-40"></div>
            <Footer />
        </div>
    );
}
