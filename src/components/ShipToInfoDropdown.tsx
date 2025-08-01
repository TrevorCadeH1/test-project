'use client';


import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface ShipToInfoDropdownProps {
  shippingAddress?: any;
  fax?: string;
  defaultExpanded?: boolean;
}

export default function ShipToInfoDropdown({ shippingAddress, fax, defaultExpanded = false }: ShipToInfoDropdownProps) {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Phone number</h3>
              <p className="text-black font-medium">{shippingAddress['phone-number'] || 'N/A'}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Primary Shipping From Location</h3>
              <p className="text-black font-medium">{shippingAddress['default_location'] || 'N/A'}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Preferred Shipping Method</h3>
              <p className="text-black font-medium">{shippingAddress['shipping'] || 'N/A'}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Truck Routing Schedule (Days)</h3>
              <p className="text-black font-medium">{shippingAddress['route_days'] || 'N/A'}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Phone number (Residential)</h3>
              <p className="text-black font-medium">{shippingAddress['phone-number'] || 'N/A'}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Fax</h3>
              <p className="text-black font-medium">{fax ? (
                fax
                ) : (
                <span className="">-</span>
                )}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Freight Policy Default</h3>
              <p className="text-black font-medium">{shippingAddress['freight_policy'] ? shippingAddress['freight_policy'] : '-'}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Sales Region</h3>
              <p className="text-black font-medium">{shippingAddress['sales_region'] || 'N/A'}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Shipping Address</h3>
            <p className="text-black font-medium uppercase">
              {shippingAddress['street-address']}, {shippingAddress['locality']}, {shippingAddress['county']}, {shippingAddress['region']}, {shippingAddress['postal-code']}{shippingAddress['zip4'] ? '-' + shippingAddress['zip4'] : ''}, {shippingAddress['country-name']}
            </p>
            <div className="mt-3 rounded-lg overflow-hidden border border-gray-200">
              <iframe
                title="Shipping Address Map"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${shippingAddress['street-address']}, ${shippingAddress['locality']}, ${shippingAddress['county']}, ${shippingAddress['region']}, ${shippingAddress['postal-code']}${shippingAddress['zip4'] ? '-' + shippingAddress['zip4'] : ''}, ${shippingAddress['country-name']}`
                )}&output=embed`}
              ></iframe>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-black mb-2">Communication Defaults</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-300 rounded-lg p-4 flex-1 min-w-0">
                <div className="text-sm text-gray-600 mb-1">Send Order Confirmation Email</div>
                <div className="text-black font-medium">{defaults.order_conf_email ? defaults.order_conf_email : '-'}</div>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 flex-1 min-w-0">
                <div className="text-sm text-gray-600 mb-1">Send Order Confirmation Fax</div>
                <div className="text-black font-medium">{defaults.order_conf_fax ? defaults.order_conf_fax : '-'}</div>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 flex-1 min-w-0">
                <div className="text-sm text-gray-600 mb-1">Send Shipping Notification Email</div>
                <div className="text-black font-medium">{defaults.shipping_email ? defaults.shipping_email : '-'}</div>
              </div>
            </div>
          </div>

          <div className="mb-2">
            <h3 className="text-xl font-medium text-black mb-2">Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
              <div className="text-xs text-gray-600 mb-1">Sales Notes <br /> (FROM SAP Customer Master):</div>
              <div className="text-black font-medium">{defaults.sales_notes ? defaults.sales_notes : '-'}</div>
              </div>
              <div>
              <div className="text-xs text-gray-600 mb-1">Shipping Notes <br /> (FROM SAP Customer Master):</div>
              <div className="text-black font-medium">{defaults.shipping_notes ? defaults.shipping_notes : '-'}</div>
              </div>
              <div>
              <div className="text-xs text-gray-600 mb-1">Driver Notes <br /> (FROM SAP Customer Master):</div>
              <div className="text-black font-medium">{defaults.driver_notes ? defaults.driver_notes : '-'}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
