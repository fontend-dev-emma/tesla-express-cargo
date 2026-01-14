"use client";

import { useState } from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FileUpload from "./FileUpload";
import { MiniSpinner } from "./MiniSpinner";
import { Calendar, DollarSign, Mail, MapPin, Package, Phone, Truck, User, Weight } from "lucide-react";
import { uploadShipmentImage } from "../_lib/data-service";
import { createShipment } from "../_lib/actions";
import toast from "react-hot-toast";

function ShipmentForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    senderName: "",
    receiverName: "",
    receiverEmail: "",
    receiverPhone: "",
    fromLocation: "",
    toLocation: "",
    finalDestination: "",
    currentLocation: "",
    estimatedDays: "",
    weight: "",
    shipmentCost: "",
    freight: "air",
    status: "pending",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!file) {
        toast.error("Please select an image file.");
        return;
      }

      const { success, imageUrl, filePath, error } = await uploadShipmentImage(file);
      if (!success) {
        toast.error(error);
        setIsLoading(false);
        return;
      }

      const shipmentData = { ...formData, imageUrl, filePath };

      await createShipment(shipmentData);

      toast.success("Shipment created successfully!");

      setFormData({
        senderName: "",
        receiverName: "",
        receiverEmail: "",
        receiverPhone: "",
        fromLocation: "",
        toLocation: "",
        finalDestination: "",
        currentLocation: "",
        estimatedDays: "",
        weight: "",
        shipmentCost: "",
        freight: "air",
        status: "pending",
      });

      setFileName("");
      setFile(null);
    } catch (err) {
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFile(file);
    }
  }

  const freightOptions = [
    { value: "air", label: "Air" },
    { value: "express", label: "Express" },
    { value: "sea", label: "Sea" },
    { value: "road", label: "Road" },
  ];

  const statusOptions = [
    { value: "pending", label: "Pending" },
    { value: "processing", label: "Processing" },
    { value: "in transit", label: "In Transit" },
    { value: "out", label: "Out for Delivery" },
    { value: "at custom", label: "At Customs" },
    { value: "on hold", label: "On Hold" },
    { value: "delivered", label: "Delivered" },
    { value: "cancelled", label: "Cancelled" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-4 sm:p-6 lg:p-8 rounded-2xl">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-950/50 rounded-xl mb-3 border border-blue-900/30">
            <Package className="w-6 h-6 text-blue-800" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-1">Create New Shipment</h1>
          <p className="text-sm text-slate-500">Fill in the details to create a new shipment record</p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-5 sm:p-8 shadow-xl border border-slate-800/50">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <FormInput
                label="Sender Name"
                name="senderName"
                value={formData.senderName}
                onChange={handleChange}
                placeholder="John Doe"
                icon={User}
                disabled={isLoading}
              />

              <FormInput
                label="Receiver Name"
                name="receiverName"
                value={formData.receiverName}
                onChange={handleChange}
                placeholder="Jane Smith"
                icon={User}
                disabled={isLoading}
              />

              <FormInput
                label="Receiver Email"
                name="receiverEmail"
                type="email"
                value={formData.receiverEmail}
                onChange={handleChange}
                placeholder="jane@example.com"
                icon={Mail}
                disabled={isLoading}
              />

              <FormInput
                label="Receiver Phone"
                name="receiverPhone"
                type="tel"
                value={formData.receiverPhone}
                onChange={handleChange}
                placeholder="+1 234 567 8900"
                icon={Phone}
                disabled={isLoading}
              />

              <FormInput
                label="From Location"
                name="fromLocation"
                value={formData.fromLocation}
                onChange={handleChange}
                placeholder="New York, USA"
                icon={MapPin}
                disabled={isLoading}
              />

              <FormInput
                label="To Location"
                name="toLocation"
                value={formData.toLocation}
                onChange={handleChange}
                placeholder="Los Angeles, USA"
                icon={MapPin}
                disabled={isLoading}
              />

              <FormInput
                label="Final Destination"
                name="finalDestination"
                value={formData.finalDestination}
                onChange={handleChange}
                placeholder="San Francisco, USA"
                icon={MapPin}
                disabled={isLoading}
              />

              <FormInput
                label="Current Location"
                name="currentLocation"
                value={formData.currentLocation}
                onChange={handleChange}
                placeholder="Chicago, USA"
                icon={MapPin}
                disabled={isLoading}
              />

              <FormInput
                label="Estimated Days"
                name="estimatedDays"
                type="number"
                value={formData.estimatedDays}
                onChange={handleChange}
                placeholder="5"
                icon={Calendar}
                disabled={isLoading}
              />

              <FormInput
                label="Weight (kg)"
                name="weight"
                type="number"
                value={formData.weight}
                onChange={handleChange}
                placeholder="150"
                icon={Weight}
                disabled={isLoading}
              />

              <FormInput
                label="Shipment Cost ($)"
                name="shipmentCost"
                type="number"
                value={formData.shipmentCost}
                onChange={handleChange}
                placeholder="1200"
                icon={DollarSign}
                disabled={isLoading}
              />

              <FormSelect
                label="Freight Type"
                name="freight"
                value={formData.freight}
                onChange={handleChange}
                options={freightOptions}
                icon={Truck}
                disabled={isLoading}
              />

              <FormSelect
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                options={statusOptions}
                icon={Package}
                disabled={isLoading}
              />

              <FileUpload label="Shipment Image" name="shipmentImage" fileName={fileName} onChange={handleFileChange} disabled={isLoading} />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-900 text-slate-100 font-medium py-3.5 rounded-lg border border-blue-900/50 hover:border-blue-800 shadow-lg shadow-blue-950/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                disabled={isLoading}
              >
                {isLoading ? <MiniSpinner /> : "Create Shipment"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShipmentForm;
