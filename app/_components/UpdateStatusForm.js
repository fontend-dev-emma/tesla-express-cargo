"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useUpdateShipmentStatus } from "../_queryHooks/useUpdateShipmentStatus";
import { MiniSpinner } from "./MiniSpinner";
import { RefreshCw } from "lucide-react";

function UpdateStatusForm({ trackingNumber, currentStatus }) {
  const [isLoading, setIsLoading] = useState(false);
  const [newStatus, setNewStatus] = useState(currentStatus);

  const { updateShipmentStatusAsync } = useUpdateShipmentStatus();

  async function handleUpdate(e) {
    e.preventDefault();

    if (!newStatus) {
      toast.error("Please select a status");
      return;
    }

    setIsLoading(true);

    try {
      const res = await updateShipmentStatusAsync({ trackingNumber: trackingNumber.trim(), newStatus: newStatus.trim() });

      if (!res.success) {
        toast.error(res.error || "Failed to update shipment status!");
        setIsLoading(false);
        return;
      }

      toast.success("Shipment status updated successfully!");
      setNewStatus("pending");
    } catch (err) {
      toast.error("Failed to update shipment status");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 mt-6">
      <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-4 sm:mb-6">Update Status</h3>

      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-end">
        <div className="flex-1 space-y-2">
          <label htmlFor="status" className="block text-xs sm:text-sm font-medium text-gray-400">
            New Status
          </label>
          <div className="relative">
            <select
              name="status"
              id="status"
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 sm:py-3 bg-slate-800 border border-slate-700 rounded-lg sm:rounded-xl text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all appearance-none cursor-pointer"
            >
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="in transit">In Transit</option>
              <option value="out">Out</option>
              <option value="at custom">At Custom</option>
              <option value="on hold">On Hold</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleUpdate}
          disabled={isLoading}
          className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <MiniSpinner />
              <span>Updating...</span>
            </>
          ) : (
            <>
              <RefreshCw className="w-4 h-4" />
              <span>Update Status</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default UpdateStatusForm;
