"use client";

import { Users } from "lucide-react";
import { useState } from "react";
import { useAllShipments } from "../_queryHooks/useAllShipments";
import CustomerSearch from "./CustomerSearch";
import CustomersEmptyState from "./CustomersEmptyState";
import CustomersTableLoadingState from "./CustomersTableLoadingState";
import CustomersTableRow from "./CustomersTableRow";
import PaginationButtons from "./PaginationButtons";
import TableHeader from "./TableHeader";

function CustomersPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);

  const { allShipments } = useAllShipments();

  const filteredShipments =
    allShipments?.filter((shipment) => {
      if (!query) return true;

      return (
        shipment.receiverName?.toLowerCase().includes(query) ||
        shipment.receiverEmail?.toLowerCase().includes(query) ||
        shipment.finalDestination?.toLowerCase().includes(query) ||
        shipment.status?.toLowerCase().includes(query) ||
        shipment.freight?.toLowerCase().includes(query)
      );
    }) ?? [];

  const total = filteredShipments.length;

  const totalPages = Math.ceil(total / pageSize);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedShipments = filteredShipments?.slice(startIndex, endIndex);

  function handleSearch(searchTerm) {
    setQuery(searchTerm.trim());
    setPage(1);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br rounded-2xl from-slate-950 via-slate-900 to-slate-950 px-4 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              All Customers
            </h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base ml-0 sm:ml-14">Manage and track all customer shipments</p>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
          <CustomerSearch onSearch={handleSearch} />

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full">
              <TableHeader headers={["ID", "Name", "Email", "Phone", "Address", "Status", "Date"]} />
              <tbody>
                {isLoading ? (
                  <CustomersTableLoadingState />
                ) : paginatedShipments?.length === 0 ? (
                  <CustomersEmptyState />
                ) : (
                  paginatedShipments?.map((customer, index) => <CustomersTableRow key={customer.id} index={index + 1} customer={customer} />)
                )}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="mt-6">
              <PaginationButtons page={page} totalPages={totalPages} setPage={setPage} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomersPage;
