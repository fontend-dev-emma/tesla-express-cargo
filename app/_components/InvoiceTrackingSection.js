import { getShipment } from "../_lib/data-service";
import { getStatusStyle } from "../_utils/helpers";

async function InvoiceTrackingSection({ trackingNumber }) {
  const shipment = await getShipment(trackingNumber);

  const { color, dot } = getStatusStyle(shipment?.status);

  return (
    <div className="px-6  sm:px-10 py-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center capitalize gap-4 sm:gap-0">
      <div>
        <p className="text-sm sm:text-base text-gray-400">Tracking Number</p>
        <p className="text-lg sm:text-xl font-bold text-gray-800 ">{trackingNumber}</p>
      </div>
      <div>
        <span className={`px-4 py-1.5 rounded-full text-sm sm:text-base font-semibold  text-center shadow ${color} `}>{shipment?.status}</span>
      </div>
    </div>
  );
}

export default InvoiceTrackingSection;
