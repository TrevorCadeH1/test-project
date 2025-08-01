'use client';

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface AccountingPaymentDropdownProps {
    terms?: string;
    creditLimit?: string;
    taxable?: string;
    riskCategory?: string;
    defaultExpanded?: boolean;
}


export default function AccountingPaymentDropdown(props: AccountingPaymentDropdownProps) {
    const {
        terms,
        creditLimit,
        taxable,
        riskCategory,
        defaultExpanded = false
    } = props;
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    const formatCreditLimit = (limit: string | undefined) => {
        if (!limit) return 'N/A';
        const num = parseFloat(limit);
        return `$${num.toFixed(2)}`;
    };

    return (
        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
            {/* Header Bar */}
            <div 
                className="bg-black/80 text-white px-6 py-3 cursor-pointer flex items-center justify-between"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <h2 className="text-lg font-medium">Accounting & Payment Info</h2>
                <FaChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                />
            </div>

            {isExpanded && (
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Payment Terms */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-600 mb-2">Payment Terms</h3>
                            <p className="text-black font-medium">
                                {terms }
                            </p>
                        </div>

                        {/* Credit Limit */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-600 mb-2">Credit Limit</h3>
                            <p className="text-black font-medium text-lg">
                                {formatCreditLimit(creditLimit)}
                            </p>
                        </div>

                        {/* Taxable */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-600 mb-2">Taxable</h3>
                            <p className="text-black font-medium">
                                {taxable ? (
                                    taxable
                                ) : (
                                    <span className="">-</span>
                                )}
                            </p>
                        </div>

                        {/* Account Risk Category */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-600 mb-2">Account Risk Category</h3>
                            <p className="text-black font-medium">
                                {riskCategory}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
