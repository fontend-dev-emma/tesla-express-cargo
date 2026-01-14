"use client";

import AdminShipmentUpdateSection from "@/app/_components/AdminShipmentUpdateSection";
import AdminShipmentView from "@/app/_components/AdminShipmentView";
import FullPageSpinner from "@/app/_components/FullPageSpinner";
import UpdateStatusForm from "@/app/_components/UpdateStatusForm";
import { useState } from "react";
import { useShipment } from "../_queryHooks/useShipment";

function UpdateStatusPage() {
  const [trackingNumber, setTrackingNumber] = useState(null);
  const { shipment, isLoading } = useShipment(trackingNumber);

  const hasShipment = !!shipment;

  return (
    <div className="justify-center flex flex-col items-center">
      <AdminShipmentUpdateSection
        heading="Update Shipment Status"
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
              {!isLoading ? "Enter a shipment tracking number to view current status and update the Status." : <FullPageSpinner />}
            </div>
          )}

          {hasShipment && <UpdateStatusForm trackingNumber={trackingNumber} currentStatus={shipment?.status} />}
        </span>
      </AdminShipmentUpdateSection>
    </div>
  );
}

export default UpdateStatusPage;
