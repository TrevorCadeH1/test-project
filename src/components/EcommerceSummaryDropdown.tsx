"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface EcommerceSummaryData {
  web_enable_flag?: string;
  web_enable_date?: string;
  web_sales_month?: string;
  no_web_sales_cnt?: string;
  total_orders?: string;
  total_web_orders?: string;
  web_sales?: string;
  web_frequency?: string;
}

interface EcommerceSummaryDropdownProps {
  data: EcommerceSummaryData;
  defaultExpanded?: boolean;
}

export default function EcommerceSummaryDropdown({ data, defaultExpanded = false }: EcommerceSummaryDropdownProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden mt-6">
      {/* Header Bar */}
      <div
        className="bg-black/80 text-white px-6 py-3 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-medium">E-Commerce Summary</h2>
        <FaChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
      </div>
      {isExpanded && (
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-gray-600">Web Enable Flag</div>
              <div className="font-bold text-black">{data.web_enable_flag ? String(data.web_enable_flag) : "-"}</div>
            </div>
            <div>
              <div className="text-gray-600">Web Enable Date</div>
              <div className="font-bold text-black">{data.web_enable_date ? String(data.web_enable_date) : "-"}</div>
            </div>
            <div>
              <div className="text-gray-600">Last Web Sales Month</div>
              <div className="font-bold text-black">{data.web_sales_month ? String(data.web_sales_month) : "-"}</div>
            </div>
            <div>
              <div className="text-gray-600">No Web Sales Month Count</div>
              <div className="font-bold text-black">{data.no_web_sales_cnt}</div>
            </div>
            <div>
              <div className="text-gray-600">Total Order Count (12mm)</div>
              <div className="font-bold text-black">{data.total_orders}</div>
            </div>
            <div>
              <div className="text-gray-600">Total Web Order Count (12mm)</div>
              <div className="font-bold text-black">{data.total_web_orders}</div>
            </div>
            <div>
              <div className="text-gray-600">Web Sales ($$$)</div>
              <div className="font-bold text-black">{'$' + data.web_sales}</div>
            </div>
            <div>
              <div className="text-gray-600">Web Frequency (month) last 12 months</div>
              <div className="font-bold text-black">{data.web_frequency}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
