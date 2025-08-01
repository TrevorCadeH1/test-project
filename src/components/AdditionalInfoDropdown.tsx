"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AdditionalInfoItem {
  key: string;
  option: string;
  value: string;
}

interface AdditionalInfoDropdownProps {
  data: AdditionalInfoItem[];
  defaultExpanded?: boolean;
}

export default function AdditionalInfoDropdown({ data, defaultExpanded = false }: AdditionalInfoDropdownProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden mt-6">
      {/* Header Bar */}
      <div
        className="bg-black/80 text-white px-6 py-3 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-medium">Additional Information</h2>
        <FaChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
      </div>
      {isExpanded && (
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
            {data.map((item) => (
              <div key={item.key} className="flex flex-col items-start">
                <div className="text-gray-600">{item.option}</div>
                <div className="font-bold text-black mt-1">{item.value ? item.value : <span className="">-</span>}</div>
              </div>
            ))}
            <div className="flex items-center justify-center md:justify-end w-full h-full">
              <button className="bg-black text-white px-6 py-2 rounded font-semibold hover:cursor-pointer hover:bg-gray-800 transition-colors">Edit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
