"use client";

import html2pdf from "html2pdf.js";
import { useState, useRef, useEffect } from "react";

function InvoiceDownloadButton() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  function handleDownloadPDF() {
    const invoice = document.getElementById("invoice");

    const options = {
      margin: 0,
      filename: "Valentra_Logistics_Invoice.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 3, useCORS: true, scrollX: 0, scrollY: 0 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(invoice).set(options).save();
    setOpen(false);
  }

  function handlePrint() {
    window.print();
    setOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex justify-center mt-10 mb-16" ref={dropdownRef}>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="bg-teal-600 text-white px-6 py-2 rounded-lg shadow hover:bg-teal-700 transition text-sm sm:text-base"
        >
          Download Invoice
        </button>

        {open && (
          <div
            className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white border rounded-lg shadow-lg w-52 z-50 flex flex-col overflow-hidden"
            style={{
              bottom: "auto",
            }}
          >
            <button onClick={handlePrint} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
              Print Invoice
            </button>
            <button onClick={handleDownloadPDF} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
              Download PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default InvoiceDownloadButton;
