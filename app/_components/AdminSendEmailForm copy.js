"use client";

import { Mail } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAllUsersData } from "../_queryHooks/useAllUsersData";
import AdminSendEmailFormActions from "./AdminSendEmailFormActions";
import AdminSendEmailInputField from "./AdminSendEmailInputField";
import AdminSendEmailMessageEditor from "./AdminSendEmailMessageEditor";
import AdminSendEmailUserSelector from "./AdminSendEmailUserSelector";

function AdminSendEmailForm() {
  const { allUsersData } = useAllUsersData();

  const [isLoading, setIsLoading] = useState(false);
  const [selectedUserName, setSelectedUserName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const selectedUser = allUsersData?.find((u) => u.userName === selectedUserName);

  async function handleSubmit() {
    if (!selectedUser) {
      toast.error("Please select a user.");
      return;
    }

    if (!subject.trim()) {
      toast.error("Please enter a subject before sending.");
      return;
    }

    if (!message.trim()) {
      toast.error("Please write a message before sending.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: selectedUser.email,
          subject,
          message,
        }),
      });

      if (res.ok) {
        toast.success(`Message successfully sent to ${selectedUser.firstName}.`);
        setSelectedUserName("");
        setSubject("");
        setMessage("");
      } else {
        toast.error("Failed to send message. Please try again.");
        setIsLoading(false);
      }
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 dark:from-slate-800/30 to-gray-100 dark:to-slate/60 p-3 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-black/15 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 p-4 sm:p-6 lg:p-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Mail size={20} className="text-blue-600 flex-shrink-0 sm:w-6 sm:h-6" />
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-200 ">Send Email</h1>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Compose and send professional emails to your users</p>
          </div>

          <div className="space-y-5 sm:space-y-6">
            <div>
              <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-400 ">Select Recipient</label>
              <AdminSendEmailUserSelector users={allUsersData} selectedUserName={selectedUserName} onSelect={setSelectedUserName} />
            </div>

            <AdminSendEmailInputField
              label="Email Subject"
              id="subject"
              placeholder="e.g., Account Update, Special Offer..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <AdminSendEmailMessageEditor value={message} onChange={setMessage} />

            <AdminSendEmailFormActions isLoading={isLoading} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSendEmailForm;
