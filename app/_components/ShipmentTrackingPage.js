"use client";

import Icon from "@/app/_components/Icon";
import ShipmentDetails from "@/app/_components/ShipmentDetails";
import ShipmentMap from "@/app/_components/ShipmentMap";
import ShipmentProgressBar from "@/app/_components/ShipmentProgressBar";
import { fetchLocation, getShipment } from "@/app/_lib/data-service";
import { format } from "date-fns";
import { Plane, Ship, Train, Truck } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useShipmentRoutes } from "../_queryHooks/useShipmentRoutes";
import ShipmentStatusBadge from "./ShipmentStatusBadge";
import ShipmentUpdateActivities from "./ShipmentUpdateActivities";
import ViewInvoiceButton from "./ViewInvoiceButton";

function ShipmentTrackingPage() {
  const { trackingNumber } = useParams();

  const [location, setLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [freight, setFreight] = useState("");
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [finalDestination, setFinalDestination] = useState("");
  const [estimatedDays, setEstimatedDays] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const today = new Date();
  const formattedDate = format(today, "MMM, dd, yyyy").toLowerCase();

  const { shipmentRoutes } = useShipmentRoutes(trackingNumber);

  useEffect(() => {
    async function handleShipment() {
      const {
        status,
        senderName,
        receiverName,
        receiverEmail,
        receiverPhone,
        finalDestination,
        currentLocation,
        createdAt,
        imageUrl,
        fromLocation,
        toLocation,
        freight,
        estimatedDays,
      } = await getShipment(trackingNumber);
      setStatus(status);
      setCreatedAt(createdAt);
      setFreight(freight);
      setSenderName(senderName);
      setReceiverName(receiverName);
      setReceiverEmail(receiverEmail);
      setReceiverPhone(receiverPhone);
      setFinalDestination(finalDestination);
      setImageUrl(imageUrl);
      setCurrentLocation(currentLocation);
      setEstimatedDays(estimatedDays);
      setFromLocation(fromLocation);
      setToLocation(toLocation);

      const result = await fetchLocation(currentLocation);
      if (result) {
        setLocation(result);
      } else {
        alert("Location not found!");
      }
    }

    handleShipment();
  }, [trackingNumber]);

  return (
    <div>
      <section className="pb-16">
        <div className="space-y-7 sm:space-y-9 flex-col text-center">
          <p className="text-[0.85rem] mx-12 sm:mx-20 py-1 sm:py-2 capitalize  rounded-b-full bg-primary-100 shadow font-bold text-teal-600 ">
            {status}. {formattedDate}.
          </p>
          <div className="  flex items-center justify-center gap-4 sm:pt-4 ">
            <Icon Icon={Ship} color={freight === "sea"} />
            <Icon Icon={Plane} color={freight === "air"} />
            <Icon Icon={Train} color={freight === "express"} />
            <Icon Icon={Truck} color={freight === "road"} />
          </div>

          <p className=" font-bold text-xl sm:text-[1.6rem] inline-block border-b-2 rounded border-teal-700 sm:py-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-400 bg-clip-text text-transparent">
            {trackingNumber}
          </p>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 md:px-14 lg:px-24">
        <div
          className=" rounded-3xl border shadow bottom-2 px-4 pt-5 pb-10  bg-teal-700  sm:pt-10 sm:px-8  flex flex-col 
          
        "
        >
          <ShipmentDetails
            imageUrl={imageUrl}
            trackingNumber={trackingNumber}
            status={status}
            freight={freight}
            toLocation={toLocation}
            fromLocation={fromLocation}
            senderName={senderName}
            receiverName={receiverName}
            receiverEmail={receiverEmail}
            receiverPhone={receiverPhone}
            finalDestination={finalDestination}
            estimatedDays={estimatedDays}
            currentLocation={currentLocation}
            createdAt={createdAt}
          />

          <div>
            <ShipmentProgressBar freight={freight} status={status} />
          </div>

          <div>
            <ShipmentUpdateActivities trackingNumber={trackingNumber} />
          </div>

          <div>
            <ShipmentStatusBadge status={status} />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <ViewInvoiceButton trackingNumber={trackingNumber} />
        </div>
      </section>

      <section className="py-10 px-4 space-y-6">
        <h1 className="text-3xl text-center">Real-Time Shipment Tracking</h1>
        <p className="text-center text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Track your shipment&apos;s journey with live location updates and estimated delivery times.
        </p>
        <ShipmentMap location={location} route={shipmentRoutes} />
      </section>
    </div>
  );
}

export default ShipmentTrackingPage;
