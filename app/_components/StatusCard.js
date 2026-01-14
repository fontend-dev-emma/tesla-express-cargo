// function StatusCard({ children, figure, Icon }) {
//   return (
//     <div className="border rounded-xl shadow border-gray-500 p-6 flex items-center flex-row gap-14">
//       <div className="space-y-3">
//         <h3 className="text-[0.8rem] text-gray-400">{children}</h3>
//         <p className="text-2xl text-gray-200">{figure}</p>
//       </div>
//       <Icon className="w-14 h-14 text-white/50" />
//     </div>
//   );
// }

// export default StatusCard;

function StatusCard({ children, figure, Icon }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-gray-600">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6 flex items-center justify-between gap-6">
        <div className="flex-1 space-y-3">
          <h3 className="text-xs font-medium uppercase tracking-wider text-gray-400 group-hover:text-gray-300 transition-colors">{children}</h3>
          <p className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">{figure}</p>
        </div>

        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-300" />

            <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600/50 flex items-center justify-center group-hover:from-blue-600 group-hover:to-purple-600 group-hover:border-blue-500/50 transition-all duration-300">
              <Icon className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
}

export default StatusCard;
