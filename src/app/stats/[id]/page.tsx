import React from 'react';
import { requireAuth } from '@/lib/auth-server';
import Link from 'next/link';
import { FaRegUserCircle } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CiMail } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import AccountingPaymentDropdown from '@/components/AccountingPaymentDropdown';
import SalesSummaryDropdown from '@/components/SalesSummaryDropdown';
import ShipToInfoDropdown from '@/components/ShipToInfoDropdown';
import ShipToInfoDropdownV2 from '@/components/ShipToInfoDropdownV2';
import EcommerceSummaryDropdown from '@/components/EcommerceSummaryDropdown';
import AdditionalInfoDropdown from '@/components/AdditionalInfoDropdown';

interface CustomerData {
    quintiles?: {
        current?: {
            major: string;
            minor: number;
            color?: string;
        };
        amount_to_jump?: number;
        available_quintiles?: Array<{
            major: string;
            minor: number;
            color?: string;
            reached?: boolean;
        }>;
        [key: string]: any;
    };
    purchase_data?: {
        most_recent_purchase_date?: string | null;
        months_since_last_purchase?: number | null;
        total_purchases?: number;
        total_spent?: number;
    };
    [key: string]: any;
}

interface LoyaltySettings {
    programs?: Array<{
        type: 'SINGLE_TIER' | 'TIERS';
        total: number;
        next_tier?: {
            target: number;
            name?: string;
        };
        tiers?: Array<{
            name: string;
            color?: string;
            target: number;
            percent?: number;
            values?: number;
        }>;
    }>;
    [key: string]: any;
}

const AUTH_TOKEN = process.env.AUTH_TOKEN
const X_AUTH_TOKEN = process.env.WURTH_API_TOKEN!;

