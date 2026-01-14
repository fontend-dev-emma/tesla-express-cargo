import { Zap } from "lucide-react";

function TeslaCarStoreSectionToast({ message, onClose }) {
  return (
    <div className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 max-w-md sm:max-w-lg z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-zinc-900 to-black border border-red-600/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-2xl shadow-red-600/20">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base text-white font-semibold mb-1">Purchase Request Received</p>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{message}</p>
          </div>
          <button onClick={onClose} className="flex-shrink-0 text-gray-500 hover:text-white transition-colors">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeslaCarStoreSectionToast;
