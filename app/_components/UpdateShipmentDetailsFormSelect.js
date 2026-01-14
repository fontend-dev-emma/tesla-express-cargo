function UpdateShipmentDetailsFormSelect({ label, icon: Icon, options = [], ...props }) {
  return (
    <div className="space-y-2">
      <label className="block text-xs sm:text-sm font-medium text-gray-400">{label}</label>

      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500 pointer-events-none" />}

        <select
          {...props}
          className={`
            w-full appearance-none
            ${Icon ? "pl-9 sm:pl-11" : "pl-3 sm:pl-4"} pr-10
            py-2 sm:py-2.5
            bg-slate-800 border border-slate-700
            rounded-lg sm:rounded-xl
            text-gray-200
            text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all
          `}
        >
          <option value="" disabled>
            Select shipment method
          </option>

          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export default UpdateShipmentDetailsFormSelect;
