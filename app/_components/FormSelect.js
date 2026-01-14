function FormSelect({ label, name, value, onChange, disabled, options, icon: Icon }) {
  return (
    <div className="relative">
      <label className="block text-xs font-medium text-slate-400 mb-1.5">{label}</label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />}
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full ${
            Icon ? "pl-10" : "pl-4"
          } pr-4 py-3 bg-slate-800/50 text-slate-200 rounded-lg border border-slate-700/50 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 focus:outline-none transition-all appearance-none cursor-pointer text-sm`}
          disabled={disabled}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-slate-800">
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default FormSelect;
