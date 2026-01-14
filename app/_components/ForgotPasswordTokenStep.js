"use client";

import { Mail } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { sendTokenForForgotPassword, verifyTokenForForgotPassword } from "../_lib/actions";

function ForgotPasswordTokenStep({ email, onNext, onBack }) {
  const [token, setToken] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (index, value) => {
    if (value.length > 1) value = value[0];
    const newToken = [...token];
    newToken[index] = value;
    setToken(newToken);

    if (value && index < 5) {
      document.getElementById(`token-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !token[index] && index > 0) {
      document.getElementById(`token-${index - 1}`).focus();
    }
  };

  async function handleSubmit() {
    setError("");
    setLoading(true);

    const inputtedToken = token.join("");

    if (inputtedToken.length !== 6) {
      setLoading(false);
      return;
    }

    try {
      const res = await verifyTokenForForgotPassword(email, inputtedToken);
      if (!res.success) {
        setError("Invalid code. Please try again.");
        return;
      }
      onNext();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleResendToken() {
    const confirmed = window.confirm("Resend the verification code?");

    if (!confirmed) return;

    setResending(true);

    try {
      const res = await sendTokenForForgotPassword(email);

      if (!res.success) {
        toast.error("Resend Failed. Please try again.");
        return;
      }

      toast.success("Token resent. Please check email inbox");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setResending(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-full mb-4">
          <Mail className="w-8 h-8 text-purple-400" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Check Your Email</h1>
        <p className="text-gray-400">
          We sent a code to <span className="text-white truncate">{email}</span>
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3 text-center">Enter 6-digit code</label>
          <div className="flex gap-2 justify-center">
            {token.map((digit, index) => (
              <input
                disabled={loading || resending}
                key={index}
                id={`token-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-14 text-center text-xl font-bold bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
              />
            ))}
          </div>
          {error && <p className="text-red-400 text-sm mt-2 text-center">{error}</p>}
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading || token.join("").length !== 6 || resending}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 text-white font-medium rounded-lg transition"
        >
          {loading ? "Verifying..." : "Verify Code"}
        </button>

        <div className="text-center space-y-2">
          <button type="button" onClick={handleResendToken} className="text-sm text-gray-400 hover:text-white transition">
            {resending ? "Resending..." : "Resend code"}
          </button>
          <div>
            <button type="button" onClick={onBack} className="text-sm text-gray-400 hover:text-white transition">
              ← Use different email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordTokenStep;
