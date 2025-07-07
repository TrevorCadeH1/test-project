'use client'

import React from 'react';
import Header from '../test/header';
import Footer from '../test/footer';
import Link from 'next/link';
import { MdOutlineContactPhone } from "react-icons/md";
import { CiAt } from "react-icons/ci";
import { IoChatboxOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";




export default function HelpPage() {
    return (
        <div className="responsive-max-width min-h-screen flex flex-col">
            <Header />

            {/* Introduction Section */}
            <div className="flex flex-col justify-center text-center text-4xl font-semibold mt-15 text-black">
            Würth Help
            </div>
            <div className="flex flex-col justify-center text-center text-md mt-5 text-black">
            How can I contact Wurth Baer Supply Company?
            </div>

            {/* Contact Section */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 px-2 sm:px-0 mt-5">
            <div className="border border-neutral-200 w-full sm:w-[300px] h-[275px] rounded-lg bg-white mb-4 sm:mb-0">
                <MdOutlineContactPhone className="text-red-700 ml-5 mt-8 w-[25px] h-[25px]"/>
                <p className="text-start text-gray-900 font-semibold text-xl mt-4 ml-5">
                Call or Text Us
                </p>
                <p className="text-start text-black text-md mt-4 ml-5">
                Customer Service:
                </p>
                <button className="text-black underline text-md hover:cursor-pointer ml-5 mt-1">
                800-289-2237
                </button>
                <p className="text-start text-black text-md mt-5 ml-5">
                Website Support (call only):
                </p>
                <button className="text-black underline text-md hover:cursor-pointer ml-5 mt-1">
                800-944-2237 x4444
                </button>
            </div>

            <div className="border border-neutral-200 w-full sm:w-[300px] h-[275px] rounded-lg bg-white mb-4 sm:mb-0">
                <CiAt className="text-red-700 ml-5 mt-8 w-[25px] h-[25px]"/>
                <p className="text-start text-gray-900 font-semibold text-xl mt-4 ml-5">
                Email Us
                </p>
                <p className="text-start text-gray-900 text-md mt-8 ml-5">
                Get in touch with us
                </p>
                <button className="text-black underline text-md hover:cursor-pointer ml-5 mt-8">
                Send an Email
                </button>
            </div>

            <div className="border border-neutral-200 w-full sm:w-[300px] h-[275px] rounded-lg bg-white mb-4 sm:mb-0">
                <IoChatboxOutline className="text-red-700 ml-5 mt-8 w-[25px] h-[25px]"/>
                <p className="text-start text-gray-900 font-semibold text-xl mt-4 ml-5">
                Chat with us
                </p>
                <p className="text-start text-gray-900 text-md mt-4 ml-5">
                Available hours:
                </p>
                <p className="text-start text-gray-900 text-md mt-2 ml-5">
                Mon - Fri, 7:30 am to 5pm CST
                </p>
                <button className="text-black underline text-md hover:cursor-pointer ml-5 mt-7">
                <Link href="https://vm.providesupport.com/1rwdd3rouwxx40ud1708atmm94">
                Chat now
                </Link>
                </button>
            </div>

            <div className="border border-neutral-200 w-full sm:w-[300px] h-[275px] rounded-lg bg-white">
                <HiOutlineBuildingOffice2 className="text-red-700 ml-5 mt-8 w-[25px] h-[25px]"/>
                <p className="text-start text-black font-semibold text-xl mt-4 ml-5">
                Visit our stores
                </p>
                <p className="text-start text-black text-md mt-4 ml-5">
                Find a location closest to you.
                </p>
                <button className="text-black underline text-md hover:cursor-pointer ml-5 mt-8">
                <Link href="https://baersupply.vercel.app/aboutus#LocationsListSection">
                Show locations
                </Link>
                </button>
            </div>
            </div>

            {/* How else can we help you? Section */}
            <div className="text-center justify-center text-4xl text-black mt-15 text-semibold">
            How else can we help you?
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 px-2 sm:px-0 mt-10">
            <div className="border border-neutral-200 w-full sm:w-[275px] h-[150px] rounded-lg bg-white mb-4 sm:mb-0">
                <div className="text-black font-semibold text-xl mt-4 ml-5">
                Request a Quote
                </div>
                <div className="mr-4 ml-4 mt-12">
                <button className="text-black text-center bg-gray-100 hover:bg-gray-300 hover:cursor-pointer w-full h-[35px] rounded">
                    <Link href="https://baersupply.vercel.app/cart">
                    Get Quote
                    </Link>
                </button>
                </div>
            </div>

            <div className="border border-neutral-200 w-full sm:w-[275px] h-[150px] rounded-lg bg-white mb-4 sm:mb-0">
                <div className="text-black font-semibold text-xl mt-4 ml-5">
                Frequently Asked Questions
                </div>
                <div className="mr-4 ml-4 mt-5">
                <button className="text-black text-center bg-gray-100 hover:bg-gray-300 hover:cursor-pointer w-full h-[35px] rounded">
                    <Link href="https://baersupply.vercel.app/faq">
                    Read FAQs
                    </Link>
                </button>
                </div>
            </div>

            <div className="border border-neutral-200 w-full sm:w-[275px] h-[150px] rounded-lg bg-white mb-4 sm:mb-0">
                <div className="text-black font-semibold text-xl mt-4 ml-5">
                Remote Technical<br /> Support
                </div>
                <div className="mr-4 ml-4 mt-5">
                <button className="text-black text-center bg-gray-100 hover:bg-gray-300 hover:cursor-pointer w-full h-[35px] rounded">
                    <Link href="https://baersupply.vercel.app/remotesupport">
                    Get Support
                    </Link>
                </button>
                </div>
            </div>

            <div className="border border-neutral-200 w-full sm:w-[275px] h-[150px] rounded-lg bg-white">
                <div className="text-black font-semibold text-xl mt-4 ml-5">
                I would like to..
                </div>
                <div className="mr-4 ml-4 mt-2">
                <button className="text-black text-center bg-gray-100 hover:bg-gray-300 hover:cursor-pointer w-full h-[35px] rounded">
                    <Link href="https://baersupply.vercel.app/sign-in">
                    Buy again
                    </Link>
                </button>
                <button className="text-black text-center mt-2 bg-gray-100 hover:bg-gray-300 hover:cursor-pointer w-full h-[35px] rounded">
                    <Link href="https://baersupply.vercel.app/sign-in">
                    Update account info
                    </Link>
                </button>
                </div>
            </div>
            </div>

            {/* Popular Links Section */}
            <div className="text-center justify-center text-4xl text-black mt-15 text-semibold">
            Popular Links
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 px-2 sm:px-0 mt-10">
            <div className="border border-neutral-200 w-full sm:w-[700px] h-[300px] rounded-lg bg-white mb-4 sm:mb-0">
                <div className="text-black font-semibold text-2xl mt-8 ml-5">
                Order Information
                </div>
                <ul className="list-disc ml-8 mt-6">
                <li className="text-gray-900 underline marker:text-gray-200 text-lg hover:cursor-pointer ml-2 pl-2 mb-2">
                    <Link href="https://baersupply.vercel.app/sign-in">
                    Order History and Tracking
                    </Link>
                </li>
                <li className="text-gray-900 underline marker:text-gray-200 text-lg hover:cursor-pointer ml-2 pl-2 mb-2">
                    <Link href="https://baersupply.vercel.app/terms-conditions">
                    Returns and Cancellations
                    </Link>
                </li>
                <li className="text-gray-900 underline marker:text-gray-200 text-lg hover:cursor-pointer ml-2 pl-2 mb-2">
                    <Link href="https://baersupply.vercel.app/cart">
                    Quote Resquests
                    </Link>
                </li>
                <li className="text-gray-900 underline marker:text-gray-200 text-lg hover:cursor-pointer ml-2 pl-2 mb-2">
                    <Link href="https://baersupply.vercel.app/sign-in">
                    Shopping Lists
                    </Link>
                </li>
                <li className="text-gray-900 underline marker:text-gray-200 text-lg hover:cursor-pointer ml-2 pl-2 mb-2">
                    <Link href="https://baersupply.vercel.app/sign-in">
                    My Purchases
                    </Link>
                </li>
                </ul>
            </div>

            <div className="border border-neutral-200 w-full sm:w-[700px] h-[300px] rounded-lg bg-white">
                <div className="text-black font-semibold text-2xl mt-8 ml-5">
                Resources
                </div>
                <ul className="list-disc ml-8 mt-6">
                <li className="text-gray-900 underline marker:text-gray-200 text-lg hover:cursor-pointer ml-2 pl-2 mb-2">
                    <Link href="https://baersupply.vercel.app/echeck">
                    ACH / eCheck Registration
                    </Link>
                </li>
                </ul>
            </div>
            </div>

            <div className="mt-10">

            </div>
            <Footer />
        </div>
    )
}