'use client'

import React from 'react';
import Header from '../../test/header';
import Footer from '../../test/footer';
import Sidebar from '../sidebar';

export default function VideoLibraryPage() {
    return(
        <div className="responsive-max-width min-h-screen flex flex-col">
            <Header />
            <div className="sm:w-auto w-full flex justify-center sm:justify-start">
                <Sidebar />
            </div>
            <div className="flex flex-1 justify-center items-center -mt-10 md:-mt-40 px-2 sm:px-0">
                <div className="flex flex-col items-center">
                    <div className="text-black font-semibold text-4xl mt-10">
                        Video Library
                    </div>
                    <div className="text-black text-lg text-center mt-2">
                        Explore all our product related videos in one place
                    </div>
                    
                    {/* Kitchen Organizers Section */}
                    <div className="">
                        <div className="text-black text-[2.5rem] mt-15 text-center">
                            Kitchen Organizers
                        </div>
                        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 rounded mt-8">
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/7lbHxdKTNWI?si=FH3RGP_qwdCLtGPX"
                                    title="Docking Drawer"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Docking Drawer
                                </div>
                            </div>
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/wzV9o9S4eqE?si=PuHt3DAy21RzauF3"
                                    title="PRO Base Organizers"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    PRO Base Organizers
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Drawer Slides Section */}
                    <div className="">
                        <div className="text-black text-[2.5rem] mt-15 text-center">
                            Drawer Slides
                        </div>
                        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 rounded mt-8">
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/q567BVYJVKE?si=IYU84RyG8wOHIUEs"
                                    title="PRO 500 Undermount Drawer Slide Help"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    PRO 500 Undermount Drawer Slide Help
                                </div>
                            </div>
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/zTfaVHeYbXE?si=Nsiq-yIDeihS5DmD"
                                    title="Grass 3D Locking Device Installation"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Grass 3D Locking Device Installation
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hardware and Tools Section */}
                    <div className="">
                        <div className="text-black text-[2.5rem] mt-15 text-center">
                            Hardware and Tools
                        </div>
                        <div className="gap-10 grid grid-cols-1 md:grid-cols-3 rounded mt-8">
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/iyJkujIJ_NY?si=K76pIAp2hsmQ2BNj"
                                    title="DH Casters"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    DH Casters
                                </div>
                            </div>
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/XcLtH2wl6SE?si=4HZRVgSVtDoEPDJa"
                                    title="Pony Jorgensen Clamps"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Pony Jorgensen Clamps
                                </div>
                            </div>
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/9yDqod3MOSo?si=6bvcsyyDuFzj4b51"
                                    title="Würth Barn Door Hardware Kits"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Würth Barn Door Hardware Kits
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Screws and Fasteners Section */}
                    <div className="">
                        <div className="text-black text-[2.5rem] mt-15 text-center">
                            Screws and Fasteners
                        </div>
                        <div className="gap-10 grid grid-cols-1 md:grid-cols-3 rounded mt-8 justify-items-center">
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/lEsr5SzSD2g?si=7L0_yKuvHHNX7pqq"
                                    title="Würth Jar Program"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Würth Jar Program
                                </div>
                            </div>
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/zcB5D2MTc0E?si=VRZckDLw_jpJ-oYj"
                                    title="Würth TurboThread Screws"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Würth TurboThread Screws
                                </div>
                            </div>
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/RC9gZMXHEAk?si=zyWjsNAUowkc0wZW"
                                    title="Würth POCKETMASTER Face-Frame Screw"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Würth POCKETMASTER Face-Frame Screw
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Wood Products Section */}
                    <div className="">
                        <div className="text-black text-[2.5rem] mt-15 text-center">
                            Wood Products
                        </div>
                        <div className="gap-10 grid grid-cols-1 md:grid-cols-3 rounded mt-8">
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/Hjw0OFFdsEc?si=WY3fP5Nug1JCQhjv"
                                    title="Omega Wood Range Hoods"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Omega Wood Range Hoods
                                </div>
                            </div>
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/z82YX_1Jbt0?si=tHa3keRvQaAmv2yH"
                                    title="Unloading a Boxcar Full of Wood"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Unloading a Boxcar Full of Wood
                                </div>
                            </div>
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/09VI8KjCf5A?si=V4Cr1I7_fikNH72Q"
                                    title="Edgemate Veneers"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Edgemate Veneers
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Finishing Section */}
                    <div className="">
                        <div className="text-black text-[2.5rem] mt-15 text-center">
                            Finishing
                        </div>
                        <div className="gap-10 grid grid-cols-1 md:grid-cols-3 rounded mt-8">
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/sN6fkObN1rA?si=3ozQEVNNq4P-UAjo"
                                    title="Custom Color Match"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Custom Color Match
                                </div>
                            </div>
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/vc0UKkCSHRI?si=GPTVnfiL1_FPnhak"
                                    title="Würth Mixing Cups"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Würth Mixing Cups
                                </div>
                            </div>
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/q3tIq6n7OJ0?si=Wry2wEB0aQvKfvI6"
                                    title="Wurth Fill and Finish"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Wurth Fill and Finish
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 rounded mt-8 justify-items-center">
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/hB8yoUeCZVQ?si=ylHZF5Xx5kbSdLOk"
                                    title="Würth Net Sanding Discs"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Würth Net Sanding Discs
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shelving Section */}
                    <div className="">
                        <div className="text-black text-[2.5rem] mt-15 text-center">
                            Shelving
                        </div>
                        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 rounded mt-8">
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/xCPjqh0nPTo?si=qgdyQMXhyjlx6tp6"
                                    title="Omega Floating Shelves"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Omega Floating Shelves
                                </div>
                            </div>
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/-3EeRoRLqwk?si=XBAs-dTvXzk41jCG"
                                    title="Rakks Infinite Adjustable Shelving"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Rakks Infinite Adjustable Shelving
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Closets Section */}
                    <div className="">
                        <div className="text-black text-[2.5rem] mt-15 text-center">
                            Closets
                        </div>
                        <div className="gap-10 grid grid-cols-1 rounded mt-8">
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/_3AvZtdhCQQ?si=k49X3gS8vjTxh8Sy"
                                    title="Connecting Closet Rods"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Connecting Closet Rods
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Programs and Services Section */}
                    <div className="">
                        <div className="text-black text-[2.5rem] mt-15 text-center">
                            Program and Services
                        </div>
                        <div className="gap-10 grid grid-cols-1 rounded mt-8 justify-items-center">
                            <div className="font-semibold">
                                <iframe
                                    width="350"
                                    height="190"
                                    src="https://www.youtube.com/embed/RE_rXmdNUJ4?si=ClWkHvJdR7Rfp9B_"
                                    title="Würth ORSY"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                                <div className="mt-4">
                                    Würth ORSY
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20">
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}