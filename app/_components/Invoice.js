import { Inter } from "next/font/google";
import InvoiceContactInfomation from "./InvoiceContactInfomation";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceShipmentDetails from "./InvoiceShipmentDetails";
import InvoiceShipmentUpdates from "./InvoiceShipmentUpdates";
import InvoiceTrackingSection from "./InvoiceTrackingSection";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

function Invoice({ trackingNumber }) {
  return (
    <div
      className={`max-w-6xl mx-auto bg-whiteshadow-xl shadow rounded-2xl overflow-hidden border border-gray-100 bg-[#f9f9f9] ${inter.className}`}
      id="invoice"
    >
      <InvoiceHeader />

      <InvoiceTrackingSection trackingNumber={trackingNumber} />

      <InvoiceShipmentDetails trackingNumber={trackingNumber} />

      <InvoiceContactInfomation trackingNumber={trackingNumber} />

      <InvoiceShipmentUpdates trackingNumber={trackingNumber} />

      <div className="px-6 sm:px-10 py-4 bg-gray-50 text-center text-xs sm:text-sm text-gray-400 border-t border-gray-100">
        Generated automatically by Tesla Express Cargo System &copy; 2025
      </div>
    </div>
  );
}

export default Invoice;
