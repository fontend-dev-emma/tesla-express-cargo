"use client";

import { useState } from "react";
import CreateFeedbackFormInput from "./CreateFeedbackFormInput";
import CreateFeedbackFormSelect from "./CreateFeedbackFormSelect";
import CreateFeedbackFormTextarea from "./CreateFeedbackFormTextarea";
import CreateFeedbackSubmitButton from "./CreateFeedbackSubmitButton";
import { MapPin, MessageSquare, Package } from "lucide-react";
import { useAllShipments } from "../_queryHooks/useAllShipments";
import { useCreateFeedback } from "../_queryHooks/useCreateFeedback";
import toast from "react-hot-toast";

function FeedbackForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [status, setStatus] = useState("pending");
  const [port, setPort] = useState("");
  const [message, setMessage] = useState("");

  const { allShipments } = useAllShipments();
  const { submitFeedbackAsync } = useCreateFeedback();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!trackingNumber.trim() || !port.trim() || !message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const valid = allShipments?.some((s) => s.trackingNumber === trackingNumber.trim());

      const newFeedback = { trackingNumber, status, port, message };

      if (!valid) {
        toast.error("Invalid tracking number. Shipment not found.");
        setIsLoading(false);
        return;
      }

      const res = await submitFeedbackAsync(newFeedback);

      if (!res.success) {
        toast.error("Failed to Create Feedback!");
        setIsLoading(false);
        return;
      }

      toast.success("Feedback created successfully!");

      setTrackingNumber("");
      setStatus("pending");
      setPort("");
      setMessage("");
    } catch (err) {
      toast.error("Failed to Create Feedback");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center rounded-2xl justify-center">
      <div className="w-full max-w-md sm:max-w-lg">
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="text-center space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Add Shipment Feedback
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm lg:text-base max-w-md mx-auto">
              Record a new update or message related to a shipment`&apos;s current status
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <CreateFeedbackFormInput
              label="Tracking Number"
              icon={Package}
              type="text"
              placeholder="e.g., TEC-20260109-355658"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />

            <CreateFeedbackFormSelect label="Status" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="in transit">In Transit</option>
              <option value="out">Out for Delivery</option>
              <option value="at custom">At Custom</option>
              <option value="on hold">On Hold</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </CreateFeedbackFormSelect>

            <CreateFeedbackFormInput
              label="Port"
              icon={MapPin}
              type="text"
              placeholder="e.g., JFK Airport"
              value={port}
              onChange={(e) => setPort(e.target.value)}
            />

            <CreateFeedbackFormTextarea
              label="Feedback Message"
              icon={MessageSquare}
              rows="4"
              placeholder="Write a brief message about the shipment status..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div className="pt-2">
              <CreateFeedbackSubmitButton isLoading={isLoading}>Create Feedback</CreateFeedbackSubmitButton>
            </div>
          </form>
        </div>

        <p className="text-center text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6">Ensure the tracking number is valid before submitting</p>
      </div>
    </div>
  );
}

export default FeedbackForm;
