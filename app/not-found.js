"use client";

import { ArrowLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  return (
    <div data-404-page className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-[#f4fbfa] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#007F73]/20 rounded-full blur-3xl animate-pulse"></div>

        <div
          className="absolute bottom-1/4 -left-48 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#007F73]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="w-full max-w-2xl relative z-10 text-center">
        <div className="mb-8">
          <h1 className="text-[120px] sm:text-[180px] md:text-[220px] font-bold leading-none bg-gradient-to-br from-[#007F73] via-emerald-500 to-teal-400 bg-clip-text text-transparent animate-pulse select-none">
            404
          </h1>
        </div>

        <div className="bg-white/80 backdrop-blur-3xl p-6 sm:p-8 md:p-10 rounded-2xl border border-[#007F73]/20 shadow-2xl mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004d45] mb-4">Page Not Found</h2>

          <p className="text-[#5f8f8a] text-base sm:text-lg mb-8 max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted or never existed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push("/")}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#007F73] to-emerald-600 hover:from-[#00685f] hover:to-emerald-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-[#007F73]/30 transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </button>

            <button
              onClick={() => router.back()}
              className="w-full sm:w-auto px-8 py-4 text-[#004d45] rounded-xl font-medium border-2 border-[#007F73]/30 hover:border-[#007F73]/50 hover:bg-[#007F73]/5 transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
