import { format } from "date-fns";
import { generateShipmentRef } from "../_utils/helpers";

function InvoiceHeader() {
  const today = new Date();
  const formattedDate = format(today, "MMM, dd, yyyy").toLowerCase();
  const shipmentRef = generateShipmentRef();

  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-6 sm:px-10 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">Tesla Express Cargo</h1>
        <p className="text-xs sm:text-sm opacity-90">Your trusted logistics partner</p>
      </div>
      <div className="text-left sm:text-right">
        <p className="text-sm sm:text-base font-medium bg-white/20 px-3 py-1 rounded-xl">Invoice {shipmentRef}</p>
        <p className="text-xs sm:text-sm opacity-85 mt-1 capitalize">Issued: {formattedDate}</p>
      </div>
    </div>
  );
}

export default InvoiceHeader;
