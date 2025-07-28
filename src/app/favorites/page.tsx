'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function FavoritesPage() {
    const { isAuthenticated, isLoading: authLoading } = useAuth();
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        if (!authLoading) {
            if (!isAuthenticated) {
                router.push('/signin');
            } else {
                setIsChecking(false);
            }
        }
    }, [isAuthenticated, authLoading, router]);

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
                <div id="favorites" className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-black">Favorites</h2>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src="/Screw.png" alt="Screw" className="w-12 h-12 object-contain rounded" />
                                <div>
                                    <p className="font-medium text-black">Product Name: Hinge Accessories Deep Thread System Screws POZI Drive #7...</p>
                                    <p className="text-gray-600 text-sm">Mfr #: BP6611300HG</p>
                                </div>
                            </div>
                            <div className="text-end">
                                <span className="text-black text-sm font-medium">$84.00 / 1000 Each</span> <br />
                                <span className="text-black text-sm font-medium">$0.084 / Each</span>
                            </div>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src="/Hinge.png" alt="Hinge" className="w-12 h-12 object-contain rounded" />
                                <div>
                                    <p className="font-medium text-black">Product Name: 110 Deg + CLIP Top BLUMOTION, Soft-Close Hinges For Door...</p>
                                    <p className="text-gray-600 text-sm">Mfr #: BP73B3580</p>
                                </div>
                            </div>
                            <span className="text-black text-sm font-medium">$4.471 / Each</span>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src="/Hinge2.png" alt="Hinge2" className="w-12 h-12 object-contain rounded" />
                                <div>
                                    <p className="font-medium text-black">Product Name: CLIP Top BLUMOTION Angled Hinges +45 Deg Angled 110 Deg...</p>
                                    <p className="text-gray-600 text-sm">Mfr #: BP79B3598</p>
                                </div>
                            </div>
                            <span className="text-black text-sm font-medium">$10.298 / Each</span>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src="/Screw2.png" alt="Screw2" className="w-12 h-12 object-contain rounded" />
                                <div>
                                    <p className="font-medium text-black">Product Name: No. 8 Deep Thread Wood Screw 2" Length - 1,000 Box Qty</p>
                                    <p className="text-gray-600 text-sm">Mfr #: BP8200Z1000</p>
                                </div>
                            </div>
                            <div className="text-end">
                                <span className="text-black text-sm font-medium">$47.00 / 1000 Each</span> <br />
                                <span className="text-black text-sm font-medium">$0.047 / Each</span>
                            </div>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src="/Slide.png" alt="Hinge2" className="w-12 h-12 object-contain rounded" />
                                <div>
                                    <p className="font-medium text-black">Product Name: Blum TANDEM Plus BLUMOTION 563F Undermount Drawer Slides...</p>
                                    <p className="text-gray-600 text-sm">Mfr #: BP563F4570B</p>
                                </div>
                            </div>
                            <span className="text-black text-sm font-medium">$31.787 / Set</span>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src="/Clip.png" alt="Hinge2" className="w-12 h-12 object-contain rounded" />
                                <div>
                                    <p className="font-medium text-black">Product Name: 95 Deg Onyx Black CLIP Top BLUMOTION Soft-Close Blind...</p>
                                    <p className="text-gray-600 text-sm">Mfr #: BP79B9590-ONYX</p>
                                </div>
                            </div>
                            <span className="text-black text-sm font-medium">$9.665 / Each</span>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src="/Slide2.png" alt="Hinge2" className="w-12 h-12 object-contain rounded" />
                                <div>
                                    <p className="font-medium text-black">Product Name: 18" 569F HEAVY DUTY TANDEM BLUMOTION SLD - Blum...</p>
                                    <p className="text-gray-600 text-sm">Mfr #: BP569F4570B</p>
                                </div>
                            </div>
                            <span className="text-black text-sm font-medium">$47.238 / Set</span>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src="/Slide3.png" alt="Hinge2" className="w-12 h-12 object-contain rounded" />
                                <div>
                                    <p className="font-medium text-black">Product Name: 18" 569H HEAVY DUTY TANDEM BLUMOTION SLD - Blum...</p>
                                    <p className="text-gray-600 text-sm">Mfr #: BP569H4570B</p>
                                </div>
                            </div>
                            <span className="text-black text-sm font-medium">$45.332 / Set</span>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src="/Slide4.png" alt="Hinge2" className="w-12 h-12 object-contain rounded" />
                                <div>
                                    <p className="font-medium text-black">Product Name: Blum TANDEM plus BLUMOTION 563H Undermount Drawer Slides...</p>
                                    <p className="text-gray-600 text-sm">Mfr #: BP563H5330B</p>
                                </div>
                            </div>
                            <span className="text-black text-sm font-medium">$29.782 / Set</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}