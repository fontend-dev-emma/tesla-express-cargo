import { CheckCircle2 } from "lucide-react";

function TimelineStep({ label, location, active, completed }) {
  return (
    <div className="flex items-start gap-4 relative">
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 transition-all ${
          completed ? "bg-teal-600 border-teal-600" : active ? "bg-slate-900 border-teal-600 animate-pulse" : "bg-slate-900 border-slate-700"
        }`}
      >
        {completed && <CheckCircle2 className="w-4 h-4 text-white" />}
        {active && !completed && <div className="w-2 h-2 rounded-full bg-teal-500"></div>}
      </div>
      <div className="flex-1 pt-1">
        <p className={`text-sm font-semibold ${active || completed ? "text-slate-200" : "text-slate-500"}`}>{label}</p>
        <p className="text-xs text-slate-500 mt-0.5">{location}</p>
      </div>
    </div>
  );
}

export default TimelineStep;
