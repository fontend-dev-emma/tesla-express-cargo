"use client";

import { Filter, Plane, Ship, Train, Truck, X } from "lucide-react";
import { EmptyState, formatDateAndTime, LoadingState, Pagination } from "../_utils/helpers";
import FilterButton from "./FilterButton";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import SearchInput from "./SearchInput";
import { useState } from "react";
import { useAllShipments } from "../_queryHooks/useAllShipments";

function ShipmentsTable({ heading }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [freightFilter, setFreightFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading] = useState(false);
  const itemsPerPage = 10;

  const { allShipments } = useAllShipments();

  const formattedShipments = allShipments?.map((tx) => ({
    ...tx,
    ...formatDateAndTime(tx.createdAt),
  }));

  const filteredShipments = formattedShipments?.filter((shipment) => {
    const matchesSearch =
      searchQuery === "" ||
      shipment.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shipment.receiverName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shipment.receiverEmail.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFreight = freightFilter === "all" || shipment.freight === freightFilter;
    const matchesStatus = statusFilter === "all" || shipment.status === statusFilter;

    return matchesSearch && matchesFreight && matchesStatus;
  });

  const totalPages = Math.ceil(filteredShipments?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedShipments = filteredShipments?.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterChange = (filterType, value) => {
    setCurrentPage(1);
    if (filterType === "freight") setFreightFilter(value);
    if (filterType === "status") setStatusFilter(value);
  };

  const activeFiltersCount = (freightFilter !== "all" ? 1 : 0) + (statusFilter !== "all" ? 1 : 0);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            {heading}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">Track and manage all your shipments in one place</p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6">
          <div className="mb-4 sm:mb-6">
            <SearchInput
              value={searchQuery}
              onChange={(value) => {
                setSearchQuery(value);
                setCurrentPage(1);
              }}
              placeholder="Search by tracking ID, name, or email..."
            />
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4 text-gray-400" />
                <label className="text-xs sm:text-sm font-medium text-gray-400">Freight Type</label>
              </div>
              <div className="flex flex-wrap gap-2">
                <FilterButton active={freightFilter === "all"} onClick={() => handleFilterChange("freight", "all")}>
                  All
                </FilterButton>
                <FilterButton active={freightFilter === "air"} onClick={() => handleFilterChange("freight", "air")} icon={Plane}>
                  Air
                </FilterButton>
                <FilterButton active={freightFilter === "sea"} onClick={() => handleFilterChange("freight", "sea")} icon={Ship}>
                  Sea
                </FilterButton>
                <FilterButton active={freightFilter === "road"} onClick={() => handleFilterChange("freight", "road")} icon={Truck}>
                  Road
                </FilterButton>
                <FilterButton active={freightFilter === "express"} onClick={() => handleFilterChange("freight", "express")} icon={Train}>
                  Express
                </FilterButton>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4 text-gray-400" />
                <label className="text-xs sm:text-sm font-medium text-gray-400">Status</label>
              </div>
              <div className="flex flex-wrap gap-2">
                <FilterButton active={statusFilter === "all"} onClick={() => handleFilterChange("status", "all")}>
                  All
                </FilterButton>
                <FilterButton active={statusFilter === "pending"} onClick={() => handleFilterChange("status", "pending")}>
                  Pending
                </FilterButton>
                <FilterButton active={statusFilter === "processing"} onClick={() => handleFilterChange("status", "processing")}>
                  Processing
                </FilterButton>
                <FilterButton active={statusFilter === "in transit"} onClick={() => handleFilterChange("status", "in transit")}>
                  In Transit
                </FilterButton>
                <FilterButton active={statusFilter === "delivered"} onClick={() => handleFilterChange("status", "delivered")}>
                  Delivered
                </FilterButton>
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs text-gray-500">
                  {activeFiltersCount} filter{activeFiltersCount > 1 ? "s" : ""} active
                </span>
                <button
                  onClick={() => {
                    setFreightFilter("all");
                    setStatusFilter("all");
                    setCurrentPage(1);
                  }}
                  className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <TableHeader headers={["ID", "Tracking Number", "Customer", "Location", "From", "To", "Freight", "Status", "Email", "Date"]} />
              <tbody>
                {isLoading ? (
                  <LoadingState />
                ) : paginatedShipments?.length === 0 ? (
                  <EmptyState />
                ) : (
                  paginatedShipments?.map((shipment, index) => <TableRow key={shipment.trackingNumber} index={index + 1} shipment={shipment} />)
                )}
              </tbody>
            </table>
          </div>

          <div className="border-t border-slate-800 p-4 sm:p-6">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShipmentsTable;
