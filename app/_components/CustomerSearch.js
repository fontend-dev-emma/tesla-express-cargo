"use client";

import { Search } from "lucide-react";
import { useState } from "react";

function CustomerSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <div className="mb-6">
      <div className="relative max-w-md">
        <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, email, or phone..."
          className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-slate-800 border border-slate-700 rounded-lg sm:rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all"
        />
        <button
          onClick={handleSubmit}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-xs sm:text-sm font-medium rounded-lg transition-all"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default CustomerSearch;
