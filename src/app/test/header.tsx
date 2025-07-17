'use client';
import React from 'react';
import AuthButton from '@/components/AuthButton';

export default function Header() {
    return(
        <div className ="responsive-max-width">
            
            <div className="bg-white flex items-center justify-between px-2 py-2">
                <div className="flex items-center ml-4">
                    <img src="/logo.png" alt="Logo" className="h-15 w-auto" />
                </div>
                <div className="flex justify-end text-end">
                    <AuthButton />
                </div>
            </div>
            <div className="bg-green-blend px-2 md:px-4 py-2">
                <div className="flex items-center justify-center">
                    <h1 className="text-black text-xs md:text-[0.9rem] flex items-center text-center leading-tight">
                        Welcome to the All New and Improved Würth Baer Supply Company Website!
                    </h1>
                    <div className="ml-4 flex-shrink-0">
                    </div>
                </div>
            </div>
        </div>
    )
}