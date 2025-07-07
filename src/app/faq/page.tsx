'use client'

import React, { useState } from 'react';
import Header from '../test/header';
import Footer from '../test/footer';
import { CiAt } from "react-icons/ci";
import { FaComputer } from "react-icons/fa6";
import { GrWheelchair } from "react-icons/gr";
import { RiCustomerServiceLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";






export default function FaqPage() {
    const [open, setOpen] = useState<number | false>(false);

    return (
        <div className="responsive-max-width min-h-screen flex flex-col">
            <Header />

            {/* Frequently Asked Questions (FAQ) Section */}
            <div className="flex flex-col justify-center text-center text-3xl sm:text-4xl font-semibold mt-10 sm:mt-15 text-black">
                Frequently Asked Questions (FAQ)
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 px-2 sm:px-0 mt-8 sm:mt-10">
                <div className="border border-neutral-200 w-full sm:w-[700px] h-auto sm:h-[250px] rounded-lg bg-white flex flex-col justify-start mb-4 sm:mb-0">
                    <div className="flex flex-row items-start mt-8 ml-6 sm:ml-8">
                        <CiAt className="text-red-700 w-[40px] h-[40px] mr-4" />
                        <div className="text-black font-semibold text-lg sm:text-xl">
                            Contact Webmaster
                        </div>
                    </div>
                    <div className="text-gray-900 text-sm md:text-base mt-4 ml-10 md:ml-22">
                        If you have any questions that aren't answered somewhere on this page or <br className="hidden sm:block" />
                        any login issues or problems using our website, please email our <br className="hidden sm:block" />
                        Webmaster
                    </div>
                    <div className="flex flex-row items-center mt-4 ml-10 sm:ml-22 font-sans">
                        <CiMail className="text-black w-[20px] h-[20px] mr-2" />
                        <span className="font-normal text-sm sm:text-md mb-1 hover:cursor-pointer break-all">webmaster@baersupply.com</span>
                    </div>
                </div>

                <div className="border border-neutral-200 w-full sm:w-[700px] h-auto sm:h-[250px] rounded-lg bg-white flex flex-col justify-start">
                    <div className="flex flex-row items-start mt-8 ml-6 sm:ml-8">
                        <FaComputer className="text-red-700 w-[40px] h-[40px] mr-4" />
                        <div className="text-black font-semibold text-lg sm:text-xl">
                            Web Support Hotline
                        </div>
                    </div>
                    <div className="text-gray-900 text-sm md:text-base mt-4 ml-10 md:ml-22">
                        For immediate Website assistance via the phone, please contact our Web<br className="hidden sm:block" />
                        Support Hotline
                    </div>
                    <div className="flex flex-row items-center mt-4 md:mt-8 ml-10 sm:ml-22 font-sans">
                        <FiPhone className="text-black w-[20px] h-[20px] mr-2" />
                        <span className="font-normal text-sm sm:text-md mb-1 hover:cursor-pointer">800-944-2237 x4444</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 px-2 sm:px-0 mt-8 sm:mt-10">
                <div className="border border-neutral-200 w-full sm:w-[700px] h-auto sm:h-[250px] rounded-lg bg-white flex flex-col justify-start mb-4 sm:mb-0">
                    <div className="flex flex-row items-start mt-8 ml-6 sm:ml-8">
                        <GrWheelchair className="text-red-700 w-[40px] h-[40px] mr-4" />
                        <div className="text-black font-semibold text-lg sm:text-xl">
                            Persons with Disabilities
                        </div>
                    </div>
                    <div className="text-gray-900 text-sm md:text-base mt-4 ml-10 md:ml-22">
                        For persons with disabilities needing any additional assistance with this<br className="hidden sm:block" />
                        website, please contact Würth baer Supply Customer Service.
                    </div>
                    <div className="flex flex-row items-center mt-2 ml-10 sm:ml-22 font-sans">
                        <FiPhone className="text-black w-[20px] h-[20px] mr-2" />
                        <span className="font-normal text-sm sm:text-md mb-1 hover:cursor-pointer">800-289-2237</span>
                    </div>
                    <div className="flex flex-row items-center mt-2 ml-10 sm:ml-22 font-sans">
                        <CiMail className="text-black w-[20px] h-[20px] mr-2" />
                        <span className="font-normal text-sm sm:text-md mb-1 hover:cursor-pointer break-all">bcustomerservice@wurthbaersupply.com</span>
                    </div>
                </div>

                <div className="border border-neutral-200 w-full sm:w-[700px] h-auto sm:h-[250px] rounded-lg bg-white flex flex-col justify-start">
                    <div className="flex flex-row items-start mt-8 ml-6 sm:ml-8">
                        <RiCustomerServiceLine className="text-red-700 w-[40px] h-[40px] mr-4" />
                        <div className="text-black font-semibold text-lg sm:text-xl">
                            Customer Service
                        </div>
                    </div>
                    <div className="text-gray-900 text-sm md:text-base mt-4 ml-10 md:ml-22">
                        Würth Baer Supply Company<br />
                        909 Forest Edge Drive<br />
                        Vernon Hills Illinois 60061
                    </div>
                    <div className="flex flex-row items-center mt-2 ml-10 sm:ml-22 font-sans">
                        <FiPhone className="text-black w-[20px] h-[20px] mr-2" />
                        <span className="font-normal text-sm sm:text-md mb-1 hover:cursor-pointer">800-289-2237</span>
                    </div>
                    <div className="flex flex-row items-center mt-2 ml-10 sm:ml-22 font-sans">
                        <CiMail className="text-black w-[20px] h-[20px] mr-2" />
                        <span className="font-normal text-sm sm:text-md mb-1 hover:cursor-pointer break-all">bcustomerservice@wurthbaersupply.com</span>
                    </div>
                </div>
            </div>

            {/* Dropdown Section */}
            <div className="mt-10">
            {[
                {
                    title: "I can’t find what I’m looking for. How can I use search better?",
                    content: (
                        <div>
                            <p className="ml-2 sm:ml-4 mb-4 text-sm sm:text-base">
                                We're always working to make search better. We've added search by Manufacturer Part Number and the <br className="hidden sm:block" />
                                ability for the search function to find items with and without dashes or slashes or other special characters. <br className="hidden sm:block" />
                                We suggest you look at search the following way though:
                            </p>
                            <ol className="list-decimal list-inside ml-6 sm:ml-8 space-y-4 text-sm sm:text-base">
                                <li>
                                    <span className="font-semibold">Keep it Simple</span> – Just
                                    type a manufacturer part number with no reference to the
                                    manufacturer. Search looks at everything you type and tries
                                    to find a match. So, rather than search for “Rev A Shelf
                                    123456”, start with just the part number “123456”.
                                </li>
                                <li>
                                    <span className="font-semibold">Less is more</span> – If the
                                    part number that you type doesn’t find a result, try to
                                    remove some of the characters from the right side of the
                                    part number. Many times, those extra characters are a finish
                                    number that may no longer be available or was changed. A
                                    lesser part number may find a whole set of similar items.
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Use the Category Filters at the Left
                                    </span>{' '}
                                    – If you know the product type you are looking for, bypass
                                    the search and go directly to the category. Within each
                                    category and subcategory, you will find Amazon-like search
                                    filter criteria to help you narrow down a search for an
                                    item faster.
                                </li>
                                <li>
                                    <span className="font-semibold">My Purchases</span> – For
                                    items you’ve bought from us in the past, skip the search and
                                    go directly to My Purchases… top center of the page. My
                                    Purchases is a comprehensive list of all products you’ve
                                    purchased from us in the past 12 months in one easy to use
                                    list. Find items fast!
                                </li>
                            </ol>
                        </div>
                    ),
                },
                {
                    title: "Can I use my credit card instead of my account when ordering?",
                    content: (
                        <div>
                            <p className="ml-2 sm:ml-4 mb-4 text-sm sm:text-base">
                                After selecting items to purchase, view the contents of the Shopping Cart. Click the Checkout button. Fill <br className="hidden sm:block" />
                                out your shipping address and select your shipping method and continue. On the next screen, you will be <br className="hidden sm:block" />
                                prompted to pay via your Account or via a Credit Card. Fill out the Credit Card information and Submit the <br className="hidden sm:block" />
                                order.
                            </p>
                        </div>
                    ),
                },

                {
                    title: "How do I add a user to my Würth Baer Supply Account?",
                    content: (
                        <div>
                            <p className="ml-2 sm:ml-4 mb-4 text-sm sm:text-base">
                                Only the Primary user on an account can add new users to your Würth Baer Supply Account. <br className="hidden sm:block" />
                            </p>
                            <p className="ml-2 sm:ml-4 mb-4 text-sm sm:text-base">
                                To add a new user, sign in to your Würth Baer Supply Account. Then, click the "Administrator" link in the My <br className="hidden sm:block" />
                                Account menu of the Würth Baer Supply website. Fill out all of the information for the new user on the form <br className="hidden sm:block" />
                                including a User ID and password and then click the Add User button. The new user appears in the list of <br className="hidden sm:block" />
                                users at the bottom of the page. <br className="hidden sm:block" />
                            </p>
                        </div>
                    ),
                },
                {
                    title: "How do I order Laminate samples?",
                    content: (
                        <div>
                            <p className="ml-2 sm:ml-4 mb-4 text-sm sm:text-base">
                                Laminate samples are ordered <span className="font-semibold"> Free of charge </span> through our Sample Ordering feature. The Sample Ordering feature is accessed through the Digital Tools menu at the top of the screen. <br className="hidden sm:block" />
                            </p>
                        </div>
                    ),
                },
                {
                    title: "How can I change the password on my account?",
                    content: (
                        <div>
                            <p className="ml-2 sm:ml-4 mb-4 text-sm sm:text-base">
                                All users have the ability to change their own password. Simply login to the website and then go to the My <br className="hidden sm:block" />
                                Account menu at the top right. Within the My Account menu, to go the Profile Dashboard. There, under the <br className="hidden sm:block" />
                                Account Information section, click the Edit button to change your password.
                            </p>
                            <p className="ml-2 sm:ml-4 mb-4 text-sm sm:text-base">
                                If you've forgotten your website password, click Sign In to go to the Sign In popup and then click the <br className="hidden sm:block" />
                                "Forgot your password?" link, enter your User ID and click the <span className="font-semibold"> Email Me A Recovery Link </span> button and an <br className="hidden sm:block" />
                                email with instructions will be emailed to you at the email address defined on your account.
                            </p>
                            <p className="ml-2 sm:ml-4 mb-4 text-sm sm:text-base">
                                You may also contact the Primary Administrator (PA) on your account to have him/her change your <br className="hidden sm:block" />
                                password for you.
                            </p>
                        </div>
                    ),
                },
                {
                    title: "How do I remove a user from my Würth Baer Supply Account?",
                    content: (
                        <div className="rounded-b-lg">
                            <p className="ml-2 sm:ml-4 mb-4 text-sm sm:text-base">
                                Users cannot be deleted directly online by anyone except by the Primary Administrator (PA) for the <br className="hidden sm:block" />
                                account. The PA can access the Administrator functions of your account and Add or Delete any other user.
                            </p>
                            <p className="ml-2 sm:ml-4 mb-4 text-sm sm:text-base">
                                Primary Administrator users can only be deleted by contacting the Würth Baer Supply Webmaster at <br className="hidden sm:block" />
                                <span className="font-semibold"> 800-944-2237 x4444 </span> and providing new Primary Administrator details or by specifying an existing user <br className="hidden sm:block" />
                                account for which authority should be switched to.
                            </p>
                        </div>
                    ),
                },
            ].map((item, idx, arr) => (
                <div key={idx} className={`mt-${idx === 0 ? 8 : 0} px-2 sm:px-4 w-full max-w-4xl mx-auto`}>
                    <div
                        className={
                            `bg-neutral-100 border-t border-l border-r border-neutral-200` +
                            (idx === 0 ? ' rounded-t-lg' : '') +
                            (idx === arr.length - 1 ? ' rounded-b-lg border-b' : '')
                        }
                    >
                        <button
                            className="w-full flex items-center justify-between px-4 hover:cursor-pointer sm:px-6 py-4 text-left focus:outline-none"
                            onClick={() => setOpen(openIdx => openIdx === idx ? false : idx)}
                        >
                            <span className="text-base sm:text-lg font-medium ml-2 sm:ml-4 -mb-1 text-black hover:cursor-pointer">
                                {item.title}
                            </span>
                            <span className="ml-2 sm:ml-4 text-2xl">{open === idx ? '−' : '+'}</span>
                        </button>
                        {open === idx && (
                            <div className="px-4 sm:px-6 pb-6 text-gray-900">
                                {item.content}
                            </div>
                        )}
                    </div>
                </div>
            ))}
            </div>
            <Footer />
        </div>
    )
}