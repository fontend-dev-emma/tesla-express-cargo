"use client";

import { Upload, CheckCircle } from "lucide-react";
import { useState } from "react";

function UpdateShipmentDetailsFormFileInput({ label, ...props }) {
  const [fileName, setFileName] = useState(null);

  function handleChange(e) {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  }

  return (
    <div className="space-y-2">
      <label className="block text-xs sm:text-sm font-medium text-gray-400">{label}</label>

      <label
        className={`flex flex-col items-center justify-center w-full h-32 sm:h-40
        border-2 border-dashed rounded-xl cursor-pointer transition-all
        ${fileName ? "border-emerald-500 bg-emerald-500/5" : "border-slate-700 bg-slate-800/50 hover:bg-slate-800"}`}
      >
        {!fileName ? (
          <>
            <Upload className="w-8 h-8 sm:w-10 sm:h-10 mb-3 text-gray-500" />
            <p className="mb-2 text-xs sm:text-sm text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 5MB)</p>
          </>
        ) : (
          <>
            <CheckCircle className="w-8 h-8 text-emerald-500 mb-2" />
            <p className="text-sm text-emerald-400 font-medium">{fileName}</p>
            <p className="text-xs text-gray-500">File selected</p>
          </>
        )}

        <input {...props} type="file" className="hidden" onChange={handleChange} />
      </label>
    </div>
  );
}

export default UpdateShipmentDetailsFormFileInput;
