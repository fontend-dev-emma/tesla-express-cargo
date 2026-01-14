import PulseIndicator from "./PulseIndicator";

function InfoRow({ icon: Icon, label, value, valueClassName = "", showPulse = false }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-800/30 transition-colors group">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
        <Icon className="w-4 h-4 text-slate-400" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-slate-500 mb-0.5">{label}</p>
        <p className={`text-sm font-medium break-words flex items-center gap-2 ${valueClassName}`}>
          {value}
          {showPulse && <PulseIndicator />}
        </p>
      </div>
    </div>
  );
}

export default InfoRow;
