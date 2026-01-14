function CreateFeedbackFormSelect({ label, value, onChange, children, ...props }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm sm:text-base font-medium text-gray-300">{label}</label>
      <div className="relative">
        <select
          {...props}
          value={value}
          onChange={onChange}
          className={`
            w-full pl-4 pr-10 py-2.5 sm:py-3
            bg-gray-900 backdrop-blur-sm
            border border-gray-600
            rounded-lg sm:rounded-xl
            text-gray-200
            text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200
            hover:border-slate-600
            appearance-none
            cursor-pointer
          `}
        >
          {children}
        </select>
        <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CreateFeedbackFormSelect;
