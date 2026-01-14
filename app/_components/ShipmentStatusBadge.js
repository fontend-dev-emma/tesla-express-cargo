function ShipmentStatusBadge({ status }) {
  const colorMap = {
    pending: "from-amber-400 via-amber-300 to-amber-400",
    processing: "from-teal-400 via-teal-300 to-teal-400",
    "in transit": "from-purple-400 via-purple-300 to-purple-400",
    out: "from-cyan-400 via-cyan-300 to-cyan-400",
    "at custom": "from-orange-400 via-orange-300 to-orange-400",
    "on hold": "from-red-400 via-red-300 to-red-400",
    delivered: "from-emerald-400 via-emerald-300 to-emerald-400",
    cancelled: "from-slate-400 via-slate-300 to-slate-400",
    default: "from-slate-400 via-slate-300 to-slate-400",
  };

  const normalizedStatus = status?.toLowerCase() || "default";
  const gradient = colorMap[normalizedStatus] || colorMap.default;

  return (
    <p className="relative text-white text-center text-xl font-medium px-6 py-3 rounded-3xl overflow-hidden capitalize">
      <span className="relative z-10">{status}</span>
      <span className={`absolute inset-0 bg-gradient-to-r ${gradient} bg-[length:200%_100%] animate-shimmer`}></span>
    </p>
  );
}

export default ShipmentStatusBadge;
