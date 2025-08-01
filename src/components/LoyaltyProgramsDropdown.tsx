"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";


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

interface LoyaltyProgramsDropdownProps {
  programs: Program[];
  defaultExpanded?: boolean;
}

function formatCurrency(val?: string | number) {
  if (val === undefined || val === null || isNaN(Number(val))) return "-";
  return "$" + Number(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function LoyaltyProgramsDropdown({ programs, defaultExpanded = false }: LoyaltyProgramsDropdownProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden mt-6">
      {/* Header Bar */}
      <div
        className="bg-black/80 text-white px-6 py-3 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold">Loyalty Programs</h2>
        <FaChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
      </div>
      {isExpanded && (
        <div className="p-6 space-y-8">
          {programs.map((program, idx) => {
            const tiers = program.tiers.map(t => Number(t.percent));
            const maxTier = Math.max(...tiers);
            let barPercent = 0;
            const target = Number(program.next_tier?.target || 0);
            const currentTotal = Number(program.total || 0);
            
            if (program.type === 'SINGLE_TIER') {
              if (target > 0) {
                if (currentTotal >= target) {
                  barPercent = 94;
                } else {
                  barPercent = Math.max(0, Math.min((currentTotal / target) * 100, 100));
                }
              }
            } else {
              if (idx === 1) {
                const thirdTierPercent = Number(program.tiers[2]?.percent || 0);
                if (thirdTierPercent > 0) {
                  barPercent = Math.max(0, Math.min((currentTotal / thirdTierPercent) * 100, 100));
                }
              } else {
                if (target > 0) {
                  barPercent = Math.max(0, Math.min((currentTotal / target) * 100, 100));
                }
              }
            }
            
            const nextTierTarget = Number(program.next_tier?.target || 0);
            let starPercent = target > 0 ? Math.min((nextTierTarget / target) * 100, 100) : 0;
            
            const barBg = idx === 1 
              ? ''
              : (program.type === 'SINGLE_TIER'
              ? 'bg-gradient-to-r from-white via-[#e6f9ec] via-12% to-[#15803d] to-70% border border-black/50'
              : 'bg-gradient-to-r from-[#ef4444] via-[#f59e42] to-[#a855f7]');
                
            return (
              <div key={program.id} className="mb-8">
                <div className="font-semibold text-sm text-black mb-1">{program.name}</div>
                <div className="text-xs text-gray-500 mb-4">
                  Program Dates: {program.date_from} — {program.date_to} {program.type === 'SINGLE_TIER' ? '(Tiered Program)' : ''}
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1 min-w-0 mt-2">
                    {/* Progress Bar Section */}
                    <div className="relative h-8 flex items-center">
                      {idx === 1 ? (
                        <>
                          <div className="absolute left-0 top-1/2 bg-red-500 h-7 rounded-l-full" style={{ width: '60%', transform: 'translateY(-50%)' }} />
                          <div className="absolute bg-orange-500 h-7" style={{ left: '60%', width: '30%', top: '50%', transform: 'translateY(-50%)' }} />
                          <div className="absolute bg-purple-500 h-7 rounded-r-full" style={{ left: '90%', width: '10%', top: '50%', transform: 'translateY(-50%)' }} />
                        </>
                      ) : (
                        <div className={`absolute left-0 top-1/2 w-full h-7 rounded-full ${barBg}`} style={{ transform: 'translateY(-50%)' }} />
                      )}
                      
                      <div className="absolute top-0 flex flex-col items-center" style={{ left: `${barPercent}%`, transform: 'translateX(-50%)' }}>
                        <div className="w-1.5 h-8 bg-black rounded-full" />
                        <div className="text-xs text-black mt-1 whitespace-nowrap font-semibold">
                          {formatCurrency(program.total)}
                        </div>
                      </div>
                      
                      {idx === 1 && (
                        <>
                          <div className="absolute" style={{ left: '30%', top: '-20px', transform: 'translateX(-50%)' }}>
                            <div className="text-xs font-semibold text-black text-center">{(program.tiers[0]?.value)}%</div>
                          </div>
                          <div className="absolute" style={{ left: '30%', top: '35px', transform: 'translateX(-50%)' }}>
                            <div className="text-xs text-gray-600 text-center">{formatCurrency(program.tiers[0]?.percent || '0')}</div>
                          </div>
                          
                          <div className="absolute" style={{ left: '75%', top: '-20px', transform: 'translateX(-50%)' }}>
                            <div className="text-xs font-semibold text-black text-center">{(program.tiers[1]?.value)}%</div>
                          </div>
                          <div className="absolute" style={{ left: '75%', top: '35px', transform: 'translateX(-50%)' }}>
                            <div className="text-xs text-gray-600 text-center">{formatCurrency(program.tiers[1]?.percent || '0')}</div>
                          </div>
                          
                          <div className="absolute" style={{ left: '95%', top: '-20px', transform: 'translateX(-50%)' }}>
                            <div className="text-xs font-semibold text-black text-center">{(program.tiers[2]?.value)}%</div>
                          </div>
                          <div className="absolute" style={{ left: '95%', top: '35px', transform: 'translateX(-50%)' }}>
                            <div className="text-xs text-gray-600 text-center">{formatCurrency(program.tiers[2]?.percent || '0')}</div>
                          </div>
                        </>
                      )}
                      
                      {program.type === 'SINGLE_TIER' && (
                        <>
                          <div className="absolute left-0 top-14 text-xs text-gray-500">Total Qualified Purchases</div>
                          {(() => {
                            let starPosition = starPercent;
                            
                            if (currentTotal >= target) {
                              starPosition = 94;
                            }
                            
                            return starPosition > 0 && starPosition <= 100 && (
                              <div
                                className="absolute"
                                style={{
                                  left: `${starPosition}%`,
                                  top: '2px',
                                  transform: 'translateX(-120%)',
                                  zIndex: 2,
                                }}
                              >
                                <span role="img" aria-label="star" className="text-4xl"><IoStarSharp className="text-yellow-300" /></span>
                              </div>
                            );
                          })()}
                          <div className="absolute left-0 -top-6 text-xs font-semibold text-black">{formatCurrency(0)}</div>
                          <div className="absolute right-0 -top-6 text-xs font-semibold text-black">{formatCurrency(target)}</div>
                        </>
                      )}
                      
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 flex-shrink-0 mt-8 md:mt-0">
                    {/* Reward Cards */}
                    {program.type === 'SINGLE_TIER' ? (
                      <>
                        <div className="bg-white border rounded-lg px-4.75 py-3 flex flex-col items-center min-w-[140px]">
                          <div className="text-xs text-gray-500 mb-1">Program Rewards Rate</div>
                          <div className="text-lg font-bold text-black">{Number(program.next_tier?.payout || 0).toFixed(0)}%</div>
                          <div className="text-xs text-gray-400">Earn {Number(program.next_tier?.payout || 0).toFixed(0)}% back on purchases</div>
                        </div>
                        <div className="bg-white border rounded-lg px-4.75 py-3 flex flex-col items-center min-w-[140px]">
                          <div className="text-xs text-gray-500 mb-1">Amount Remaining</div>
                          <div className="text-lg font-bold text-green-600">{formatCurrency(program.next_tier?.total_remaining)}</div>
                          <div className="text-xs text-gray-400">To Start Earning Rewards</div>
                        </div>
                        <div className="bg-white border rounded-lg px-4.75 py-3 flex flex-col items-center min-w-[140px]">
                          <div className="text-xs text-gray-500 mb-1">Rewards Begin at</div>
                          <div className="text-lg font-bold text-blue-700">{formatCurrency(program.next_tier?.rebate)}</div>
                          <div className="text-xs text-gray-400">Once Reaching {formatCurrency(program.next_tier?.target)}</div>
                        </div>
                        <div className="bg-white border rounded-lg px-4.75 py-3 flex flex-col items-center min-w-[140px]">
                          <div className="text-xs text-gray-500 mb-1">Days Remaining</div>
                          <div className="text-lg font-bold text-black">{program.days_remaining}</div>
                          <div className="text-xs text-gray-400">Until rewards are issued</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-white border rounded-lg px-6 py-3 flex flex-col items-center min-w-[170px]">
                          <div className="text-xs text-gray-500 mb-1">Current Reward Level</div>
                          {(() => {
                            let colorClass = "text-black";
                            if (idx === 1) {
                              if (barPercent < 60) colorClass = "text-red-500";
                              else if (barPercent < 90) colorClass = "text-orange-500";
                              else colorClass = "text-purple-500";
                            }
                            return (
                              <div className={`text-lg font-bold ${colorClass}`}>{Number(program.current_tier?.payout || 0).toFixed(2)}%</div>
                            );
                          })()}
                          <div className="text-xs text-gray-400">{program.type_label}</div>
                        </div>
                        <div className="bg-white border rounded-lg px-6 py-3 flex flex-col items-center min-w-[170px]">
                          <div className="text-xs text-gray-500 mb-1">Reach Next Level</div>
                          <div className="text-lg font-bold text-orange-600">{formatCurrency(program.next_tier?.total_remaining)}</div>
                          <div className="text-xs text-gray-400">Next level at {formatCurrency(program.next_tier?.target)}</div>
                        </div>
                        <div className="bg-white border rounded-lg px-6 py-3 flex flex-col items-center min-w-[170px]">
                          <div className="text-xs text-gray-500 mb-1">Rewards Earned</div>
                          <div className="text-lg font-bold text-black">{formatCurrency(program.total_earned)}</div>
                          <div className="text-xs text-gray-400">— No difference this year</div>
                        </div>
                        <div className="bg-white border rounded-lg px-6 py-3 flex flex-col items-center min-w-[170px]">
                          <div className="text-xs text-gray-500 mb-1">Days Remaining</div>
                          <div className="text-lg font-bold text-black">{program.days_remaining}</div>
                          <div className="text-xs text-gray-400">Until rewards are issued</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}