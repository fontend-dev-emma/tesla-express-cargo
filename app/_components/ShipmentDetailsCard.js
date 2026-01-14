import { Package } from "lucide-react";
import ContactInfoSection from "./ContactInfoSection";
import SectionDivider from "./SectionDivider";
import LocationInfoSection from "./LocationInfoSection";
import ShippingInfoSection from "./ShippingInfoSection";

function ShipmentDetailsCard({ shipmentData }) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-slate-700/50 shadow-xl">
      <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
        <Package className="w-5 h-5 text-teal-400" />
        Shipment Information
      </h3>

      <ContactInfoSection
        senderName={shipmentData.senderName}
        receiverName={shipmentData.receiverName}
        receiverEmail={shipmentData.receiverEmail}
        receiverPhone={shipmentData.receiverPhone}
      />

      <SectionDivider title="Location Details" />

      <LocationInfoSection
        fromLocation={shipmentData.fromLocation}
        toLocation={shipmentData.toLocation}
        currentLocation={shipmentData.currentLocation}
        finalDestination={shipmentData.finalDestination}
      />

      <SectionDivider title="Shipping Details" />

      <ShippingInfoSection freight={shipmentData.freight} estimatedDays={shipmentData.estimatedDays} createdAt={shipmentData.createdAt} />
    </div>
  );
}

export default ShipmentDetailsCard;
