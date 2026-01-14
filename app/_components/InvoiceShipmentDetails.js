import { addDays, format } from "date-fns";
import { formatNumber } from "../_utils/helpers";
import { getShipment } from "../_lib/data-service";

async function InvoiceShipmentDetails({ trackingNumber }) {
  const { fromLocation, toLocation, freight, shipmentCost, weight, createdAt } = await getShipment(trackingNumber);

  const estimatedDate = addDays(new Date(createdAt), 3);
  const RealDate = format(new Date(createdAt), "MMM, dd, yyyy");
  const formattedDate = format(new Date(estimatedDate), "MMM, dd, yyyy");
  const formattedTime = format(new Date(estimatedDate), "h:mm a");

  return (
    <div className="px-4 sm:px-8 font-bold  py-6 bg-black/5 rounded-xl capitalize shadow-sm">
      <h2 className="font-bold mb-4 text-[1.2rem] sm:text-lg">Shipment Details</h2>

      <div className="grid grid-cols-1 text-gray-600 sm:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-8 text-sm sm:text-base">
        <p className=" sm:space-x-2">
          <span className="text-gray-400 block sm:inline">Origin:</span>
          <span>{fromLocation}</span>
        </p>
        <p className=" sm:space-x-2">
          <span className="text-gray-400 block sm:inline">Destination:</span>
          <span>{toLocation}</span>
        </p>
        <p className=" sm:space-x-2">
          <span className="text-gray-400 block sm:inline">Freight Type:</span>
          <span>{freight} Freight</span>
        </p>
        <p className=" sm:space-x-2">
          <span className="text-gray-400 block sm:inline">Shipment Cost:</span>
          <span>${formatNumber(shipmentCost)} USD</span>
        </p>
        <p className=" sm:space-x-2">
          <span className="text-gray-400 block sm:inline">Weight:</span>
          <span>{formatNumber(weight, false)}kg</span>
        </p>
        <p className=" sm:space-x-2">
          <span className="text-gray-400 block sm:inline">Estimated Delivery:</span>
          <span>{formattedDate}</span>
        </p>
        <p className=" sm:space-x-2">
          <span className="text-gray-400 block sm:inline">Delivery Time:</span>
          <span>{formattedTime}</span>
        </p>
      </div>
    </div>
  );
}

export default InvoiceShipmentDetails;
