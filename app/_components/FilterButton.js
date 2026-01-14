function FilterButton({ active, onClick, children, icon: Icon }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all
        ${
          active
            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
            : "bg-slate-800 text-gray-400 border border-slate-700 hover:border-blue-500 hover:text-blue-400"
        }
      `}
    >
      {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
      {children}
    </button>
  );
}

export default FilterButton;
