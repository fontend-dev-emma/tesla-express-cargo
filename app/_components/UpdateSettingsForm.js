"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { updateSettings } from "../_lib/actions";
import { Code, Loader2, Mail, Phone, Settings } from "lucide-react";
import SiteSettingsFormTextarea from "./SiteSettingsFormTextarea";
import SiteSettingsFormInput from "./SiteSettingsFormInput";

function UpdateSettingsForm() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const companyEmail = formData.get("companyEmail");
    const companyPhone = formData.get("companyPhone");
    const liveChatScript = formData.get("liveChatScript");

    try {
      setIsLoading(true);
      const result = await updateSettings({ companyEmail, companyPhone, liveChatScript });

      if (result.success) {
        toast.success("Settings updated successfully!");
        e.target.reset();
      }
    } catch (err) {
      toast.error("Error updating settings");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
      <div className="w-full max-w-md sm:max-w-xl lg:max-w-3xl mx-auto">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-2xl">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <div className="flex justify-center mb-2 sm:mb-3 lg:mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md sm:blur-lg lg:blur-xl"></div>
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Settings className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
              </div>
            </div>
            <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1 sm:mb-2 lg:mb-3">
              Update Settings
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm lg:text-base px-2 sm:px-4">Configure company contact information and live chat</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 lg:space-y-6">
            <SiteSettingsFormInput
              label="Company Email"
              icon={Mail}
              type="email"
              name="companyEmail"
              id="companyEmail"
              placeholder="company@example.com"
              disabled={isLoading}
            />

            <SiteSettingsFormInput
              label="Company Phone"
              icon={Phone}
              type="tel"
              name="companyPhone"
              id="companyPhone"
              placeholder="+1 (234) 567-8900"
              disabled={isLoading}
            />

            <SiteSettingsFormTextarea
              label="Live Chat Script"
              icon={Code}
              name="liveChatScript"
              id="liveChatScript"
              placeholder="Paste your live chat embed script here..."
              rows="4"
              disabled={isLoading}
            />

            <div className="pt-2 sm:pt-3 lg:pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 sm:py-3 lg:py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg sm:rounded-xl lg:rounded-xl text-xs sm:text-sm lg:text-base transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 sm:gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 animate-spin" />
                    <span>Updating...</span>
                  </>
                ) : (
                  <>
                    <Settings className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    <span>Update Settings</span>
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-4 sm:mt-5 lg:mt-6 p-2.5 sm:p-3 lg:p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg sm:rounded-xl">
            <p className="text-xs sm:text-sm lg:text-base text-blue-400 text-center leading-relaxed">
              These settings will be applied across the entire platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateSettingsForm;
