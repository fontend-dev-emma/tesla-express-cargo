"use client ";

import { Calendar, DollarSign, Mail, MapPin, Package, Phone, Plane, Truck, User, Weight } from "lucide-react";
import { MiniSpinner } from "./MiniSpinner";
import UpdateShipmentDetailsFormFileInput from "./UpdateShipmentDetailsFormFileInput";
import UpdateShipmentDetailsFormSection from "./UpdateShipmentDetailsFormSection";
import UpdateShipmentDetailsFormInput from "./UpdateShipmentDetailsFormInput";
import { uploadShipmentImage } from "../_lib/data-service";
import { useShipment } from "../_queryHooks/useShipment";
import { updateShipmentDetails } from "../_lib/actions";
import { useState } from "react";
import toast from "react-hot-toast";
import UpdateShipmentDetailsFormSelect from "./UpdateShipmentDetailsFormSelect";

function UpdateShipmentDetailsForm({ trackingNumber }) {
  const [isLoading, setIsLoading] = useState(false);

  const { shipment } = useShipment(trackingNumber);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    const imageFile = formData.get("shipmentImage");

    const { shipmentImage, ...formValuesWithoutFile } = formValues;

    const oldFilePath = shipment?.filePath;

    try {
      let imageUrl;
      let filePath;

      if (imageFile && imageFile.size > 0) {
        const uploadRes = await uploadShipmentImage(imageFile, oldFilePath);

        if (!uploadRes.success) {
          toast.error(uploadRes.error || "Image upload failed");
          return;
        }

        imageUrl = uploadRes.imageUrl;
        filePath = uploadRes.filePath;
      }

      const shipmentData = {
        ...formValuesWithoutFile,
        trackingNumber,
        ...(imageUrl && { imageUrl }),
        ...(filePath && { filePath }),
      };

      await updateShipmentDetails(shipmentData);

      toast.success("Shipment information updated successfully");
      e.target.reset();
    } catch (err) {
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:py-8">
      <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            Update Shipment Details
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">Modify shipment information and upload new images</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <UpdateShipmentDetailsFormSection title="Shipment Information">
            <UpdateShipmentDetailsFormSelect
              label="Freight Type"
              name="freight"
              icon={Plane}
              options={[
                { label: "Air Freight", value: "air" },
                { label: "Land Freight", value: "land" },
                { label: "Sea Freight", value: "sea" },
                { label: "Express Delivery", value: "express" },
                { label: "Warehousing", value: "warehousing" },
              ]}
            />

            <UpdateShipmentDetailsFormInput
              label="Estimated Days"
              icon={Calendar}
              type="number"
              name="estimatedDays"
              id="estimatedDays"
              placeholder="e.g. 5"
            />
            <UpdateShipmentDetailsFormInput label="Weight (kg)" icon={Weight} type="number" name="weight" id="weight" placeholder="e.g. 120" />
            <UpdateShipmentDetailsFormInput
              label="Shipment Cost ($)"
              icon={DollarSign}
              type="number"
              name="shipmentCost"
              id="shipmentCost"
              placeholder="e.g. 500"
            />
          </UpdateShipmentDetailsFormSection>

          <UpdateShipmentDetailsFormSection title="Sender & Receiver Details">
            <UpdateShipmentDetailsFormInput label="Sender Name" icon={User} type="text" name="senderName" id="senderName" placeholder="Sender Name" />
            <UpdateShipmentDetailsFormInput
              label="Receiver Name"
              icon={User}
              type="text"
              name="receiverName"
              id="receiverName"
              placeholder="Receiver Name"
            />
            <UpdateShipmentDetailsFormInput
              label="Receiver Email"
              icon={Mail}
              type="email"
              name="receiverEmail"
              id="receiverEmail"
              placeholder="receiver@example.com"
            />
            <UpdateShipmentDetailsFormInput
              label="Receiver Phone"
              icon={Phone}
              type="tel"
              name="receiverPhone"
              id="receiverPhone"
              placeholder="+1 234 567 890"
            />
          </UpdateShipmentDetailsFormSection>

          <UpdateShipmentDetailsFormSection title="Location Details">
            <UpdateShipmentDetailsFormInput
              label="From Location"
              icon={MapPin}
              type="text"
              name="fromLocation"
              id="fromLocation"
              placeholder="e.g. Toronto, Canada"
            />

            <UpdateShipmentDetailsFormInput
              label="To Location"
              icon={MapPin}
              type="text"
              name="toLocation"
              id="toLocation"
              placeholder="e.g. Dubai, UAE"
            />
            <div className="sm:col-span-2">
              <UpdateShipmentDetailsFormInput
                label="Final Destination"
                icon={Package}
                type="text"
                name="finalDestination"
                id="finalDestination"
                placeholder="Complete destination address"
              />
            </div>
          </UpdateShipmentDetailsFormSection>

          <div>
            <UpdateShipmentDetailsFormFileInput label="Shipment Image" type="file" name="shipmentImage" id="shipmentImage" accept="image/*" />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <MiniSpinner />
                  <span>Updating...</span>
                </>
              ) : (
                <>
                  <Package className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Update Shipment</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateShipmentDetailsForm;
