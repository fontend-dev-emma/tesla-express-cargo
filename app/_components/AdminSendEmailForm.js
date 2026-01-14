"use client";

import { Mail, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAllShipments } from "../_queryHooks/useAllShipments";
import { getFirstName } from "../_utils/helpers";
import AdminSendEmailFormActions from "./AdminSendEmailFormActions";
import AdminSendEmailInputField from "./AdminSendEmailInputField";
import AdminSendEmailMessageEditor from "./AdminSendEmailMessageEditor";
import AdminSendEmailUserSelector from "./AdminSendEmailUserSelector";

function AdminSendEmailForm() {
  const { allShipments } = useAllShipments();

  const [isLoading, setIsLoading] = useState(false);
  const [selectedUserName, setSelectedUserName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const selectedUser = allShipments?.find((u) => u.receiverName === selectedUserName);

  const firstnName = getFirstName(selectedUser?.receiverName);

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
          email: selectedUser.receiverEmail,
          subject,
          message,
        }),
      });

      if (res.ok) {
        toast.success(`Message successfully sent to ${firstnName}.`);
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
    <div className="min-h-screen p-3 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-black/20 rounded-xl shadow-sm border border-gray-600 p-4 sm:p-6 lg:p-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Mail size={20} className="text-blue-400 flex-shrink-0 sm:w-6 sm:h-6" />
              <h1 className="text-xl sm:text-2xl font-bold text-gray-200">Send Email</h1>
            </div>
            <p className="text-xs sm:text-sm text-gray-400">Compose and send professional emails to your users</p>
          </div>

          <div className="space-y-5 sm:space-y-6">
            <div>
              <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-400">Select Recipient</label>
              <AdminSendEmailUserSelector users={allShipments} selectedUserName={selectedUserName} onSelect={setSelectedUserName} />
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
