"use client";

import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

function ForgotPasswordEmailStep({ email, onNext, submittingEmail, setEmail }) {
  function handleSubmit(e) {
    e.preventDefault();
    onNext();
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-4">
          <Mail className="w-8 h-8 text-blue-400" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Forgot Password?</h1>
        <p className="text-gray-400">No worries, we&apos;ll send you reset instructions</p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value.trim())}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>

        <button
          type="submit"
          disabled={submittingEmail}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-medium rounded-lg transition flex items-center justify-center gap-2"
        >
          {submittingEmail ? "Sending..." : "Send Reset Link"}
          {!submittingEmail && <ArrowRight className="w-4 h-4" />}
        </button>
      </div>

      <div className="mt-6 text-center">
        <Link href="/login" className="text-sm text-gray-400 hover:text-white transition">
          ← Back to login
        </Link>
      </div>
    </form>
  );
}

export default ForgotPasswordEmailStep;
