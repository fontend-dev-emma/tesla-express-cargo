function UpdateShipmentDetailsFormInput({ label, icon: Icon, ...props }) {
  return (
    <div className="space-y-2">
      <label className="block text-xs sm:text-sm font-medium text-gray-400">{label}</label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />}
        <input
          {...props}
          className={`
            w-full ${Icon ? "pl-9 sm:pl-11" : "pl-3 sm:pl-4"} pr-3 sm:pr-4 py-2 sm:py-2.5
            bg-slate-800 border border-slate-700
            rounded-lg sm:rounded-xl
            text-gray-200 placeholder-gray-500
            text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all
          `}
        />
      </div>
    </div>
  );
}
export default UpdateShipmentDetailsFormInput;
