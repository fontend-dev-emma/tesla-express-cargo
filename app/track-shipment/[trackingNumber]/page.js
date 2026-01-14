import ShipmentTrackingPage from "@/app/_components/ShipmentTrackingPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export async function generateMetadata({ params }) {
  const { trackingNumber } = await params;

  return {
    title: `Track Shipment #${trackingNumber} | Tesla Express Cargo`,
    description: `Track real-time status and updates for shipment #${trackingNumber}.`,

    icons: {
      icon: "/tesla-express-cargo-favicon.png",
    },
  };
}

function page() {
  return (
    <div className={`${inter.className}`}>
      <ShipmentTrackingPage />
    </div>
  );
}

export default page;
