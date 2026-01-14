"use client";

import { Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import ForgotPasswordLink from "./ForgotPasswordLink";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit() {
    setLoading(true);

    const validEmail = email?.trim().toLowerCase();
    const validPassword = password?.trim();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ validEmail, validPassword }),
      });

      const data = await res.json();
      const { role } = data;

      if (!res.ok) {
        toast.error(data.error || "Login attempt failed!");
        return;
      }

      if (role === "admin") {
        router.push("/admin");
      } else {
        router.push("/login");
      }
    } catch (err) {
      toast.error("Something went wrong during login.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#007F73] rounded-2xl mb-4 sm:mb-6">
            <Lock className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">Welcome Back</h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">Sign in to your account to continue</p>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-gray-100">
          <div className="space-y-5 sm:space-y-6">
            <InputField
              icon={Mail}
              type="email"
              id="email"
              label="Email Address"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputField
              icon={Lock}
              type="password"
              id="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember" type="checkbox" className="h-4 w-4 text-[#007F73] focus:ring-[#007F73] border-gray-300 rounded cursor-pointer" />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  Remember me
                </label>
              </div>
              <ForgotPasswordLink />
            </div>

            <SubmitButton onClick={handleSubmit} loading={loading} />
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100">
            <p className="text-center text-sm sm:text-base text-gray-600">
              Don&apos;t have an account?
              <button className="text-[#007F73] hover:text-[#006860] font-semibold transition-colors duration-200 hover:underline">Sign up</button>
            </p>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500">Protected by industry-leading security standards</p>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
