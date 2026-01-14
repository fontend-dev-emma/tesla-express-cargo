function StatusBadge({ status }) {
  const statusConfig = {
    pending: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", dot: "bg-amber-500" },
    processing: { bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/20", dot: "bg-teal-500" },
    "in transit": { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", dot: "bg-purple-500" },
    out: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20", dot: "bg-cyan-500" },
    "at custom": { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20", dot: "bg-orange-500" },
    "on hold": { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20", dot: "bg-red-500" },
    delivered: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", dot: "bg-emerald-500" },
    cancelled: { bg: "bg-slate-500/10", text: "text-slate-400", border: "border-slate-500/20", dot: "bg-slate-500" },
  };

  const config = statusConfig[status.toLowerCase()] || statusConfig.pending;

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${config.bg} ${config.border}`}>
      <span className={`w-2 h-2 rounded-full ${config.dot} animate-pulse`}></span>
      <span className={`text-sm font-semibold capitalize ${config.text}`}>{status}</span>
    </div>
  );
}

export default StatusBadge;
