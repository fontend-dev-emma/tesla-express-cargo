function UpdateShipmentDetailsFormSection({ title, children }) {
  return (
    <div className="space-y-4 sm:space-y-5">
      <h3 className="text-base sm:text-lg font-semibold text-gray-300 pb-2 border-b border-slate-700">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">{children}</div>
    </div>
  );
}

export default UpdateShipmentDetailsFormSection;
