import React from 'react';
import { requireAuth } from '@/lib/auth-server';
import { MdSecurity, MdHistory, MdFavorite } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import LogoutButton from '@/components/LogoutButton';
import ProfileEditor from '@/components/ProfileEditor';
import ClientNavigation, { QuickActions } from '@/components/ClientNavigation';
import ViewAllButton from '@/components/ViewAllButton';

export default async function MyAccountPage() {
    const user = await requireAuth();

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
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <a
                                href={`/stats/${user?.user_id || '272839'}`}
                                className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
                            >
                                View my stats
                            </a>
                            <LogoutButton />
                        </div>
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
                                <ClientNavigation />
                            </nav>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mt-7">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold text-black">Recent Activity</h2>
                                <ViewAllButton href="/recentactivity">View All</ViewAllButton>
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
                                <ViewAllButton href="/orderhistory">View All</ViewAllButton>
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
                        <div id="profile">
                            <ProfileEditor user={user} />
                        </div>

                        {/* Quick Actions */}
                        <QuickActions />

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
                                <ViewAllButton href="/favorites">View All</ViewAllButton>
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
            <div className="mt-4"></div>
        </div>
    );
}