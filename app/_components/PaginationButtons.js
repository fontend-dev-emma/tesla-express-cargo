function PaginationButtons({ page, totalPages, setPage }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
      <div className="sm:hidden">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-sm font-semibold text-gray-300">
          Page <span className="text-blue-400">{page}</span> of <span className="text-gray-400">{totalPages || 1}</span>
        </span>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <button
          disabled={page <= 1}
          onClick={() => setPage((p) => p - 1)}
          className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-slate-800 disabled:hover:border-slate-700 disabled:hover:shadow-none"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 group-disabled:translate-x-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Previous</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-xl">
          <span className="text-sm font-medium text-gray-400">Page</span>
          <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{page}</span>
          <span className="text-sm font-medium text-gray-500">of</span>
          <span className="text-lg font-bold text-gray-400">{totalPages || 1}</span>
        </div>

        <button
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 border border-blue-500/50 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-white transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 disabled:opacity-40 disabled:cursor-not-allowed disabled:from-slate-700 disabled:to-slate-700 disabled:border-slate-600 disabled:shadow-none"
        >
          <span>Next</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-disabled:translate-x-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PaginationButtons;
