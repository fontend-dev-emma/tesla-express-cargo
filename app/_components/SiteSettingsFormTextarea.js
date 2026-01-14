function SiteSettingsFormTextarea({ label, icon: Icon, ...props }) {
  return (
    <div className="space-y-1.5 sm:space-y-2">
      <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-300">{label}</label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-2.5 sm:left-3 lg:left-4 top-2.5 sm:top-3 lg:top-3.5 w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 text-gray-500" />
        )}
        <textarea
          {...props}
          className={`
            w-full 
            ${Icon ? "pl-8 sm:pl-10 lg:pl-12" : "pl-3 sm:pl-4 lg:pl-4"} 
            pr-3 sm:pr-4 lg:pr-4
            py-2 sm:py-2.5 lg:py-3
            bg-slate-800 border border-slate-700
            rounded-lg sm:rounded-xl lg:rounded-xl
            text-gray-200 placeholder-gray-500
            text-xs sm:text-sm lg:text-base
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all
            resize-none
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        />
      </div>
    </div>
  );
}

export default SiteSettingsFormTextarea;
