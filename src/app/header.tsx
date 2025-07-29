'use client';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import AuthButton from '@/components/AuthButton';
import { useAuth } from '@/contexts/AuthContext';
import { IoIosArrowDown } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { AiOutlineShop } from "react-icons/ai";
import { PiShoppingCartLight } from "react-icons/pi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { PiBarcodeThin } from "react-icons/pi";
import { useRouter } from 'next/navigation';

const dropdownInfo = {
    "All products": [
        "Category",
        "Shop by brands", 
        "Clearance",
        "Daily Discounts",
        "Catalogs"
    ],
    "Resource Center": [
        "Vendor Literature",
        "Vendor Library"
    ],
    "Digital Tools": [
        "Laminate Finder",
        "Custom drawer boxes",
        "Laminate Samples"
    ]
};

const categoryItems = [
    "Abrasives",
    "Adhesives & Caulks",
    "Air & Fluid Line Components",
    "Bits, Drill Bits",
    "Board Panel Products",
    "Builders Hardware",
    "Cabinets",
    "Decorative Visual Hardware",
    "Drawer Construction Systems",
    "Edgebanding",
    "Fasteners",
    "Hinges",
    "Kitchen & Bath Cabinet Accessories",
    "Lighting",
    "Machinery",
    "Miscellaneous",
    "Shelf, Closet & Garage Organization",
    "Shop and Safety Supplies",
    "Spray Equipment",
    "Table and Work Surface Components",
    "Tools, Hand Tools"
];

