function TableHeader({ headers }) {
  return (
    <thead>
      <tr className="bg-slate-800/50 border-b border-slate-700">
        {headers?.map((header) => (
          <th key={header} className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-300 whitespace-nowrap">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
