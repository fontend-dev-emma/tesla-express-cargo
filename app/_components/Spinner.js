function Spinner({ label }) {
  return (
    <div className="flex items-center justify-center gap-2 text-gray-500 py-6">
      <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
      <span>{label}</span>
    </div>
  );
}

export default Spinner;
