'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TbArrowBigUp } from "react-icons/tb"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiFilePaperFill } from "react-icons/ri";

export default function Footer() {
    return (
        <div className= "responsive-max-width ">
            {/* Seventh Row: Call and Back to Top Section */}
            <div className="responsive-max-width flex flex-col md:flex-row mt-10 md:mt-20 gap-2 md:gap-0">
                <div className="flex items-start justify-start ml-2 md:ml-10 mt-2 md:mt-4 hover:cursor-pointer hover:underline hover:text-red-700 text-xs md:text-base">
                    Need help? Call (800) 289-2237
                </div>
                <div className="flex items-end justify-end ml-0 md:ml-auto mr-2 md:mr-10 rounded-md bg-neutral-100 w-full md:w-[140px] h-[40px] md:h-[40px] hover:cursor-pointer hover:bg-neutral-200 mt-2 md:mt-0">
                    <button
                        className="text-black flex items-center justify-center w-full md:mr-0 mb-2.5 md:mb-2 gap-2 hover:cursor-pointer print:hidden text-xs md:text-base"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <TbArrowBigUp /> Back to top
                    </button>
                </div>
            </div>

            <div className="border-t border-neutral-200 mt-4" />

            {/* 8th Row: Footer Links Section */}
            <div className="responsive-max-width grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 mt-4">
                <div className="flex flex-col items-start justify-start md:gap-1 ml-4 md:ml-6 lg:ml-10">
                    <div className="text-neutral-400 text-lg mb-2">
                        Company Information
                    </div>
                    <Link href="https://baersupply.vercel.app/aboutus"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">About</span></Link>
                    <Link href="https://baersupply.vercel.app/contactus"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">Contact Us</span></Link>
                    <Link href="https://recruiting.ultipro.com/WUR1001WGNA/JobBoard/a5bcdfc2-ab10-403c-a590-9dc0784f71fc/?q=&o=postedDateDesc"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">Careers</span></Link>
                    <Link href="https://baersupply.vercel.app/tax-form"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">Sales Tax and Exemption</span></Link>
                    <Link href="https://baersupply.vercel.app/echeck"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">ACH / e-Check Registration</span></Link>
                    <Link href="https://baersupply.vercel.app/terms-conditions"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">Terms & Conditions</span></Link>
                    <Link href="https://baersupply.vercel.app/privacy"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">Privacy Notice</span></Link>
                    <Link href="https://baersupply.vercel.app/accessibility"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">Accessibility Statement</span></Link>
                    <Link href="https://baersupply.vercel.app/help"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">Help</span></Link>
                    <Link href="https://baersupply.vercel.app/faq"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">FAQ</span></Link>
                </div>

                <div className="flex flex-col items-start justify-start md:gap-1 ml-4 md:ml-6 lg:ml-10">
                    <div className="text-neutral-400 text-lg mb-2">
                        Shop With Us
                    </div>
                    <Link href="https://baersupply.vercel.app/brand"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">Shop by Brand</span></Link>
                    <Link href="https://baersupply.vercel.app/clearance"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">Clearance</span></Link>
                    <Link href="https://baersupply.vercel.app/daily-discounts"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">Daily Discounts</span></Link>
                    <Link href="https://baersupply.vercel.app/promotions"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">Catalogs</span></Link>
                    <Link href="https://baersupply.vercel.app/resource-center"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">Vendor Literature</span></Link>
                </div>

                <div className="flex flex-col items-start justify-start md:gap-1 ml-4 md:ml-6 lg:ml-10">
                    <div className="text-neutral-400 text-lg mb-2">
                        Services
                    </div>
                    <Link href="https://baersupply.vercel.app/government"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">SAM.gov - CAGE Code: 1UXJ6</span></Link>
                    <Link href="https://baersupply.vercel.app/architects-designers"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">A & D Portal</span></Link>
                    <Link href="https://baersupply.vercel.app/orsy"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">ORSY - Inventory Management Solution</span></Link>
                    <Link href="https://baersupply.vercel.app/largemachinery"><span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">Machinery</span></Link>
                </div>

                <div className="flex flex-col items-start justify-start ml-4 md:ml-6 lg:ml-10">
                    <div className="text-neutral-400 text-lg mb-2">
                        Contact
                    </div>
                    <span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">Toll-free (800) 289-2237</span>
                    <span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">Website Support (800) 944-2237 x4444</span>
                    <span className="mb-2 hover:cursor-pointer hover:text-black/80 print:hover:cursor-default print:hover:text-current">Support via Text / SMS (800) 289-2237</span>
                </div>
            </div>

            {/* 9th Row: Social Media Section */}
            <div className="responsive-max-width grid grid-rows-1 mt-4">
                <div className="flex lg:flex-row md:flex-col sm:flex-col items-start justify-start">
                    <div className="flex md:flex-row sm:flex-col flex-wrap md:flex-nowrap items-center md:items-start">
                        <Image
                            src="/SAM.png"
                            alt="SAM.gov Photo"
                            width={300}
                            height={300}
                            className="w-auto h-auto ml-10 lg:ml-10 md:ml-6 sm:ml-4 mb-2 sm:mb-4"
                        />
                        <Image
                            src="/VIKINGCLOUD.png"
                            alt="Viking Cloud Photo"
                            width={300}
                            height={300}
                            className="w-auto h-auto mt-4 lg:mt-4 md:mt-4 sm:mt-0 ml-4 lg:ml-4 md:ml-4 sm:ml-4 mb-2 sm:mb-4"
                        />
                        <Image
                            src="/FSC.png"
                            alt="FSC Photo"
                            width={300}
                            height={300}
                            className="w-auto h-auto mt-4 lg:mt-4 md:mt-4 sm:mt-0 ml-4 lg:ml-4 md:ml-4 sm:ml-4 mb-2 sm:mb-4"
                        />
                        <Image
                            src="/CARB2.png"
                            alt="CARB2 Photo"
                            width={300}
                            height={300}
                            className="w-auto h-auto ml-4 lg:ml-4 md:ml-4 sm:ml-4 mb-2 sm:mb-4"
                        />
                        <Image
                            src="/VENDERFREIGHT.png"
                            alt="VENDER FRIEGHT Photo"
                            width={300}
                            height={300}
                            className="w-auto h-auto mt-6 lg:mt-6 md:mt-6 sm:mt-0 ml-4 lg:ml-4 md:ml-4 sm:ml-4 mb-2 sm:mb-4"
                        />
                        <Image
                            src="/digicert.png"
                            alt="DIGICERT Photo"
                            width={300}
                            height={300}
                            className="w-auto h-auto mt-5 lg:mt-5 md:mt-5 sm:mt-0 ml-4 lg:ml-4 md:ml-4 sm:ml-4 mb-2 sm:mb-4"
                        />
                    </div>

                    <div className="responsive-max-width flex flex-row gap-4 mt-120 md:mt-0 lg:pt-10 md:pt-6 sm:pt-4 pr-10 lg:pr-10 md:pr-6 sm:pr-4 justify-end lg:justify-end md:justify-center sm:justify-center w-full">
                        <Link href="https://www.facebook.com/wurthbaersupply"><FaFacebook className="w-[20px] h-[20px] hover:cursor-pointer hover:text-red-800 print:hover:cursor-default print:hover:text-current" /></Link>
                        <Link href="https://www.instagram.com/wurthbaer/"><FaInstagram className="w-[20px] h-[20px] hover:cursor-pointer hover:text-red-800 print:hover:cursor-default print:hover:text-current" /></Link>
                        <Link href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F291263"><FaLinkedin className="w-[20px] h-[20px] hover:cursor-pointer hover:text-red-800 print:hover:cursor-default print:hover:text-current" /></Link>
                        <Link href="https://x.com/WurthBaerSupply"><FaXTwitter className="w-[20px] h-[20px] hover:cursor-pointer hover:text-red-800 print:hover:cursor-default print:hover:text-current" /></Link>
                        <Link href="https://www.pinterest.com/wurthbaersupply/"><FaPinterest className="w-[20px] h-[20px] hover:cursor-pointer hover:text-red-800 print:hover:cursor-default print:hover:text-current" /></Link>
                        <Link href="https://www.youtube.com/channel/UCWgXJp8XZ1hCkTe7AvrMJVQ"><FaYoutube className="w-[20px] h-[20px] hover:cursor-pointer hover:text-red-800 print:hover:cursor-default print:hover:text-current" /></Link>
                        <Link href="https://www.tiktok.com/@wurthbaersupplycompany"><FaTiktok className="w-[20px] h-[20px] hover:cursor-pointer hover:text-red-800 print:hover:cursor-default print:hover:text-current" /></Link>
                        <Link href="https://blogs.wurthbaersupply.com/"><RiFilePaperFill className="w-[20px] h-[20px] hover:cursor-pointer hover:text-red-800 print:hover:cursor-default print:hover:text-current" /></Link>
                    </div>
                </div>
            </div>

            <div className="mt-4 mx-4 md:mx-6 lg:mx-10 border-b border-neutral-200" />

            {/* 10th Row: Terms & Conditions Section */}
            <div className="responsive-max-width mt-8 w-full flex flex-col lg:flex-row items-start lg:items-center flex-wrap lg:flex-nowrap justify-start px-4 md:px-6 lg:px-10 text-neutral-500 text-xs gap-2 lg:gap-0">
                <span className="text-nowrap mb-2 lg:mb-0">
                    Copyright @ 2004-2025, Würth Baer Supply Company. All Rights Reserved.
                </span>
                <div className="flex flex-wrap lg:flex-nowrap gap-x-4 gap-y-2 w-full md:w-full lg:w-full justify-start lg:justify-end">
                    <Link href="https://baersupply.vercel.app/terms-conditions">
                        <span className="text-neutral-500 hover:underline hover:cursor-pointer print:hover:no-underline print:hover:cursor-default">
                            Terms & Conditions
                        </span>
                    </Link>
                    <Link href="https://baersupply.vercel.app/privacy">
                        <span className="text-neutral-500 hover:underline hover:cursor-pointer print:hover:no-underline print:hover:cursor-default">
                            Privacy Notice
                        </span>
                    </Link>
                    <Link href="https://baersupply.vercel.app/accessibility">
                        <span className="text-neutral-500 hover:underline hover:cursor-pointer print:hover:no-underline print:hover:cursor-default">
                            Accessibility
                        </span>
                    </Link>
                    <Link href="https://baersupply.vercel.app/rightsrequest">
                        <span className="text-neutral-500 hover:underline hover:cursor-pointer print:hover:no-underline print:hover:cursor-default">
                            Do Not Sell My Personal Information
                        </span>
                    </Link>
                    <Link href="https://baersupply.vercel.app/compliance">
                        <span className="text-neutral-500 hover:underline hover:cursor-pointer print:hover:no-underline print:hover:cursor-default">
                            Würth Compliance
                        </span>
                    </Link>
                    <Link href="https://baersupply.vercel.app/sitefeedback">
                        <span className="text-neutral-500 hover:underline hover:cursor-pointer print:hover:no-underline print:hover:cursor-default">
                            Site Feedback
                        </span>
                    </Link>
                    <span className="text-neutral-500 hover:underline hover:cursor-pointer print:hover:no-underline print:hover:cursor-default">
                        Sitemap
                    </span>
                </div>
            </div>
                
            <div className="pt-4">
            </div>
        </div>
    );
}