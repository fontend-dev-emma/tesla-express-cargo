import { Copy } from "lucide-react";
import StatusBadge from "./StatusBadge";

function TrackingNumberCard({ trackingNumber, status, onCopy, copied }) {
  return (
    <div className="bg-gradient-to-br from-teal-900/20 to-slate-900/50 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-teal-700/30 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-xs text-slate-500 mb-1">Tracking Number</p>
          <p className="text-lg sm:text-xl font-bold text-teal-400 font-mono break-all">{trackingNumber}</p>
        </div>
        <button
          onClick={onCopy}
          className="self-start sm:self-center flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 transition-all text-sm font-medium text-slate-300"
        >
          <Copy className="w-4 h-4" />
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="mt-4">
        <StatusBadge status={status} />
      </div>
    </div>
  );
}

export default TrackingNumberCard;
