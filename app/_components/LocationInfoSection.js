import { MapPin, Navigation } from "lucide-react";
import InfoRow from "./InfoRow";

function LocationInfoSection({ fromLocation, toLocation, currentLocation, finalDestination }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <InfoRow icon={MapPin} label="Departure" value={fromLocation} valueClassName="text-slate-300" />
      <InfoRow icon={MapPin} label="Destination" value={toLocation} valueClassName="text-slate-300" />
      <InfoRow icon={Navigation} label="Current Location" value={currentLocation} valueClassName="text-teal-400 font-semibold" showPulse={true} />
      <InfoRow icon={MapPin} label="Final Destination" value={finalDestination} valueClassName="text-slate-300" />
    </div>
  );
}

export default LocationInfoSection;
