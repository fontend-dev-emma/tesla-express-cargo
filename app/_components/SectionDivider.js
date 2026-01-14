function SectionDivider({ title }) {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{title}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
    </div>
  );
}
export default SectionDivider;
