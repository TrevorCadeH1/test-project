'use client';

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface SalesSummaryData {
  prev_year_sales: string;
  cur_year_sales: string;
  change_val: string;
  change_per: string;
  gp_change_val: string;
  gp_change_per: string;
  prev_year_gp: string;
  cur_year_gp: string;
}

interface SalesSummaryDropdownProps {
  data: SalesSummaryData;
  defaultExpanded?: boolean;
}

export default function SalesSummaryDropdown({ data, defaultExpanded = false }: SalesSummaryDropdownProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const prevSales = parseFloat(data.prev_year_sales);
  const curSales = parseFloat(data.cur_year_sales);
  const prevGP = parseFloat(data.prev_year_gp);
  const curGP = parseFloat(data.cur_year_gp);

    let maxSales = Math.max(prevSales, curSales, 1000);
    if (maxSales < 10000) {
        maxSales = 10000;
    } else if (maxSales < 20000) {
        maxSales = 20000;
    } else if (maxSales < 30000) {
        maxSales = 30000;
    } else if (maxSales < 40000) {
        maxSales = 40000;
    } else if (maxSales < 50000) {
        maxSales = 50000;
    }
    const maxGP = 100;

  return (
    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden mt-6">
      {/* Header Bar */}
      <div
        className="bg-black/80 text-white px-6 py-3 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-medium">Sales Summary</h2>
        <FaChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
      </div>
      {isExpanded && (
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4">Sales Comparison</h3>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="w-32 text-gray-600 text-sm">Previous Year</span>
                    <div className="flex-1 h-5 bg-blue-200 rounded relative ml-2">
                    <div
                      className="h-5 bg-blue-400 rounded"
                      style={{ width: `${Math.max(5, (prevSales / maxSales) * 100)}%` }}
                    ></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-32 text-gray-600 text-sm">Current Year</span>
                    <div className="flex-1 h-5 bg-orange-200 rounded relative ml-2">
                    <div className="hidden sm:block">
                      {[10000, 20000, 30000, 40000, 50000].map((milestone, idx) => {
                        const left = `${20 * (idx + 1)}%`;
                        return (
                          <div
                            key={milestone}
                            className="absolute -bottom-1 h-15 border-l border-gray-400"
                            style={{
                              left,
                              zIndex: 10,
                            }}
                          >
                            <span
                              className="absolute -bottom-6 text-xs text-gray-700 font-semibold"
                              style={{ left: '-1.5rem', minWidth: '3rem', textAlign: 'center' }}
                            >
                              {milestone >= 1000
                                ? `$${milestone / 1000}k`
                                : `$${milestone.toLocaleString()}`}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <div
                      className="h-5 bg-orange-400 rounded"
                      style={{ width: `${Math.max(5, (curSales / maxSales) * 100)}%` }}
                    ></div>
                    </div>
                  </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mt-10">
                <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-gray-600">Previous Year Sales (YTD)</div>
                        <div className="font-bold text-black">${Number(data.prev_year_sales).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</div>
                    </div>
                    <div>
                        <div className="text-gray-600">Current Year Sales (YTD)</div>
                        <div className="font-bold text-black">${Number(data.cur_year_sales).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</div>
                    </div>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-4 mt-2">
                    <div>
                        <div className="text-gray-600">Change $ YTD</div>
                        <div className="font-bold text-black">${Number(data.change_val).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</div>
                    </div>
                    <div>
                        <div className="text-gray-600">Change % YTD</div>
                        <div className="font-bold text-black">{Number(data.change_per).toLocaleString(undefined, {maximumFractionDigits:2})}%</div>
                    </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4">GP% Comparison</h3>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="w-32 text-gray-600 text-sm">Previous Year</span>
                    <div className="flex-1 h-5 bg-blue-200 rounded relative ml-2">
                    <div
                      className="h-5 bg-blue-300 rounded"
                      style={{ width: `${Math.max(5, (prevGP / maxGP) * 100)}%` }}
                    ></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-32 text-gray-600 text-sm">Current Year</span>
                    <div className="flex-1 h-5 bg-orange-200 rounded relative ml-2">
                    <div className="hidden sm:block">
                      {[20, 40, 60, 80, 100].map((milestone) => (
                      <div
                        key={milestone}
                        className="absolute -bottom-1 h-15 border-l border-gray-400"
                        style={{
                        left: `${milestone}%`,
                        zIndex: 10,
                        }}
                      >
                        <span
                        className="absolute -bottom-6 text-xs text-gray-700 font-semibold"
                        style={{ left: '-1.5rem', minWidth: '3rem', textAlign: 'center' }}
                        >
                        {milestone}%
                        </span>
                      </div>
                      ))}
                    </div>
                    <div
                      className="h-5 bg-orange-400 rounded"
                      style={{ width: `${Math.max(5, (curGP / maxGP) * 100)}%` }}
                    ></div>
                    </div>
                  </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mt-10">
                <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-gray-600">Previous Year GP%</div>
                        <div className="font-bold text-black">{Number(data.prev_year_gp).toLocaleString(undefined, {maximumFractionDigits:2})}%</div>
                    </div>
                    <div>
                        <div className="text-gray-600">Current Year GP%</div>
                        <div className="font-bold text-black">{Number(data.cur_year_gp).toLocaleString(undefined, {maximumFractionDigits:2})}%</div>
                    </div>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-4 mt-2">
                    <div>
                        <div className="text-gray-600">Change GP $$$</div>
                        <div className="font-bold text-black">${Number(data.gp_change_val).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</div>
                    </div>
                    <div>
                        <div className="text-gray-600">Change GP%</div>
                        <div className="font-bold text-black">{Number(data.gp_change_per).toLocaleString(undefined, {maximumFractionDigits:2})}%</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
