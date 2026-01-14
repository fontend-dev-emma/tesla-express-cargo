import { Plane, Ship, Train, Truck } from "lucide-react";
import { StatusBadge } from "../_utils/helpers";

function TableRow({ shipment, index }) {
  const freightIcons = {
    air: Plane,
    sea: Ship,
    road: Truck,
    express: Train,
  };

  const FreightIcon = freightIcons[shipment.freight] || Plane;

  return (
    <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-400 whitespace-nowrap ">{index}</td>
      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-blue-400   font-medium whitespace-nowrap">
        <span className="bg-white/5 px-3 py-2 rounded-lg font-mono ">{shipment.trackingNumber}</span>
      </td>
      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-300 whitespace-nowrap font-mono">{shipment.receiverName}</td>
      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-400 whitespace-nowrap font-mono">{shipment.currentLocation}</td>
      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-400 whitespace-nowrap font-mono">{shipment.fromLocation}</td>
      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-400 whitespace-nowrap font-mono">{shipment.toLocation}</td>
      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap">
        <div className="flex items-center gap-2 text-gray-300">
          <FreightIcon className="w-4 h-4 text-blue-400 " />
          <span className="text-xs sm:text-sm capitalize font-mono">{shipment.freight}</span>
        </div>
      </td>
      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap">
        <StatusBadge status={shipment.status} />
      </td>
      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-400 whitespace-nowrap font-mono">{shipment.receiverEmail}</td>
      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-400 whitespace-nowrap font-mono">
        {shipment.date} at {shipment.time}
      </td>
    </tr>
  );
}
export default TableRow;
