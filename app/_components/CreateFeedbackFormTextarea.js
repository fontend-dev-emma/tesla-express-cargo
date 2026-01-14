function CreateFeedbackFormTextarea({ label, icon: Icon, value, onChange, ...props }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm sm:text-base font-medium text-gray-300">{label}</label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 sm:left-4 top-3 sm:top-4 w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />}
        <textarea
          {...props}
          value={value}
          onChange={onChange}
          className={`
            w-full ${Icon ? "pl-10 sm:pl-12" : "pl-4"} pr-4 py-.5 sm:py-3
            bg-gray-900 backdrop-blur-sm
            border border-gray-600
            rounded-lg sm:rounded-xl
            text-gray-200 placeholder-gray-500
            text-sm 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200
            hover:border-slate-600
            resize-none
          `}
        />
      </div>
    </div>
  );
}

export default CreateFeedbackFormTextarea;
