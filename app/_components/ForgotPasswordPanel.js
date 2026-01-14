"use client";

import { Check } from "lucide-react";
import ForgotPasswordTokenStep from "./ForgotPasswordTokenStep";
import ForgotPasswordEmailStep from "./ForgotPasswordEmailStep";
import { useState } from "react";
import ForgotPasswordResetStep from "./ForgotPasswordResetStep";
import { useAllUsersData } from "../_queryHooks/useAllUsersData";
import toast from "react-hot-toast";
import Link from "next/link";
import { sendTokenForForgotPassword } from "../_lib/actions";

function ForgotPasswordPanel() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [submittingEmail, setSubmittingEmail] = useState(false);

  const { allUsersData } = useAllUsersData();

  async function handleEmailSubmit() {
    setSubmittingEmail(true);
    try {
      const emailExists = allUsersData?.some((user) => user.email === email);

      if (!emailExists) {
        toast.error("We couldn’t find this email. Check and try again.");
        return;
      }

      const res = await sendTokenForForgotPassword(email);

      if (!res.success) {
        toast.error("Please resent reset link again!");
        return;
      }

      const { authId } = res.data;

      const emailResponse = await fetch("/api/send-otp-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ authId }),
      });

      if (emailResponse.ok) {
        toast.success("Check email for  your token code");
      } else {
        toast.error("Something wen't wrong!");
        return;
      }

      setStep(2);
    } catch (err) {
    } finally {
      setSubmittingEmail(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full">
        <div className="max-w-md mx-auto mb-8">
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all ${i <= step ? "w-12 bg-blue-500" : "w-8 bg-gray-700"}`} />
            ))}
          </div>
        </div>

        {step === 1 && <ForgotPasswordEmailStep email={email} setEmail={setEmail} submittingEmail={submittingEmail} onNext={handleEmailSubmit} />}
        {step === 2 && <ForgotPasswordTokenStep email={email} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
        {step === 3 && <ForgotPasswordResetStep email={email} onComplete={() => setStep(4)} />}
        {step === 4 && <SuccessStep />}
      </div>
    </div>
  );
}

export default ForgotPasswordPanel;

function SuccessStep() {
  return (
    <div className="w-full max-w-md mx-auto p-6 text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
        <Check className="w-10 h-10 text-green-400" />
      </div>
      <h1 className="text-2xl font-bold text-white mb-2">Password Reset!</h1>
      <p className="text-gray-400 mb-8">Your password has been successfully reset. You can now login with your new password.</p>
      <Link href="/login" className="inline-block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
        Back to Login
      </Link>
    </div>
  );
}
