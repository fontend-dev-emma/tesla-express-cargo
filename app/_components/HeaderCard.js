import { ChevronDown, Radar, X } from "lucide-react";

function HeaderCard({ isOpen, onToggle }) {
  return (
    <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-slate-700/50 shadow-2xl mb-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
          <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-teal-900/30 flex items-center justify-center border border-teal-700/30">
            <Radar className="w-6 h-6 sm:w-7 sm:h-7 text-teal-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-xl font-bold text-slate-100 truncate">Shipment Tracking</h2>
            <p className="text-xs sm:text-sm text-slate-400">Track your package in real-time</p>
          </div>
        </div>

        <button onClick={onToggle} className="flex-shrink-0 p-2 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group">
          {isOpen ? (
            <X className="w-6 h-6 text-slate-400 group-hover:text-slate-200 transition-colors" />
          ) : (
            <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-slate-200 transition-colors" />
          )}
        </button>
      </div>
    </div>
  );
}

export default HeaderCard;