async function fetchCustomerData(userId: string): Promise<CustomerData | null> {
    try {
        const response = await fetch(`${process.env.WURTH_API_BASE_URL}/rest/customers-view/${userId}`, {
            method: 'GET',
            headers: {
                'X-AUTH-TOKEN': X_AUTH_TOKEN,
                'Authorization': `Bearer ${AUTH_TOKEN}`,
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            console.error('Failed to fetch customer data:', response.status, response.statusText);
            const errorText = await response.text();
            console.error('Error response body:', errorText);
            return null;
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching customer data:', error);
        return null;
    }
}

async function fetchLoyaltySettings(userId: string): Promise<LoyaltySettings | null> {
    try {
        const response = await fetch(`${process.env.WURTH_API_BASE_URL}/rest/loyalty/settings/${userId}`, {
            method: 'GET',
            headers: {
                'X-AUTH-TOKEN': X_AUTH_TOKEN,
                'Authorization': `Bearer ${AUTH_TOKEN}`,
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            console.error('Failed to fetch loyalty settings:', response.status, response.statusText);
            const errorText = await response.text();
            console.error('Error response body:', errorText);
            return null;
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching loyalty settings:', error);
        return null;
    }
}

async function fetchLoginCheck(): Promise<any> {
    try {
        const response = await fetch(`${process.env.WURTH_API_BASE_URL}/rest/auth/login-check`, {
            method: 'GET',
            headers: {
                'X-AUTH-TOKEN': X_AUTH_TOKEN,
                'Authorization': `Bearer ${AUTH_TOKEN}`,
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            console.error('Failed to fetch login check:', response.status, response.statusText);
            const errorText = await response.text();
            console.error('Error response body:', errorText);
            return null;
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching login check:', error);
        return null;
    }
}

export default async function StatsPage() {
    await requireAuth();


    const loginCheckData = await fetchLoginCheck();
    const userId = '272839';

    const [customerData, loyaltySettings] = await Promise.all([
        fetchCustomerData(userId),
        fetchLoyaltySettings(userId)
    ]);

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-10 flex items-center justify-between">
                    <div className="text-3xl text-black">
                        Customer Details: {loginCheckData.user.fullname}
                    </div>
                    <Link
                        href="/myaccount"
                        className="inline-flex items-center px-4 py-2 rounded bg-white text-black hover:bg-white/80 transition-colors text-base font-semibold shadow-sm shadow-black/50 border border-gray-300"
                    >
                        <FaArrowLeft className="w-5 h-5 mr-2" />
                        Back to Account
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Customer Account Card */}
                    {loginCheckData?.user && (
                        <div className="bg-white rounded-lg p-6 border border-gray-300">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900 mb-1">Customer Account</h2>
                                    <p className="text-sm text-gray-600">Sold to ID <span className="font-medium">{loginCheckData.user.billto}</span></p>
                                </div>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-700 text-white">
                                    {customerData?.status ? customerData.status.charAt(0).toUpperCase() + customerData.status.slice(1) : 'Active'}
                                </span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center text-gray-700">
                                        <FaRegUserCircle className="mr-3 text-black" />
                                    <span className="font-medium">{loginCheckData.user.fullname}</span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <HiOutlineLocationMarker className="mr-3 text-black" />
                                    <span>
                                        {customerData?.billing_address?.['street-address']}
                                        {customerData?.billing_address?.region ? `, ${customerData.billing_address.region}` : ''}
                                        {customerData?.billing_address?.['postal-code'] ? ` ${customerData.billing_address['postal-code']}` : ''}
                                        {customerData?.billing_address?.['country-name'] ? `, ${customerData.billing_address['country-name']}` : ''}
                                    </span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <LuPhone className="mr-3 text-black" />
                                    <span>{loginCheckData.user.phone}</span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <CiMail className="mr-3 text-black" />
                                    <span>{loginCheckData.user.email}</span>
                                </div>
                            </div>
                            <div className="mt-9.25 p-4 bg-gray-100 rounded-lg">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="text-black">Account created on</span>
                                        <p className="font-medium text-gray-900">01/01/2024</p>
                                    </div>
                                    <div>
                                        <span className="text-black">Account reset on</span>
                                        <p className="font-medium text-gray-900">01/01/2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Customer Class Progress Card */}
                    {customerData && (
                        <div className="bg-white rounded-lg p-6 border border-gray-300">
                    
                            <div className="flex items-center justify-between mb-6 mt-5">
                                {customerData.current_quintile && (
                                    <div className="flex flex-col items-center flex-1">
                                        <div
                                            className="w-18 h-18 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2 mt-1"
                                            style={{ backgroundColor: customerData.current_quintile_color}}
                                        >
                                            {customerData.current_quintile}
                                        </div>
                                        <p className="text-xs text-gray-500 text-center mt-2 whitespace-nowrap">
                                            Customer Class
                                        </p>
                                        <p className="text-xs text-gray-500 text-center whitespace-nowrap">
                                            (Current Quintile)
                                        </p>
                                        <p className="font-bold text-lg">{customerData.current_quintile}</p>
                                    </div>
                                )}
                                
                                {customerData.current_quintile && customerData.next_quintile && customerData.amount_to_jump && (
                                    <div className="flex flex-col items-center flex-[2] mx-2 -mt-20">
                                        <p className="text-base font-semibold text-black mt-1">+${customerData.amount_to_jump}</p>
                                        <svg className="w-32 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 128 40">
                                            <path d="M8 20 H112" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                                            <polygon points="120,20 112,16 112,24" fill="currentColor" />
                                        </svg>
                                    </div>
                                )}
                                
                                <div className="flex flex-col items-center flex-1">
                                    <div
                                        className="w-18 h-18 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2"
                                        style={{ backgroundColor: customerData.next_quintile_color || customerData.quintiles?.Z?.color}}
                                    >
                                        {customerData.next_quintile || 'Z'}
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1 whitespace-nowrap">
                                        {customerData.current_quintile ? (
                                            <>
                                                Amount Needed to<br />Jump to Next Class
                                            </>
                                        ) : (
                                            <>
                                                Amount Needed to<br />Reach First Class
                                            </>
                                        )}
                                    </p>
                                    <p className="font-semibold">${customerData.amount_to_jump}</p>
                                </div>
                            </div>

                            <div className="mt-16">
                            <div className="bg-gray-100 rounded-lg p-2.5">
                                <div className="grid grid-cols-4 gap-2 text-xs">
                                    {['Z', 'S', 'M', 'L'].map((key) => {
                                        const q: any = customerData?.quintiles?.[key] || {};
                                        const colorClassMap: Record<string, string> = {
                                            white: 'bg-white',
                                            grey: 'bg-gray-600',
                                            blue: 'bg-blue-600',
                                            red: 'bg-red-600',
                                        };
                                        const bgClass = colorClassMap[q.color as string];
                                        const from = q.from ? Number(q.from) : 0;
                                        const to = q.to ? Number(q.to) : 0;
                                        const formatNum = (n: number) => {
                                            if (n >= 1000000) return (n/1000000) + 'M';
                                            if (n >= 1000) return (n/1000) + 'K';
                                            return n;
                                        };
                                        return (
                                            <div className="text-center" key={key}>
                                                <div className={`w-4 h-4 rounded-full mx-auto mb-1 border ${bgClass}`}></div>
                                                <div className="font-medium">{key}*</div>
                                                <div className="text-gray-600">{formatNum(from)}-{formatNum(to)}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            </div>
                        </div>
                    )}

                    {/* Last Purchase Date Card */}
                    {customerData && (
                        <div className="bg-white rounded-lg p-6 border border-gray-300">
                            <h2 className="text-lg font-semibold text-gray-900">Last Purchase Date</h2>
                             <p className="text-sm text-gray-600 mb-2">{customerData.most_recent_purchase || '02/20/2023 06:48 PM'}</p>

                            <div className="text-center mb-6 mt-10">
                                <div
                                    className={`w-18 h-18 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto ${
                                        customerData.purchase_color === 'purple'
                                            ? 'bg-purple-500'
                                            : customerData.purchase_color === 'red'
                                            ? 'bg-red-500'
                                            : customerData.purchase_color === 'green'
                                            ? 'bg-green-500'
                                            : customerData.purchase_color === 'yellow'
                                            ? 'bg-yellow-500'
                                            : ''
                                    }`}
                                    style={{
                                        backgroundColor:
                                            !['purple', 'red', 'green', 'yellow'].includes(customerData.purchase_color)
                                                ? "customerData.purchase_color"
                                                : undefined
                                    }}
                                >
                                    {customerData.purchase_months}
                                </div>
                                <p className="text-sm text-gray-600 mt-2">Months</p>
                            </div>

                            <div className="mt-12">
                                <div className="bg-gray-100 rounded-lg p-2.5">
                                    <div className="grid grid-cols-4 gap-2 text-xs">
                                        {customerData?.purchase_colors &&
                                            Object.entries(customerData.purchase_colors).map(([color, range]) => {
                                                const colorClassMap: Record<string, string> = {
                                                    green: 'bg-green-500',
                                                    yellow: 'bg-yellow-500',
                                                    red: 'bg-red-500',
                                                    purple: 'bg-purple-500',
                                                };
                                                return (
                                                    <div className="text-center" key={color}>
                                                        <div className={`w-4 h-4 rounded-full mx-auto mb-1 ${colorClassMap[color]}`}></div>
                                                        <div className="font-medium">{String(range)}</div>
                                                        <div className="text-gray-600">Months</div>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Accounting & Payment Info Dropdown */}
                <div className="mt-6">
                    <AccountingPaymentDropdown
                        terms={customerData?.terms}
                        creditLimit={customerData?.credit_limit}
                        taxable={customerData?.taxable}
                        riskCategory={customerData?.risk_category}
                        defaultExpanded={true}
                    />
                </div>


                {/* Ship To Info Dropdown */}
                <div className="mt-6">
                    {customerData?.shipping_addresses?.[0] && (
                        <ShipToInfoDropdown shippingAddress={customerData.shipping_addresses[0]} fax={customerData.fax} defaultExpanded={true} />
                    )}
                </div>

                {/* Ship To Info Dropdown V2 */}
                <div className="mt-6">
                    {customerData?.shipping_addresses?.[1] && customerData?.shipping_addresses?.[0] && (
                        <ShipToInfoDropdownV2
                            shippingAddress={customerData.shipping_addresses[0]}
                            shippingAddress2={customerData.shipping_addresses[1]}
                            fax={customerData.fax}
                            defaultExpanded={true}
                        />
                    )}
                </div>

                {/* Sales Summary Dropdown */}
                {customerData?.sales_summary && (
                    <SalesSummaryDropdown data={customerData.sales_summary} defaultExpanded={true} />
                )}


                {/* E-Commerce Summary Dropdown */}
                {customerData?.web_info && (
                    <EcommerceSummaryDropdown data={customerData.web_info} defaultExpanded={true} />
                )}

                {/* Additional Information Dropdown */}
                {customerData?.additional_info && Array.isArray(customerData.additional_info) && (
                    <AdditionalInfoDropdown data={customerData.additional_info} defaultExpanded={true} />
                )}

                {/* Loyalty Programs Dropdown V1 */}
                {loyaltySettings?.programs && Array.isArray(loyaltySettings.programs) && loyaltySettings.programs.length > 0 && (
                    (() => {
                        const LoyaltyProgramsDropdown = require('@/components/LoyaltyProgramsDropdown').default;
                        return <LoyaltyProgramsDropdown programs={loyaltySettings.programs} defaultExpanded={true} />;
                    })()
                )}

                {/* Loyalty Programs Dropdown V2 */}
                {loyaltySettings?.programs && Array.isArray(loyaltySettings.programs) && loyaltySettings.programs.length > 0 && (
                    (() => {
                        const LoyaltyProgramsDropdownV2 = require('@/components/LoyaltyProgramsDropdownV2').default;
                        return <LoyaltyProgramsDropdownV2 programs={loyaltySettings.programs} defaultExpanded={true} />;
                    })()
                )}
                

            </div>
        </div>
    );
}
