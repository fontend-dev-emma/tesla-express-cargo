"use client";

import { useState } from "react";
import toast from "react-hot-toast";

function AdminShipmentUpdateSection({ heading, onSearch, children, isLoading, onTrackingNumber }) {
  const [id, setId] = useState("");

  async function HandleSearch(e) {
    e.preventDefault();

    if (!id.trim()) {
      toast.error("Fill in the tracking Number!");
      return;
    }

    onTrackingNumber(id.trim());
  }

  return (
    <section className="px-4 py-8 sm:px-10 md:px-16 lg:py-12 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-center mb-6 sm:mb-8">
        {heading}
      </h1>

      <div className="max-w-2xl mx-auto mb-8 sm:mb-10">
        <form onSubmit={HandleSearch} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={id}
              name="trackingNumber"
              onChange={(e) => setId(e.target.value)}
              className="flex-1 px-4 py-2.5 sm:py-3 bg-slate-800 border border-slate-700 rounded-lg sm:rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all"
              placeholder="Enter Tracking Number"
              required
            />
            <button
              type="submit"
              onClick={onSearch}
              disabled={isLoading}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isLoading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>
      </div>

      <div>{children}</div>
    </section>
  );
}

export default AdminShipmentUpdateSection;
