import { format } from "date-fns";
import { StatusBadge } from "../_utils/helpers";

function CustomersTableRow({ customer, index }) {
  return (
    <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-mono whitespace-nowrap text-gray-400">{index}</td>
      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-mono whitespace-nowrap text-gray-300 font-medium">
        {customer.receiverName}
      </td>
      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-mono whitespace-nowrap text-blue-400">{customer.receiverEmail}</td>
      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-mono whitespace-nowrap text-gray-400">{customer.receiverPhone}</td>
      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-mono whitespace-nowrap text-gray-400">{customer.toLocation}</td>
      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
        <StatusBadge status={customer?.status} />
      </td>
      <td className="px-3 sm:px-4 font-mono whitespace-nowrap lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-400 ">
        {format(new Date(customer.createdAt), "MMM dd, yyyy")}
      </td>
    </tr>
  );
}

export default CustomersTableRow;