export default function Header() {
    const router = useRouter();
    const { isAuthenticated, logout } = useAuth();
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeCategoryDropdown, setActiveCategoryDropdown] = useState(false);
    const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const categoryDropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (activeDropdown && dropdownRefs.current[activeDropdown]) {
                if (!dropdownRefs.current[activeDropdown]?.contains(event.target as Node)) {
                    setActiveDropdown(null);
                    setActiveCategoryDropdown(false);
                }
            }
            if (activeCategoryDropdown && categoryDropdownRef.current) {
                if (!categoryDropdownRef.current.contains(event.target as Node)) {
                    setActiveCategoryDropdown(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeDropdown, activeCategoryDropdown]);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [showResults, setShowResults] = useState(false);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const searchResultsRef = useRef<HTMLDivElement | null>(null);

    const handleDropdownClick = (label: string) => {
        if (dropdownInfo[label as keyof typeof dropdownInfo]) {
            setActiveDropdown(activeDropdown === label ? null : label);
        }
    };

    const handleSearch = async (e?: React.FormEvent | React.MouseEvent) => {
        if (e) e.preventDefault();
        if (!searchTerm.trim()) return;
        try {
            const apiUrl = process.env.NEXT_PUBLIC_SEARCH_API_URL || '';
            const res = await axios.get(`${apiUrl}/products/search`, {
                params: { q: searchTerm }
            });
            setSearchResults(res.data.results);
            setShowResults(true);
        } catch (err) {
            console.error("Search error:", err);
            setSearchResults([]);
            setShowResults(false);
        }
    };

    useEffect(() => {
        if (!showResults) return;
        const handleClick = (e: MouseEvent) => {
            if (
                searchResultsRef.current &&
                !searchResultsRef.current.contains(e.target as Node) &&
                searchInputRef.current &&
                !searchInputRef.current.contains(e.target as Node)
            ) {
                setShowResults(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [showResults]);

    return(
        <div className ="responsive-max-width">
            <div className="bg-sky-50/40 flex flex-col md:flex-row items-start md:items-center justify-between px-4 py-2 gap-2 md:gap-0">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-1 md:space-y-0 md:space-x-2">
                    <span
                        className="text-black font-sans ml-2 text-md hover:cursor-pointer"
                        onClick={() => router.push('/home')}
                    >
                        Würth Baer Supply Company
                    </span>
                    <div className="flex items-center space-x-2">
                        <FiPhone className="text-black ml-0 md:ml-3 mt-1 text-md" />
                        <span className="text-black font-mono text-md hover:cursor-pointer hover:text-red-800 hover:underline">(800)289-2237</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 md:mr-5">
                    <AiOutlineShop className="text-black text-lg" />
                    <span className="text-black font-sans text-md">Vernon Hills, IL</span>
                </div>
            </div>
            <div className="bg-white">
                <div className="hidden md:flex items-center justify-between px-2 py-2">
                    <div
                        className="flex items-center ml-4 cursor-pointer"
                        onClick={() => router.push('/home')}
                    >
                        <img src="/logo.png" alt="Logo" className="h-15 w-auto" />
                    </div>
                    <div className="flex justify-end items-center text-end w-full">
                        <div className="flex flex-1 justify-center items-center mx-4">
                            <div className="w-full max-w-[800px] flex items-center relative">
                                <form onSubmit={handleSearch} className="w-full">
                                    <input
                                        type="text"
                                        ref={searchInputRef}
                                        value={searchTerm}
                                        onChange={e => setSearchTerm(e.target.value)}
                                        placeholder="What are you looking for?"
                                        className="w-full px-3 py-1.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black pr-20"
                                        onFocus={() => searchResults.length > 0 && setShowResults(true)}
                                    />
                                </form>
                                <div className="flex items-center space-x-3 absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2">
                                    <HiMiniMagnifyingGlass className="text-xl text-black cursor-pointer" onClick={handleSearch} />
                                    <span className="text-gray-300 text-lg select-none">|</span>
                                    <PiBarcodeThin className="text-xl text-black cursor-pointer" />
                                </div>
                                {/* Search Results Dropdown */}
                                {showResults && searchResults.length > 0 && (
                                    <div ref={searchResultsRef} className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-80 overflow-y-auto">
                                        {searchResults.map((product, idx) => (
                                            <React.Fragment key={product.id}>
                                                <div
                                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => {
                                                        setShowResults(false);
                                                        setSearchTerm(product.name);
                                                    }}
                                                >
                                                    <div className="text-start text-md font-semibold">{product.name}</div>
                                                    <div className="text-start text-sm text-gray-500">Mnf Number: {product.sku} | {product.category}</div>
                                                </div>
                                                {idx < searchResults.length - 1 && (
                                                    <div className="border-t border-gray-200 mx-2" />
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <AuthButton />
                        <PiShoppingCartLight className="text-3xl" />
                        <span className="text-lg font-sans font-semibold ml-2 mr-5">Cart</span>
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="flex items-center justify-between px-2 py-2">
                        <div className="flex items-center ml-4">
                            <img src="/logo.png" alt="Logo" className="h-15 w-auto" />
                        </div>
                        <div className="flex items-center space-x-4">
                            <AuthButton />
                            <div className="flex items-center">
                                <PiShoppingCartLight className="text-3xl mt-2" />
                                <span className="text-lg font-sans font-semibold ml-2 mt-2 mr-5">Cart</span>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 pb-2">
                        <div className="w-full flex items-center relative">
                            <form onSubmit={handleSearch} className="w-full">
                                <input
                                    type="text"
                                    ref={searchInputRef}
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                    placeholder="What are you looking for?"
                                    className="w-full px-3 py-1.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black pr-20"
                                    onFocus={() => searchResults.length > 0 && setShowResults(true)}
                                />
                            </form>
                            <div className="flex items-center space-x-3 absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2">
                                <HiMiniMagnifyingGlass className="text-xl text-black cursor-pointer" onClick={handleSearch} />
                                <span className="text-gray-300 text-lg select-none">|</span>
                                <PiBarcodeThin className="text-xl text-black cursor-pointer" />
                            </div>
                            {/* Search Results Dropdown */}
                            {showResults && searchResults.length > 0 && (
                                <div ref={searchResultsRef} className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-80 overflow-y-auto">
                                    {searchResults.map(product => (
                                        <div
                                            key={product.id}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                setShowResults(false);
                                                setSearchTerm(product.name);
                                            }}
                                        >
                                            <div className="font-semibold">{product.name}</div>
                                            <div className="text-xs text-gray-500">SKU: {product.sku} | {product.category}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block bg-red-700 px-2 md:px-0 py-2 relative">
                <div className="flex items-center justify-between md:ml-10">
                    <div className="flex items-center space-x-4">
                        {[
                            "All products",
                            "Quick Order",
                            "Quotes",
                            "Promotions",
                            "Resource Center",
                            "Digital Tools",
                            "Careers",
                            "Help",
                            "Contact"
                        ].map((label) => (
                        <div 
                            key={label} 
                            className="relative"
                            ref={(el) => {
                                dropdownRefs.current[label] = el;
                            }}
                        >
                            <button
                                className="text-white font-sans font-semibold text-xs md:text-[0.9rem] px-2.5 py-1 rounded transition-colors hover:bg-red-600/70 hover:cursor-pointer flex items-center"
                                onClick={() => handleDropdownClick(label)}
                            >
                                {label}
                                {(label === "All products" ||
                                  label === "Resource Center" ||
                                  label === "Digital Tools") && (
                                    <span className={`ml-2 mt-1 transition-transform duration-200 ${
                                        activeDropdown === label ? 'rotate-180' : ''
                                    }`}>
                                        <IoIosArrowDown />
                                    </span>
                                )}
                            </button>
                            
                            {/* Dropdown Menu */}
                            {activeDropdown === label && dropdownInfo[label as keyof typeof dropdownInfo] && (
                                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[180px]">
                                    <div className="py-1">
                                        {dropdownInfo[label as keyof typeof dropdownInfo].map((item, index) => (
                                            <div 
                                                key={index}
                                                className="relative"
                                                ref={item === "Category" ? categoryDropdownRef : null}
                                            >
                                                <button
                                                    className="w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors duration-150 flex items-center hover:cursor-pointer justify-between"
                                                    onClick={() => {
                                                        if (item === "Category") {
                                                            setActiveCategoryDropdown(!activeCategoryDropdown);
                                                        } else {
                                                            setActiveDropdown(null);
                                                            setActiveCategoryDropdown(false);
                                                        }
                                                    }}
                                                >
                                                    {item}
                                                    {item === "Category" && (
                                                        <span>
                                                            <IoIosArrowDown className="text-sm rotate-[-90deg]" />
                                                        </span>
                                                    )}
                                                </button>
                                                
                                                {/* Category Nested Dropdown */}
                                                {item === "Category" && activeCategoryDropdown && (
                                                    <div className="absolute left-full top-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[280px]">
                                                        <div className="py-1">
                                                            {categoryItems.map((categoryItem, categoryIndex) => (
                                                                <button
                                                                    key={categoryIndex}
                                                                    className="w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors duration-150 flex items-center hover:cursor-pointer justify-between"
                                                                    onClick={() => {
                                                                        setActiveDropdown(null);
                                                                        setActiveCategoryDropdown(false);
                                                                    }}
                                                                >
                                                                    {categoryItem}
                                                                    <span className="text-black">
                                                                        <IoIosArrowDown className="text-sm rotate-[-90deg]" />
                                                                    </span>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    </div>
                    
                    {/* My Account Button - Only show when authenticated */}
                    {isAuthenticated && (
                        <div className="mr-10">
                            <button
                                onClick={() => router.push('/myaccount')}
                                className="text-white font-sans font-semibold text-xs md:text-[0.9rem] px-3 py-1 rounded transition-colors hover:bg-red-600/70 hover:cursor-pointer"
                            >
                                My Account
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="bg-green-blend px-2 md:px-4 py-2.5">
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