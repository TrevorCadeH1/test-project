'use client';

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface ShipToInfoDropdownV2Props {
  shippingAddress: any;
  shippingAddress2?: any;
  fax?: string;
  defaultExpanded?: boolean;
}

export default function ShipToInfoDropdownV2({ shippingAddress, shippingAddress2, fax, defaultExpanded = false }: ShipToInfoDropdownV2Props) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  if (!shippingAddress) return null;
  const defaults = shippingAddress.defaults || {};

  return (
    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden mt-6">
      {/* Header Bar */}
      <div
        className="bg-black/80 text-white px-6 py-3 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-medium">Ship To Info</h2>
        <FaChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </div>
      {isExpanded && (
        <div className="p-6">
          <div className="mb-4">
            <div className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-3">
                <span className="font-semibold text-base text-black">
                    Ship to ID # {shippingAddress['xc-addressid'] || 'N/A'}
                </span>
                <div className="text-sm text-black mb-2">
                    {shippingAddress['street-address']}, {shippingAddress['locality']}, {shippingAddress['county']}, {shippingAddress['region']}, {shippingAddress['postal-code']}{shippingAddress['zip4'] ? '-' + shippingAddress['zip4'] : ''}, {shippingAddress['country-name']}
                </div>
            </div>
            <div className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-3">
                <span className="font-semibold text-base text-black">
                    Ship to ID # {shippingAddress2['xc-addressid'] || 'N/A'}
                </span>
                <div className="text-sm text-black mb-2">
                    {shippingAddress2['street-address']}, {shippingAddress2['locality']}, {shippingAddress2['county']}, {shippingAddress2['region']}, {shippingAddress2['postal-code']}{shippingAddress2['zip4'] ? '-' + shippingAddress2['zip4'] : ''}, {shippingAddress2['country-name']}
                </div>
            </div>
                <div className="mt-2 rounded-lg overflow-hidden border border-gray-200">
                <iframe
                    title="Shipping Address Map"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                    `${shippingAddress2['street-address']}, ${shippingAddress2['locality']}, ${shippingAddress2['county']}, ${shippingAddress2['region']}, ${shippingAddress2['postal-code']}${shippingAddress2['zip4'] ? '-' + shippingAddress2['zip4'] : ''}, ${shippingAddress2['country-name']}`
                    )}&output=embed`}
                ></iframe>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-medium text-black mb-2">Communication Defaults</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-300 rounded-lg p-4 flex-1 min-w-0">
                    <div className="text-xs text-gray-600 mb-1">Send Order Confirmation Email</div>
                    <div className="text-black font-medium text-sm">{defaults.order_conf_email || '-'}</div>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 flex-1 min-w-0">
                    <div className="text-xs text-gray-600 mb-1">Send Order Confirmation Fax</div>
                    <div className="text-black font-medium text-sm">{defaults.order_conf_fax || '-'}</div>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 flex-1 min-w-0">
                    <div className="text-xs text-gray-600 mb-1">Send Shipping Notification Email</div>
                    <div className="text-black font-medium text-sm">{defaults.shipping_email || '-'}</div>
                </div>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-medium text-black mb-4">Notes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                    <div className="text-xs text-gray-600 mb-2">
                    Sales Notes (FROM SAP Customer Master):
                    </div>
                    <div className="text-black font-semibold text-sm">
                    {defaults.sales_notes || <span className="font-normal text-gray-400">-</span>}
                    </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                    <div className="text-xs text-gray-600 mb-2">
                    Shipping Notes (FROM SAP Customer Master):
                    </div>
                    <div className="text-black text-sm">
                    {defaults.shipping_notes || <span className="font-normal text-gray-400">-</span>}
                    </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                    <div className="text-xs text-gray-600 mb-2">
                    Driver Notes (FROM SAP Customer Master):
                    </div>
                    <div className="text-black font-semibold text-sm">
                    {defaults.driver_notes || <span className="font-normal text-gray-400">-</span>}
                    </div>
                </div>
                </div>
            </div>

            <div className="mb-2">
                <h3 className="text-xl font-medium text-black mb-2">Shipping Preferences</h3>
                <div className="grid grid-cols-1 md:mt-4 md:grid-cols-4 gap-4">
                <div>
                    <div className="text-xs text-gray-600 mb-1">Phone number</div>
                    <div className="text-black font-medium text-sm">{shippingAddress2['phone-number'] || '-'}</div>
                </div>
                <div>
                    <div className="text-xs text-gray-600 mb-1">Primary Shipping From Location</div>
                    <div className="text-black font-medium text-sm">{shippingAddress2['default_location'] || '-'}</div>
                </div>
                <div>
                    <div className="text-xs text-gray-600 mb-1">Preferred Shipping Method</div>
                    <div className="text-black font-medium text-sm">{shippingAddress2['shipping'] || '-'}</div>
                </div>
                <div>
                    <div className="text-xs text-gray-600 mb-1">Truck Routing Schedule (Days)</div>
                    <div className="text-black font-medium text-sm">{shippingAddress2['route_days'] || '-'}</div>
                </div>
                <div>
                    <div className="text-xs text-gray-600 mb-1">Phone number (Residential)</div>
                    <div className="text-black font-medium text-sm">{shippingAddress2['phone-number'] || '-'}</div>
                </div>
                <div>
                    <div className="text-xs text-gray-600 mb-1">Fax</div>
                    <div className="text-black font-medium text-sm">{fax || '-'}</div>
                </div>
                <div>
                    <div className="text-xs text-gray-600 mb-1">Freight Policy Default</div>
                    <div className="text-black font-medium text-sm">{shippingAddress2['freight_policy'] || '-'}</div>
                </div>
                <div>
                    <div className="text-xs text-gray-600 mb-1">Sales Region</div>
                    <div className="text-black font-medium text-sm">{shippingAddress2['sales_region'] || '-'}</div>
                </div>
                </div>
            </div>
            </div>
        )}
        </div>
    );
    }
