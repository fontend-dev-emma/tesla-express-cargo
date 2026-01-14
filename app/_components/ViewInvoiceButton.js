"use client";
import Link from "next/link";
import { useState } from "react";
import FullPageSpinner from "./FullPageSpinner";

function ViewInvoiceButton({ trackingNumber }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <Link
      href={`/shipment-invoice/${trackingNumber}`}
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-medium px-6 py-2 rounded-lg shadow-md transition duration-300 w-full sm:w-auto ${
        isLoading ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? <FullPageSpinner /> : <span>View Invoice</span>}
    </Link>
  );
}

export default ViewInvoiceButton;
