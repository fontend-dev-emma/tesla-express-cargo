function CreateFeedbackFormInput({ label, icon: Icon, value, onChange, ...props }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm sm:text-base font-medium text-gray-300">{label}</label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />}
        <input
          {...props}
          value={value}
          onChange={onChange}
          className={`
            w-full ${Icon ? "pl-10 sm:pl-12" : "pl-4"} pr-4 py-2.5 sm:py-3
            bg-gray-900 backdrop-blur-sm
            border border-gray-600
            rounded-lg sm:rounded-xl
            text-gray-200 placeholder-gray-500
            text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200
            hover:border-slate-600
          `}
        />
      </div>
    </div>
  );
}

export default CreateFeedbackFormInput;
