'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { MdEdit, MdSecurity, MdHistory, MdShoppingCart, MdFavorite, MdSettings, MdLogout, MdLocationPin, MdOutlinePayment } from 'react-icons/md';
import { FiUser, FiMail, FiPhone } from 'react-icons/fi';
import { IoIosBusiness } from "react-icons/io";


export default function MyAccountPage() {
    const { isAuthenticated, user, logout, isLoading: authLoading } = useAuth();
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        phone: '',
        company: ''
    });

    useEffect(() => {
        if (!authLoading) {
            if (!isAuthenticated) {
                router.push('/signin');
            } else {
                setIsChecking(false);
                const savedProfileData = localStorage.getItem('profileData');
                if (savedProfileData) {
                    setProfileData(JSON.parse(savedProfileData));
                } else {
                    const defaultData = {
                        name: user?.name || '',
                        email: user?.email || '',
                        phone: user?.phone || '',
                        company: user?.company || ''
                    };
                    setProfileData(defaultData);
                    localStorage.setItem('profileData', JSON.stringify(defaultData));
                }
            }
        }
    }, [isAuthenticated, authLoading, router, user]);

    const handleEditToggle = () => {
        if (isEditing) {
            localStorage.setItem('profileData', JSON.stringify(profileData));
            console.log('Profile data saved:', profileData);
        }
        setIsEditing(!isEditing);
    };

    const handleInputChange = (field: string, value: string) => {
        setProfileData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleCancel = () => {
        const savedProfileData = localStorage.getItem('profileData');
        if (savedProfileData) {
            setProfileData(JSON.parse(savedProfileData));
        } else {
            setProfileData({
                name: user?.name || '',
                email: user?.email || '',
                phone: '',
                company: ''
            });
        }
        setIsEditing(false);
    };

    const handleLogout = async () => {
        await logout();
    };

    if (authLoading || isChecking) {
        return (
            <div className="responsive-max-width min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
                    <p className="text-black">Loading...</p>
                </div>
            </div>
        );
    }

    // If not authenticated, don't render the page content
    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="responsive-max-width min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-black mb-2">My Account</h1>
                            <p className="text-gray-600">Manage your account settings and preferences</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="mt-4 md:mt-0 flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-red-700 transition"
                        >
                            <MdLogout />
                            Sign Out
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                    <FiUser className="w-8 h-8 text-gray-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-semibold text-lg text-black">
                                        {user?.name || 'Username'}
                                    </h3>
                                </div>
                            </div>

                            <nav className="space-y-2 w-full">
                                <a href="#profile" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 text-black transition">
                                    <FiUser className="w-5 h-5" />
                                    Profile Information
                                </a>
                                <a href="#security" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 text-black transition">
                                    <MdSecurity className="w-5 h-5" />
                                    Account Settings
                                </a>
                                <a href="#orders" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 text-black transition">
                                    <MdHistory className="w-5 h-5" />
                                    Order History
                                </a>
                                <a href="#favorites" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 text-black transition">
                                    <MdFavorite className="w-5 h-5" />
                                    Favorites
                                </a>
                                <button
                                    onClick={() => router.push('/cart')}
                                    className="flex items-center gap-3 p-3 rounded-md hover:cursor-pointer hover:bg-gray-100 text-black transition w-full bg-white"
                                >
                                    <MdShoppingCart className="w-5 h-5" />
                                    Shopping Cart
                                </button>
                                <button
                                    onClick={() => router.push('/paymentinformation')}
                                    className="flex items-center gap-3 p-3 rounded-md hover:cursor-pointer hover:bg-gray-100 text-black transition w-full bg-white"
                                >
                                    <MdOutlinePayment className="w-5 h-5" />
                                    Payment Information
                                </button>
                                <button
                                    onClick={() => router.push('/ordertracking')}
                                    className="flex items-center gap-3 p-3 rounded-md hover:cursor-pointer hover:bg-gray-100 text-black transition w-full bg-white"
                                >
                                    <MdLocationPin className="w-5 h-5" />
                                    Order Tracking
                                </button>
                            </nav>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mt-7">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold text-black">Recent Activity</h2>
                                <button
                                    onClick={() => router.push('/recentactivity')}
                                    className="text-red-600 hover:text-red-700 font-medium hover:cursor-pointer hover:underline transition"
                                >
                                    View All
                                </button>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                                    <div>
                                        <p className="text-black font-medium">Order #12345 placed</p>
                                        <p className="text-gray-600 text-sm">2 days ago</p>
                                    </div>
                                    <span className="text-blue-600 text-sm font-medium">Shipped</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                                    <div>
                                        <p className="text-black font-medium">Added 3 items to cart</p>
                                        <p className="text-black-600 text-sm">1 week ago</p>
                                    </div>
                                    <span className="text-blue-600 text-sm font-medium">Saved</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                                    <div>
                                        <p className="text-black font-medium">Profile updated</p>
                                        <p className="text-gray-600 text-sm">2 weeks ago</p>
                                    </div>
                                    <span className="text-blue-600 text-sm font-medium">Updated</span>
                                </div>
                            </div>
                        </div>

                        {/* Order History Section */}
                        <div id="orders" className="bg-white rounded-lg shadow-sm p-6 mt-7.5">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold text-black">Order History</h2>
                                <button
                                    onClick={() => router.push('/orderhistory')}
                                    className="text-red-600 hover:text-red-700 font-medium hover:cursor-pointer hover:underline transition"
                                >
                                    View All
                                </button>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-4 flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-black">Order #111111</p>
                                        <p className="text-gray-600 text-sm">Placed on Jun 12, 2025</p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-green-600 text-sm font-medium mb-1">Processing</span>
                                        <span className="text-gray-700 text-sm">$245.00</span>
                                    </div>
                                </div>
                                <div className="py-4 flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-black">Order #222222</p>
                                        <p className="text-gray-600 text-sm">Placed on Mar 28, 2025</p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-blue-600 text-sm font-medium mb-1">Delivered</span>
                                        <span className="text-gray-700 text-sm">$89.99</span>
                                    </div>
                                </div>
                                <div className="py-4 flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-black">Order #333333</p>
                                        <p className="text-gray-600 text-sm">Placed on Feb 10, 2025</p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-gray-500 text-sm font-medium mb-1">Cancelled</span>
                                        <span className="text-gray-700 text-sm">$0.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Profile Information */}
                        <div id="profile" className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold text-black">Profile Information</h2>
                                <div className="flex gap-2">
                                    {isEditing ? (
                                        <>
                                            <button 
                                                onClick={handleCancel}
                                                className="flex items-center gap-2 text-gray-600 hover:text-gray-700 hover:cursor-pointer px-3 py-1 border border-gray-300 rounded-md"
                                            >
                                                Cancel
                                            </button>
                                            <button 
                                                onClick={handleEditToggle}
                                                className="flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 hover:cursor-pointer px-3 py-1 rounded-md"
                                            >
                                                Save Changes
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={handleEditToggle}
                                            className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:cursor-pointer"
                                        >
                                            <MdEdit className="w-4 h-4" />
                                            Edit
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <FiUser className="inline w-4 h-4 mr-2" />
                                        Full Name
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            className="w-full text-black bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent min-h-[48px]"
                                        />
                                    ) : (
                                        <p className="text-black bg-gray-50 p-3 rounded-md min-h-[48px] flex items-center">
                                            {profileData.name || <span className="opacity-0">placeholder</span>}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <FiMail className="inline w-4 h-4 mr-2" />
                                        Email Address
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            value={profileData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className="w-full text-black bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent min-h-[48px]"
                                        />
                                    ) : (
                                        <p className="text-black bg-gray-50 p-3 rounded-md min-h-[48px] flex items-center">
                                            {profileData.email || <span className="opacity-0">placeholder</span>}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <FiPhone className="inline w-4 h-4 mr-2" />
                                        Phone Number
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="tel"
                                            value={profileData.phone}
                                            onChange={(e) => handleInputChange('phone', e.target.value)}
                                            className="w-full text-black bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent min-h-[48px]"
                                        />
                                    ) : (
                                        <p className="text-black bg-gray-50 p-3 rounded-md min-h-[48px] flex items-center">
                                            {profileData.phone || <span className="opacity-0">placeholder</span>}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <IoIosBusiness className="inline w-5 h-5 mr-2" />
                                        Company
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.company}
                                            onChange={(e) => handleInputChange('company', e.target.value)}
                                            className="w-full text-black bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent min-h-[48px]"
                                        />
                                    ) : (
                                        <p className="text-black bg-gray-50 p-3 rounded-md min-h-[48px] flex items-center">
                                            {profileData.company || <span className="opacity-0">placeholder</span>}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold text-black mb-4">Quick Actions</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <button
                                    onClick={() => router.push('/cart')}
                                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition hover:cursor-pointer"
                                >
                                    <MdShoppingCart className="w-8 h-8 text-red-600 mb-2" />
                                    <span className="text-sm font-medium text-black">View Cart</span>
                                </button>
                                <button
                                    onClick={() => router.push('/orderhistory')}
                                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition hover:cursor-pointer"
                                >
                                    <MdHistory className="w-8 h-8 text-black mb-2" />
                                    <span className="text-sm font-medium text-black">Order History</span>
                                </button>
                                <button
                                    onClick={() => router.push('/settings')}
                                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition hover:cursor-pointer"
                                >
                                    <MdSettings className="w-8 h-8 text-neutral-600 mb-2" />
                                    <span className="text-sm font-medium text-black">Settings</span>
                                </button>
                            </div>
                        </div>

                        {/* Account Settings */}
                        <div id="security" className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold text-black mb-4">Account Settings</h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                    <div>
                                        <h3 className="font-medium text-black">Password</h3>
                                        <p className="text-gray-600 text-sm">Last updated 30 days ago</p>
                                    </div>
                                    <button className="text-red-600 hover:cursor-pointer hover:text-red-700 font-medium">
                                        Change
                                    </button>
                                </div>
                                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                    <div>
                                        <h3 className="font-medium text-black">Email Notifications</h3>
                                        <p className="text-gray-600 text-sm">Receive order updates and promotions</p>
                                    </div>
                                    <button className="text-red-600 hover:cursor-pointer hover:text-red-700 font-medium">
                                        Manage
                                    </button>
                                </div>
                                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                    <div>
                                        <h3 className="font-medium text-black">Two-Factor Authentication</h3>
                                        <p className="text-gray-600 text-sm">Add an extra layer of security</p>
                                    </div>
                                    <button className="text-red-600 hover:cursor-pointer hover:text-red-700 font-medium">
                                        Setup
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Favorites Section */}
                        <div id="favorites" className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold text-black">Favorites</h2>
                                <button
                                    onClick={() => router.push('/favorites')}
                                    className="text-red-600 hover:text-red-700 font-medium hover:cursor-pointer hover:underline transition"
                                >
                                    View All
                                </button>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <img src="/Screw.png" alt="Screw" className="w-12 h-12 object-contain rounded" />
                                        <div>
                                            <p className="font-medium text-black">Product ID: 654309</p>
                                            <p className="text-gray-600 text-sm">Mfr #: BP6611300HG</p>
                                        </div>
                                    </div>
                                    <div className="text-end">
                                    <span className="text-black text-sm font-medium">$100.00 / 1000 Each</span> <br />
                                    <span className="text-black text-sm font-medium">$0.10 / Each</span>
                                    </div>
                                </div>
                                <div className="py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <img src="/Hinge.png" alt="Hinge" className="w-12 h-12 object-contain rounded" />
                                        <div>
                                            <p className="font-medium text-black">Product ID: 672594</p>
                                            <p className="text-gray-600 text-sm">Mfr #: BP73B3580</p>
                                        </div>
                                    </div>
                                    <span className="text-black text-sm font-medium">$5.14 / Each</span>
                                </div>
                                <div className="py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <img src="/Hinge2.png" alt="Hinge2" className="w-12 h-12 object-contain rounded" />
                                        <div>
                                            <p className="font-medium text-black">Product ID: 672607</p>
                                            <p className="text-gray-600 text-sm">Mfr #: BP79B3598</p>
                                        </div>
                                    </div>
                                    <span className="text-black text-sm font-medium">$11.85 / Each</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}