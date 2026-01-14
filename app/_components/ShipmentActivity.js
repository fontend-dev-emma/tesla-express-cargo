import { format } from "date-fns";
import { Clock, MapPin, Package } from "lucide-react";
import { getStatusStyle } from "../_utils/helpers";

function ShipmentActivity({ update }) {
  const { message, freight, port, createdAt, status } = update;

  const formattedDate = format(new Date(createdAt), "MMM dd, yyyy");
  const formattedTime = format(new Date(createdAt), "h:mm a");
  const { dot, color } = getStatusStyle(status);

  const freightIcons = {
    air: "✈️",
    sea: "🚢",
    road: "🚛",
    express: "🚂",
  };

  return (
    <div className="relative pt-4">
      <div className="flex gap-4 sm:gap-6">
        <div className="flex flex-col items-center gap-2 pt-1">
          <div className="relative">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></div>
          </div>
          <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-500/50 to-transparent min-h-[80px]"></div>
        </div>

        <div className="flex-1 pb-8">
          <div className="mb-3 sm:mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <p className="text-sm sm:text-base font-semibold text-gray-200">{message}</p>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${color} self-start sm:self-auto`}>
                <span className={`w-2 h-2 rounded-full ${dot} animate-pulse`}></span>
                <span className="capitalize whitespace-nowrap">{status}</span>
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{formattedDate}</span>
              <span className="text-gray-600">•</span>
              <span>{formattedTime}</span>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg sm:rounded-xl p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">{port}</span>
              </div>

              <div className="hidden sm:block w-px h-5 bg-slate-700"></div>

              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-lg">{freightIcons[freight?.toLowerCase()] || "📦"}</span>
                <span className="text-gray-300 capitalize">{freight} Freight</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShipmentActivity;
