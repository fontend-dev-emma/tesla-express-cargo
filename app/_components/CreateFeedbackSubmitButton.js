import { Loader2 } from "lucide-react";

function CreateFeedbackSubmitButton({ isLoading, children }) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`
        w-full py-3 sm:py-3.5
        bg-gradient-to-r from-blue-600 to-blue-500
        hover:from-blue-500 hover:to-blue-400
        text-white font-semibold
        rounded-lg sm:rounded-xl
        text-sm sm:text-base
        transition-all duration-200
        shadow-lg shadow-blue-500/20
        hover:shadow-xl hover:shadow-blue-500/30
        disabled:opacity-50 disabled:cursor-not-allowed
        disabled:hover:shadow-lg
        flex items-center justify-center gap-2
      `}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
          <span>Creating...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default CreateFeedbackSubmitButton;
