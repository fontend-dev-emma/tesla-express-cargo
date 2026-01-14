function FormInput({ label, name, type = "text", placeholder, value, onChange, disabled, icon: Icon, required = true }) {
  return (
    <div className="relative">
      <label className="block text-xs font-medium text-slate-400 mb-1.5">{label}</label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />}
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full ${
            Icon ? "pl-10" : "pl-4"
          } pr-4 py-3 bg-slate-800/50 text-slate-200 placeholder-slate-500 rounded-lg border border-slate-700/50 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 focus:outline-none transition-all text-sm`}
          disabled={disabled}
          required={required}
        />
      </div>
    </div>
  );
}

export default FormInput;
