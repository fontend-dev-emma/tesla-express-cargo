function PaginationButtons({ page, totalPages, setPage }) {
  return (
    <div className="flex justify-center text-[0.7rem] sm:text-[0.85rem] text-white/75 mt-8 gap-2">
      <button
        disabled={page <= 1}
        onClick={() => setPage((p) => p - 1)}
        className={`px-3 sm:px-8 py-1 sm:py-2 border bg-gray-900 rounded ${page <= 1 ? "bg-gray-500 text-black/45" : ""}`}
      >
        Previous
      </button>

      <span className="px-4 py-2 sm:px-8   justify-center">
        {page} / {totalPages || 1}
      </span>

      <button
        disabled={page >= totalPages}
        onClick={() => setPage((p) => p + 1)}
        className={`px-3 sm:px-8 py-1 sm:py-2 border bg-gray-900 rounded  ${page >= totalPages ? "bg-gray-500 text-black/45" : ""}`}
      >
        Next
      </button>
    </div>
  );
}

export default PaginationButtons;
