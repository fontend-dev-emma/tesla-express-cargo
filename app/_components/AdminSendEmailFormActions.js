import { Loader2, Send } from "lucide-react";

function AdminSendEmailFormActions({ isLoading, onSubmit }) {
  return (
    <div className="flex gap-3 pt-2">
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className="flex-1 px-4 sm:px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="animate-spin sm:w-5 sm:h-5" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={16} className="sm:w-5 sm:h-5" />
            <span>Send Email</span>
          </>
        )}
      </button>
    </div>
  );
}
export default AdminSendEmailFormActions;
