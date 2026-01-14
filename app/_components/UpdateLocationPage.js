"use client";

import AdminShipmentUpdateSection from "@/app/_components/AdminShipmentUpdateSection";
import AdminShipmentView from "@/app/_components/AdminShipmentView";
import FullPageSpinner from "@/app/_components/FullPageSpinner";
import UpdateLocationForm from "@/app/_components/UpdateLocationForm";
import { useShipment } from "@/app/_queryHooks/useShipment";
import { useState } from "react";

function UpdateLocationPage() {
  const [trackingNumber, setTrackingNumber] = useState(null);

  const { shipment, isLoading } = useShipment(trackingNumber);

  const hasShipment = !!shipment;

  return (
    <div className="justify-center flex flex-col items-center">
      <AdminShipmentUpdateSection
        heading="Update Shipment Location"
        trackingNumber={trackingNumber}
        onTrackingNumber={setTrackingNumber}
        isOpen={hasShipment}
        isLoading={isLoading}
      >
        <span>
          {hasShipment ? (
            <AdminShipmentView shipment={shipment} />
          ) : (
            <div className="text-[0.75rem] py-4 sm:text-center">
              {!isLoading ? "Enter a shipment tracking number to view its current status and update the Location." : <FullPageSpinner />}
            </div>
          )}

          {hasShipment && <UpdateLocationForm trackingNumber={trackingNumber} currentStatus={shipment?.status} />}
        </span>
      </AdminShipmentUpdateSection>
    </div>
  );
}

export default UpdateLocationPage;
