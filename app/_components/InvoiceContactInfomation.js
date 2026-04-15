import { getAllCompanySettings, getShipment } from "../_lib/data-service";
import { formatPhoneNumber } from "../_utils/helpers";

async function InvoiceContactInfomation({ trackingNumber }) {
  const { receiverName, receiverPhone, receiverEmail, finalDestination } = await getShipment(trackingNumber);

  const allSettings = await getAllCompanySettings();

  const companyEmail = allSettings?.companyEmail;
  const companyPhone = allSettings?.companyPhone;

  return (
    <div className="px-6 capitalize sm:px-10 py-5 border-t border-gray-600 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
      <div>
        <h3 className="text-sky-400 font-semibold mb-2 text-sm sm:text-base">Sender</h3>
        <p className="text-sm sm:text-base text-gray-300">Tesla Prime Logistics HQ</p>
        <p className="text-sm sm:text-base text-gray-400">📍 Houston, Texas, USA</p>
        <p className="text-sm sm:text-base text-gray-400">☎️ {formatPhoneNumber(companyEmail)}</p>
        <p className="text-sm sm:text-base text-blue-500"> ✉️ {companyPhone}</p>
      </div>

      <div>
        <h3 className="text-sky-400 font-semibold mb-2 text-sm sm:text-base">Receiver</h3>
        <p className="text-sm sm:text-base text-gray-300">{receiverName}</p>
        <p className="text-sm sm:text-base text-gray-400"> 📍 {finalDestination}</p>
        <p className="text-sm sm:text-base text-gray-400"> ☎️ {formatPhoneNumber(receiverPhone)}</p>
        <p className="text-sm sm:text-base text-blue-500"> ✉️ {receiverEmail}</p>
      </div>
    </div>
  );
}

export default InvoiceContactInfomation;
