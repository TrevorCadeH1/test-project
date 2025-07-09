'use client'

import React from 'react';
import Header from '../test/header';
import Footer from '../test/footer';
import Sidebar from './sidebar';
import { MdOutlineFileDownload } from "react-icons/md";


export default function ResourceCenterPage() {
    return (
        <div className="responsive-max-width min-h-screen flex flex-col">
            <Header />

            <div className="flex flex-1 flex-col sm:flex-row">
                <div className="sm:w-auto w-full flex justify-center sm:justify-start">
                    <Sidebar />
                </div>

                {/* Header Section */}
                <div className="flex flex-1 justify-center items-center px-2 sm:px-0 -mt-20 md:mt-0 md:mr-56">
                    <div className="flex flex-col items-center w-full">
                        <div className="text-black font-semibold text-4xl mt-15">
                            Resource Center
                        </div>
                        <div className="text-black text-lg text-center mt-2">
                            Explore all our resources in one place
                        </div>
                        <div className="w-full md:max-w-screen-lg h-[150px] bg-neutral-800 flex items-center justify-center mt-8 z-0">
                            <span className="text-white text-4xl font-semibold text-center">
                                Vendor Literature
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Kitchen Compact Section */}
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0">
                <div className="flex flex-col items-center w-full mt-10">
                    <p className="text-black text-[2.5rem] font-mono text-center mt-10 mb-8">
                        Kitchen Compact
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image1.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image1.avif"
                                        alt="Kitchen Compact"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    KK-List-Price-and-Spe <br /> cifications-2024
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image1.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image2.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image2.avif"
                                        alt="Kitchen Compact"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    KK-Full-Line-Brochure- <br /> 2024
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image1.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image3.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image3.avif"
                                        alt="Kitchen Compact"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-1 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Kitchen-Kompact-Insta <br /> llation-and-Care-Broch <br /> ure-2017
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image1.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Merillat Section */}
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0">
                <div className="flex flex-col items-center w-full mt-10">
                    <p className="text-black text-[2.75rem] font-mono text-center mt-10 mb-8">
                        Merillat
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image4.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image4.avif"
                                        alt="Merillat"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    2021-Merillat-Classic-S <br /> pec-Book
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image1.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image5.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image5.avif"
                                        alt="Merillat"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    2021-Merillat-Classic- <br /> 
                                    Mini-Brochure
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image1.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wolf Cabinets Section */}
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0">
                <div className="flex flex-col items-center w-full mt-10">
                    <p className="text-black text-[2.75rem] font-mono text-center mt-10 mb-8">
                        Wolf Cabinets
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image6.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image6.avif"
                                        alt="Wolf Cabinets"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Wolf-Classic-Sell-Shee <br /> t-Jan-2024
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image6.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image7.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image7.avif"
                                        alt="Wolf Cabinets"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Wolf_Classic_Impact_ <br /> 
                                    Aug_24_2024
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image7.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image8.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image8.avif"
                                        alt="Wolf Cabinets"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Wolf-Classic-Heritage- <br /> 
                                    P-and-S-June-2023
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image8.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image9.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image9.avif"
                                        alt="Wolf Cabinets"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Wolf-BM-Tempo-Sell-S <br /> 
                                    heet-July-2023
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image9.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>

            {/* Wolf Cabinets Part 2 Section */}
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0 mt-8">
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image10.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image10.avif"
                                        alt="Wolf Cabinets"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Wolf-BM-Tempo-P-and <br /> -S-July-2023
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image10.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image11.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image11.avif"
                                        alt="Wolf Cabinets"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Wolf-Floating-Vanities- <br /> 
                                    Sell-Sheet-Nov-2023
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image11.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image12.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image12.avif"
                                        alt="Wolf Cabinets"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Wolf-Floating-Vanities- <br /> 
                                    Price-and-Spec-Nov-2 <br />
                                    023
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center mt-6 ml-8">
                                    <a href="/image12.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image13.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image13.avif"
                                        alt="Wolf Cabinets"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Build-Mark-Vero-Sell- <br /> 
                                    Sheet-Jan-2024
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image13.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>

            {/* Wolf Cabinets Part 3 Section */}
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0 mt-8">
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image14.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image14.avif"
                                        alt="Wolf Cabinets"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Builds-Mark-Vero-Jan- <br /> 2024
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image14.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            {/* SawStop Section */}
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0">
                <div className="flex flex-col items-center w-full mt-10">
                    <p className="text-black text-[2.75rem] font-mono text-center mt-10 mb-8">
                        SawStop
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image15.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image15.avif"
                                        alt="SawStop"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-3.5 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    WhySawStop
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-23">
                                    <a href="/image15.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image16.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image16.avif"
                                        alt="SawStop"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    SawStop-Table-Saw-A <br /> 
                                    ccessories
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image16.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image17.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image17.avif"
                                        alt="SawStop"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    PCS-vs-ICS-Saws-Wha <br /> 
                                    ts-the-Difference
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image17.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image18.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image18.avif"
                                        alt="SawStop"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    PCS-Professional-Saw- <br /> 
                                    3.0HP
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image18.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>

            {/* SawStop Part 2 Section */}
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0 mt-8">
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image19.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image19.avif"
                                        alt="SawStop"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    PCS-Professional-Saw- <br /> 1.75HP
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-6">
                                    <a href="/image19.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image20.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image20.avif"
                                        alt="SawStop"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    JSS-Jobsite-Pro-Saw
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-10">
                                    <a href="/image20.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image21.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image21.avif"
                                        alt="SawStop"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    ICS-Industrial-Saw
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-14">
                                    <a href="/image21.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image22.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image22.avif"
                                        alt="SawStop"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    CNS-Contractor-Saw
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-10">
                                    <a href="/image22.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>

            {/* Formica Section */}
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0">
                <div className="flex flex-col items-center w-full mt-10">
                    <p className="text-black text-[2.75rem] font-mono text-center mt-10 mb-8">
                        Formica
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image23.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image23.avif"
                                        alt="Formica"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-3.5 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Trespa-TopLab-SS
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-14">
                                    <a href="/image23.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image24.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image24.avif"
                                        alt="Formica"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-3.5 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    National-Product-Guide
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-7">
                                    <a href="/image24.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image25.avif" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image25.avif"
                                        alt="Formica"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Formica-Living-Impress <br /> 
                                    ions-Sell-Sheet
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image25.avif" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image26.avif" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image26.avif"
                                        alt="Formica"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Formica-inDepth-Surfa <br /> 
                                    cing
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-8">
                                    <a href="/image26.avif" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>

            {/* Formica Part 2 Section */}
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0 mt-8">
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image27.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image27.avif"
                                        alt="Formica"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-3.5 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Formica-Ideal_edge-flier
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-4">
                                    <a href="/image27.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image28.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image28.avif"
                                        alt="Formica"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Formica-HPL-Fabric-C <br />
                                    ollection
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-6">
                                    <a href="/image28.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image29.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image29.avif"
                                        alt="Formica"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Formica-Everform-Solid <br />
                                    -Surface-Collection
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-6">
                                    <a href="/image29.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image30.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image30.avif"
                                        alt="Formica"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Formica-Everform-Broc <br />
                                    hure
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-6">
                                    <a href="/image30.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>

            {/* Formica Part 3 Section */}
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0 mt-8">
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image31.avif" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image31.avif"
                                        alt="Formica"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-3.5 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Formica-Decometal-SS
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-6">
                                    <a href="/image31.avif" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image32.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image32.avif"
                                        alt="Formica"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Formica-Compact-Sell <br />
                                    -Sheet
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-6">
                                    <a href="/image32.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image33.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image33.avif"
                                        alt="Formica"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-3.5 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Formica-ColorCore-2
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-10">
                                    <a href="/image33.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image34.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image34.avif"
                                        alt="Formica"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-2 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                   Formica-ARPA-Sell <br />
                                   -Sheet
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-12">
                                    <a href="/image34.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>

            {/* Formica Part 4 Section */}
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0 mt-8">
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image35.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image35.avif"
                                        alt="Formica"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-3.5 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Formica-180fx-Sell-Sheet
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-2">
                                    <a href="/image35.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image36.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image36.avif"
                                        alt="Formica"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-3.5 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Fenix-Sell-Sheet
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-18">
                                    <a href="/image36.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image37.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image37.avif"
                                        alt="Formica"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-3.5 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Fenix-Chart
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-26">
                                    <a href="/image37.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image38.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image38.avif"
                                        alt="Formica"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-3.5 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Fenix-Brochure
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-20">
                                    <a href="/image38.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>

            {/* Footer Section */}
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0">
                <div className="flex flex-col items-center w-full mt-10">
                    <div className="w-full md:max-w-screen-lg h-[150px] bg-neutral-800 flex items-center justify-center mt-8 z-0">
                        <span className="text-white text-4xl font-semibold text-center">
                            20-20 Design Software
                        </span>
                    </div>
                </div>
            </div>

            {/* 20-20 Design Software Information Section */}
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0">
                <div className="flex flex-col items-center w-full mt-10">
                    <p className="text-black text-[2.75rem] font-mono text-center mt-10 mb-8">
                        20-20 Design Software Information
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-65">
                            <div className="w-full h-full rounded-md flex items-center justify-center p-4">
                                <a href="/image39.pdf" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/image39.avif"
                                        alt="20-20 Design Software Information Section"
                                        className="object-contain h-5/6 w-full hover:cursor-pointer rounded-md"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center w-full mb-3.5 ml-10">
                                <span className="text-black font-medium text-base text-left">
                                    Intro
                                </span>
                                <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-38">
                                    <a href="/image39.pdf" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 20-20 Design Software Information Section */}
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0">
                <div className="flex flex-col items-center w-full mt-10">
                    <p className="text-black text-[2.75rem] font-mono text-center mt-10 mb-8">
                        Software Downloads
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-70">
                                <div className="flex items-center w-full mb-3.5 ml-10">
                                    <span className="text-black font-medium text-base text-left">
                                        20-20 Kitchen Kompact <br />
                                        (2024)
                                    </span>
                                    <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-10">
                                        <a href="/sw1.zip" target="_blank" rel="noopener noreferrer">
                                            <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                        </a>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-70">
                                <div className="flex items-center w-full mb-3.5 ml-10">
                                    <span className="text-black font-medium text-base text-left">
                                        20-20 Wolf Classic Imp <br />
                                        act Series (12-2023)
                                    </span>
                                    <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-10">
                                        <a href="/sw2.zip" target="_blank" rel="noopener noreferrer">
                                            <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                        </a>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-70">
                                <div className="flex items-center w-full mb-3.5 ml-10">
                                    <span className="text-black font-medium text-base text-left">
                                        20-20 Wolf Classic Heri <br />
                                        tage Series (12-2023)
                                    </span>
                                    <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-10">
                                        <a href="/sw3.zip" target="_blank" rel="noopener noreferrer">
                                            <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                        </a>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-70">
                                <div className="flex items-center w-full mb-3.5 ml-10">
                                    <span className="text-black font-medium text-base text-left">
                                        20-20 Wolf Builders Mar <br />
                                        k -Tepo (07-2023)
                                    </span>
                                    <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-10">
                                        <a href="/sw4.zip" target="_blank" rel="noopener noreferrer">
                                            <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                </div>
            </div>

            {/* 20-20 Design Software Information Section Part 2 */}
            <div className="flex flex-1 justify-center items-center px-2 sm:px-0">       
                    <div className="flex flex-wrap justify-center gap-6 mt-10 w-full">
                        <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-70">
                                <div className="flex items-center w-full mb-3.5 ml-10">
                                    <span className="text-black font-medium text-base text-left">
                                        20-20 Wolf Builders Mar <br />
                                        k Vero (01-2024)
                                    </span>
                                    <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-10">
                                        <a href="/sw5.zip" target="_blank" rel="noopener noreferrer">
                                            <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                        </a>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md flex flex-col items-center w-70">
                                <div className="flex items-center w-full mb-3.5 ml-10">
                                    <span className="text-black font-medium text-base text-left">
                                        Test
                                    </span>
                                    <button className="bg-black text-white rounded-full p-1.5 flex items-center hover:cursor-pointer hover:bg-black/80 justify-center ml-44">
                                        <a href="/sw6.zip" target="_blank" rel="noopener noreferrer">
                                            <MdOutlineFileDownload className="w-[20px] h-[20px]" />
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
            </div>

            <div className="mt-10">
            </div>
            <Footer />
        </div>
    )
}