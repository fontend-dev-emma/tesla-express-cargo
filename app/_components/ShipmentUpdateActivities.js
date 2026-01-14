"use client";

import { useEffect, useState } from "react";
import { getShipmentUpdates } from "../_lib/data-service";
import ShipmentActivity from "./ShipmentActivity";

function ShipmentUpdateActivities({ trackingNumber }) {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    async function handleUpdates() {
      const data = await getShipmentUpdates(trackingNumber);
      setUpdates(Array.isArray(data) ? data : []);
    }

    if (trackingNumber) handleUpdates();
  }, [trackingNumber]);

  return (
    <div className="bg-slate-900/90 backdrop-blur-xl px-4 py-6 divide-y divide-slate-700/50 divide-dashed my-12 border border-slate-800 shadow-2xl rounded-2xl">
      {updates.map((update) => (
        <ShipmentActivity key={update.id} update={update} />
      ))}
    </div>
  );
}

export default ShipmentUpdateActivities;
