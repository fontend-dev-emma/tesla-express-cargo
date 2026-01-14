"use client";

import { useState } from "react";
import HeaderCard from "./HeaderCard";
import TrackingNumberCard from "./TrackingNumberCard";
import ShipmentImage from "./ShipmentImage";
import ShipmentDetailsCard from "./ShipmentDetailsCard";
import ProgressTimeline from "./ProgressTimeline";

function ShipmentDetails({
  imageUrl,
  trackingNumber,
  status,
  freight,
  toLocation,
  fromLocation,
  senderName,
  receiverName,
  receiverEmail,
  receiverPhone,
  finalDestination,
  estimatedDays,
  currentLocation,
  createdAt,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shipmentData = {
    trackingNumber,
    status,
    senderName,
    receiverName,
    receiverEmail,
    receiverPhone,
    finalDestination,
    currentLocation,
    estimatedDays,
    imageUrl,
    freight,
    toLocation,
    fromLocation,
    createdAt,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shipmentData.trackingNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-10  sm:p-6  lg:px-8  ">
      <div className="max-w-4xl mx-auto">
        <HeaderCard isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />

        {isOpen && (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
            <TrackingNumberCard trackingNumber={shipmentData.trackingNumber} status={shipmentData.status} onCopy={handleCopy} copied={copied} />

            <ShipmentImage imageUrl={shipmentData.imageUrl} alt="Shipment preview" />

            <ShipmentDetailsCard shipmentData={shipmentData} />

            <ProgressTimeline
              fromLocation={shipmentData.fromLocation}
              currentLocation={shipmentData.currentLocation}
              toLocation={shipmentData.toLocation}
              finalDestination={shipmentData.finalDestination}
              status={shipmentData.status}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ShipmentDetails;
