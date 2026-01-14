import { getShipmentUpdates } from "../_lib/data-service";
import ShipmentActivity from "./ShipmentActivity";

async function InvoiceShipmentUpdates({ trackingNumber }) {
  const updates = await getShipmentUpdates(trackingNumber);

  return (
    <div className="px-6 sm:px-10 md:px-16 py-6 border-t border-gray-100">
      <h2 className="font-semibold text-gray-700 mb-4 text-sm sm:text-base">Shipment Updates</h2>
      <div className="bg-white/15 px-4 divide-y divide-teal-500 divide-dashed my-6 shadow rounded-2xl">
        {updates.map((update) => (
          <ShipmentActivity key={update.id} update={update} />
        ))}
      </div>
    </div>
  );
}

export default InvoiceShipmentUpdates;
