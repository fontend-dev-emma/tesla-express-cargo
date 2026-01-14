function PulseIndicator() {
  return (
    <span className="flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-teal-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
    </span>
  );
}

export default PulseIndicator;
