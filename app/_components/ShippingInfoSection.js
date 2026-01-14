import { Calendar, CheckCircle2, Clock, Truck } from "lucide-react";
import InfoRow from "./InfoRow";
import { addDays, formatDateAndTime } from "../_utils/helpers";

function ShippingInfoSection({ freight, estimatedDays, createdAt }) {
  const estimatedDelivery = addDays(createdAt, estimatedDays);

  const { date: createdDate, time: createdTime } = formatDateAndTime(createdAt);
  const { date: deliveryDate, time: deliveryTime } = formatDateAndTime(estimatedDelivery);
  const createdAtDate = `${createdDate} at ${createdTime} `;
  const estimatedDeliveryDate = `${deliveryDate} at ${deliveryTime} `;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <InfoRow icon={Truck} label="Freight Type" value={`${freight} Freight`} valueClassName="text-slate-300" />
      <InfoRow icon={Clock} label="Delivery Days" value={`${estimatedDays} days`} valueClassName="text-slate-300" />
      <InfoRow icon={Calendar} label="Created" value={createdAtDate} valueClassName="text-slate-300" />
      <InfoRow icon={CheckCircle2} label="Estimated Delivery" value={estimatedDeliveryDate} valueClassName="text-emerald-400 font-semibold" />
    </div>
  );
}

export default ShippingInfoSection;
