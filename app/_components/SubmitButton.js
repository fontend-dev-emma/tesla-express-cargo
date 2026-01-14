import { ArrowRight } from "lucide-react";

function SubmitButton({ onClick, loading = false }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full group flex items-center justify-center px-6 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-white bg-[#007F73] rounded-xl hover:bg-[#006860] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? (
        <span>Signing in...</span>
      ) : (
        <>
          <span>Sign In</span>
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </>
      )}
    </button>
  );
}

export default SubmitButton;
