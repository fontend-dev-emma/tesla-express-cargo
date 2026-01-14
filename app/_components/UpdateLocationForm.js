"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useUpdateShipmentLocation } from "../_queryHooks/useUpdateShipmentLocation";
import { MiniSpinner } from "./MiniSpinner";
import { getLocationInfo } from "../_utils/helpers";
import { useCreateShipmentRoute } from "../_queryHooks/useCreateShipmentRoute";

function UpdateLocationForm({ trackingNumber, currentStatus }) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");

  const { updateShipmentLocationAsync } = useUpdateShipmentLocation();
  const { submitRouteAsync } = useCreateShipmentRoute(trackingNumber);

  async function handleUpdate(e) {
    e.preventDefault();

    if (!currentLocation) {
      toast.error("Fill new location input field");
      return;
    }

    setIsLoading(true);

    try {
      const tn = trackingNumber.trim();
      const loc = currentLocation.trim();

      const locationInfoResponse = await getLocationInfo(loc);
      if (!locationInfoResponse.success) {
        toast.error("Failed to get location information. Try again!");
        return;
      }

      const { name, lat, lng } = locationInfoResponse.data;
      const newRoute = { name, lat, lng, trackingNumber: tn, status: currentStatus };

      const res = await updateShipmentLocationAsync({ trackingNumber: tn, newLocation: loc });
      if (!res.success) {
        toast.error(res.error || "Failed to update shipment location!");
        return;
      }

      await submitRouteAsync(newRoute);

      toast.success("Shipment current location updated!");
      setCurrentLocation("");
    } catch (err) {
      toast.error("Failed to update location");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 mt-6">
      <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-4 sm:mb-6">Update Location</h3>

      <form onSubmit={handleUpdate} className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-end">
        <div className="flex-1 space-y-2">
          <label htmlFor="currentLocation" className="block text-xs sm:text-sm font-medium text-gray-400">
            New Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
            <input
              type="text"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
              name="currentLocation"
              id="currentLocation"
              className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-slate-800 border border-slate-700 rounded-lg sm:rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all"
              placeholder="e.g. Paris, France"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <MiniSpinner />
              <span>Updating...</span>
            </>
          ) : (
            "Update Location"
          )}
        </button>
      </form>
    </div>
  );
}

export default UpdateLocationForm;
