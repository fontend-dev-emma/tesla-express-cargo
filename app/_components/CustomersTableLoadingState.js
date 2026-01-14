import { Loader2 } from "lucide-react";

function CustomersTableLoadingState() {
  return (
    <tr>
      <td colSpan="7" className="px-6 py-16 text-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
          <p className="text-gray-400 text-sm">Loading customers...</p>
        </div>
      </td>
    </tr>
  );
}

export default CustomersTableLoadingState;
