"use client";

import { MiniSpinner } from "@/app/_components/MiniSpinner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAllShipments } from "../_queryHooks/useAllShipments";
import { Search, Package } from "lucide-react";

function ShipmentVerificationPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");

  const { allShipments } = useAllShipments();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!value.trim()) {
      toast.error("Please enter a tracking number or email");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 200));

      const foundShipment = allShipments?.find(
        (s) =>
          s.trackingNumber.toUpperCase() === value.trim().toUpperCase() ||
          (s.receiverEmail && s.receiverEmail.toLowerCase() === value.trim().toLowerCase())
      );

      if (foundShipment) {
        toast.success("Shipment found! Redirecting...");
        await new Promise((resolve) => setTimeout(resolve, 300));
        router.push(`/admin/shipments/update-details/${foundShipment.trackingNumber}`);
      } else {
        toast.error("No matching shipment found!");
        setValue("");
        setIsLoading(false);
      }
    } catch (err) {
      toast.error("An error occurred.");
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center  ">
      <div className="w-full max-w-md sm:max-w-lg">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Package className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
          </div>

          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 sm:mb-3">
              Verify Shipment
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm lg:text-base">Enter tracking number or receiver email to verify shipment details</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
              <input
                name="inputValue"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter Tracking Number or Email"
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-slate-800 border border-slate-700 rounded-lg sm:rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all"
                required
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <MiniSpinner />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Verify Shipment</span>
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-center text-sm">{error}</p>
            </div>
          )}
        </div>

        <p className="text-center text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6">Make sure to enter the correct tracking number or email address</p>
      </div>
    </div>
  );
}

export default ShipmentVerificationPage;
