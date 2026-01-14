function AdminSendEmailInputField({ label, id, placeholder, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 text-xs sm:text-sm font-semibold text-gray-400">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 sm:px-4 py-2.5 bg-black/5 border border-gray-600 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
    </div>
  );
}

export default AdminSendEmailInputField;
