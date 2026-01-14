function DividerSpinner() {
  return (
    <div className="relative w-10 h-10 rounded-full [background:conic-gradient(#14b8a6_0deg_110deg,transparent_110deg_130deg,#3b82f6_130deg_240deg,transparent_240deg_260deg,#f43f5e_260deg_360deg,transparent_360deg_380deg)]">
      <div className="absolute inset-4 bg-[#f9fafb] rounded-full shadow-inner"></div>
    </div>
  );
}

export default DividerSpinner;
