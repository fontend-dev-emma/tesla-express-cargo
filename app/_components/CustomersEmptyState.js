import { Users } from "lucide-react";

function CustomersEmptyState() {
  return (
    <tr>
      <td colSpan="7" className="px-6 py-16 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center">
            <Users className="w-8 h-8 text-gray-600" />
          </div>
          <p className="text-gray-400 text-sm sm:text-base">No customers found</p>
          <p className="text-gray-600 text-xs sm:text-sm">Try adjusting your search</p>
        </div>
      </td>
    </tr>
  );
}

export default CustomersEmptyState;
