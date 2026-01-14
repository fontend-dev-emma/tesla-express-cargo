import Link from "next/link";

function ForgotPasswordLink() {
  return (
    <Link
      type="button"
      href="/forgot-password"
      className="text-sm sm:text-base text-[#007F73] hover:text-[#006860] font-medium transition-colors duration-200 hover:underline"
    >
      Forgot password?
    </Link>
  );
}

export default ForgotPasswordLink;
