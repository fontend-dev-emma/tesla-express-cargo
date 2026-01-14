import { getShipment } from "../_lib/data-service";
import { formatPhoneNumber } from "../_utils/helpers";

async function InvoiceContactInfomation({ trackingNumber }) {
  const { receiverName, receiverPhone, receiverEmail, finalDestination } = await getShipment(trackingNumber);

  return (
    <div className="px-6 capitalize sm:px-10 py-5 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
      <div>
        <h3 className="text-gray-700 font-semibold mb-2 text-sm sm:text-base">Sender</h3>
        <p className="text-sm sm:text-base text-gray-600">Tesla Express Cargo HQ</p>
        <p className="text-sm sm:text-base text-gray-500">📍 Houston, Texas, USA</p>
        <p className="text-sm sm:text-base text-gray-500">☎️ {formatPhoneNumber("+393128897623")}</p>
        <p className="text-sm sm:text-base text-blue-500"> ✉️ support@tesla-express-cargo.com</p>
      </div>

      <div>
        <h3 className="text-gray-700 font-semibold mb-2 text-sm sm:text-base">Receiver</h3>
        <p className="text-sm sm:text-base text-gray-600">{receiverName}</p>
        <p className="text-sm sm:text-base text-gray-500"> 📍 {finalDestination}</p>
        <p className="text-sm sm:text-base text-gray-500"> ☎️ {formatPhoneNumber(receiverPhone)}</p>
        <p className="text-sm sm:text-base text-blue-500"> ✉️ {receiverEmail}</p>
      </div>
    </div>
  );
}

export default InvoiceContactInfomation;
