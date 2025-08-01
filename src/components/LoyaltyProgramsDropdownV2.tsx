
"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineStars } from "react-icons/md";


interface Tier {
  percent: string;
  value: string;
}

interface Program {
  id: string;
  name: string;
  date_from: string;
  date_to: string;
  type: string;
  type_label: string;
  days_remaining: number;
  tiers: Tier[];
  current_tier: {
    target: string;
    payout: string;
    rebate: string;
    last_year_diff: string;
  };
  next_tier: {
    target: string;
    payout: string;
    rebate: string;
    total_remaining: string;
  };
  total: string;
  total_amount: number;
  total_earned: string;
  description?: string;
}

interface LoyaltyProgramsDropdownV2Props {
  programs: Program[];
  defaultExpanded?: boolean;
}

function formatCurrency(val?: string | number) {
  if (val === undefined || val === null || isNaN(Number(val))) return "$0.00";
  return "$" + Number(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function LoyaltyProgramsDropdownV2({ programs, defaultExpanded = false }: LoyaltyProgramsDropdownV2Props) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden mt-6">
      {/* Header Bar */}
      <div
        className="bg-black/80 text-white px-6 py-3 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold tracking-tight">Loyalty Programs</h2>
        <FaChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
      </div>
      {isExpanded && programs[0] && (
        (() => {
          const program = programs[0];
          const total = Number(program.total);
          const target = Number(program.next_tier?.target || 0);
          const totalRemaining = Number(program.next_tier?.total_remaining || 0);
          let barPercent = 0;
          if (target > 0 && totalRemaining >= 0 && totalRemaining <= target) {
            barPercent = Math.max(0, Math.min(((target - totalRemaining) / target) * 100, 100));
          } else if (target > 0 && totalRemaining < 0) {
            barPercent = 100;
          }
          const barBg = "bg-gradient-to-r from-[#A8E063] to-[#166534]";
          return (
            <div className="p-8">
              <div className="font-semibold text-sm text-black mb-1 tracking-tight">{program.name}</div>
              <div className="text-xs text-gray-500 mb-5">
                {program.date_from} – {program.date_to} {program.type === 'SINGLE_TIER' ? '(Tiered Program)' : ''}
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                {/* Progress Bar Section */}
                <div className="flex-1 mt-2 min-w-0">
                  <div className="relative h-8 flex items-center">
                    <div className={`absolute left-0 top-1/2 w-full h-7 rounded-full ${barBg}`} style={{ transform: 'translateY(-50%)' }} />
                    <div className="absolute top-0 flex flex-col items-center" style={{ left: `${barPercent}%`, transform: 'translateX(-50%)' }}>
                      <div className="w-1.5 h-8 bg-black rounded-full" />
                      <div className="text-xs text-black mt-1 whitespace-nowrap font-semibold tracking-tight">{formatCurrency(program.total)}</div>
                    </div>
                    <svg className="absolute" style={{ left: `calc(100% - 32px)`, top: '1px', zIndex: 2 }} width="30" height="30" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="14" stroke="#14532d" strokeWidth="1" fill="#fde047" />
                        <path d="M16 8l2.09 6.26H24l-5.18 3.76L19.91 24 16 19.77 12.09 24l1.09-5.98L8 14.26h5.91z" stroke="#14532d" strokeWidth="1.5" fill="#fde047" />
                    </svg>
                    <div className="absolute left-0 -top-7 text-xs font-semibold text-black tracking-tight">$0</div>
                    {[0.25, 0.5, 0.75].map((percent) => (
                      <div
                        key={percent}
                        className="absolute -top-7 text-xs font-semibold text-black tracking-tight"
                        style={{ left: `${percent * 100}%`, transform: "translateX(-50%)" }}
                      >
                        {formatCurrency(target * percent)}
                      </div>
                    ))}
                    <div className="absolute -right-5 md:-right-2 -top-7 text-xs font-semibold text-black tracking-tight">{formatCurrency(target)}</div>
                  </div>
                  <div className="mt-5 text-xs font-medium text-gray-600 tracking-tight">Total Qualified Purchases</div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 flex-shrink-0 mt-8 md:mt-0">
                    <div className="bg-white border rounded-lg px-4.75 py-3 flex flex-col items-center min-w-[160px]">
                        <div className="text-xs text-gray-500 mb-1 tracking-tight">Program Rewards Rate</div>
                        <div className="text-lg font-semibold text-black tracking-tight">{Number(program.next_tier?.payout || 0).toFixed(0)}%</div>
                        <div className="text-xs text-gray-400 tracking-tight text-center">Earn {Number(program.next_tier?.payout || 0).toFixed(0)}% back on <br /> puchases</div>
                    </div>
                    <div className="bg-white border rounded-lg px-4.75 py-3 flex flex-col items-center min-w-[160px]">
                        <div className="text-xs text-gray-500 mb-1 tracking-tight">Amount Remaining</div>
                        <div className="text-lg font-semibold text-black tracking-tight">{formatCurrency(program.next_tier?.total_remaining)}</div>
                        <div className="text-xs text-gray-400 tracking-tight text-center">To start earning <br /> rewards</div>
                    </div>
                    <div className="bg-white border rounded-lg px-4.75 py-3 flex flex-col items-center min-w-[160px]">
                        <div className="text-xs text-gray-500 mb-1 tracking-tight">Rewards Earned</div>
                        <div className="text-lg font-semibold text-black tracking-tight">{formatCurrency(program.total_earned)}</div>
                        <div className="text-xs text-gray-400 tracking-tight text-center">Rewards issued at <br /> program end</div>
                    </div>
                    <div className="bg-white border rounded-lg px-4.75 py-3 flex flex-col items-center min-w-[160px]">
                        <div className="text-xs text-gray-500 mb-1 tracking-tight">Days Remaining</div>
                        <div className="text-lg font-semibold text-black tracking-tight">{program.days_remaining}</div>
                        <div className="text-xs text-gray-400 tracking-tight text-center">United rewards <br /> are issued</div>
                    </div>
                    
                </div>
              </div>

              <div className="flex justify-end mt-2">
                <span className="text-xs text-gray-600 tracking-tight text-right">
                  Once reaching {formatCurrency(program.next_tier?.target)}, rewards are unlocked and continue to grow at {Number(program.next_tier?.payout || 0).toFixed(0)}% for the rest of the program
                </span>
              </div>
                    
              <div className="flex justify-end mt-6">
                <button className="bg-white border border-gray-300 rounded-lg px-5 py-2 text-black font-medium shadow-sm hover:cursor-pointer hover:bg-gray-50 transition text-sm tracking-tight">Go to loyalty programs</button>
              </div>
            </div>
          );
        })()
      )}
    </div>
  );
}
