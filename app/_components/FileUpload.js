import { Upload } from "lucide-react";

function FileUpload({ label, name, fileName, onChange, disabled }) {
  return (
    <div className="relative">
      <label className="block text-xs font-medium text-slate-400 mb-1.5">{label}</label>
      <input type="file" name={name} accept="image/*" onChange={onChange} className="hidden" id="file-upload" disabled={disabled} />
      <label
        htmlFor="file-upload"
        className="flex items-center justify-center w-full px-4 py-3 bg-slate-800/50 text-slate-400 rounded-lg border border-slate-700/50 hover:border-blue-900 hover:bg-slate-800 transition-all cursor-pointer text-sm"
      >
        <Upload className="w-4 h-4 mr-2 flex-shrink-0" />
        <span className="truncate">{fileName || "Choose image"}</span>
      </label>
    </div>
  );
}
export default FileUpload;
