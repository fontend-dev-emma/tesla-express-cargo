"use client";

import { Search } from "lucide-react";
import { useState } from "react";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6 md:mb-8 md:mx-6 lg:mx-12 xl:mx-28">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-3 py-2 text-[0.85rem] border border-white/70 rounded bg-white/20 text-white/75 focus:outline-none"
      />
      <button type="submit" className=" text-white rounded hover:text-gray-900">
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
}

export default SearchForm;
