function AdminShipmentView({ shipment } = {}) {
  const { senderName, receiverName, currentLocation, status, trackingNumber } = shipment || {};

  return (
    <div className="bg-slate-900/50 font-mono backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2 ">
          <p className="text-xs sm:text-sm font-medium text-gray-400 ">Tracking ID</p>
          <p className="text-sm sm:text-base text-blue-400 font-semibold">{trackingNumber}</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs sm:text-sm font-medium text-gray-400">Sender</p>
          <p className="text-sm sm:text-base text-gray-200">{senderName}</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs sm:text-sm font-medium text-gray-400">Receiver</p>
          <p className="text-sm sm:text-base text-gray-200">{receiverName}</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs sm:text-sm font-medium text-gray-400">Current Location</p>
          <p className="text-sm sm:text-base text-gray-200">{currentLocation}</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs sm:text-sm font-medium text-gray-400">Status</p>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/30">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AdminShipmentView;
