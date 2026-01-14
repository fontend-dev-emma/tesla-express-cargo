import { Mail, Phone, User } from "lucide-react";
import InfoRow from "./InfoRow";

function ContactInfoSection({ senderName, receiverName, receiverEmail, receiverPhone }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <InfoRow icon={User} label="Sender Name" value={senderName} valueClassName="text-slate-300" />
      <InfoRow icon={User} label="Receiver Name" value={receiverName} valueClassName="text-slate-300" />
      <InfoRow icon={Mail} label="Receiver Email" value={receiverEmail} valueClassName="text-teal-400" />
      <InfoRow icon={Phone} label="Receiver Phone" value={receiverPhone} valueClassName="text-teal-400" />
    </div>
  );
}

export default ContactInfoSection;
