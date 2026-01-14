import TrackingSection from "../_components/TrackingSection";

export const metadata = {
  title: "Track Shipment | Tesla Express Cargo",
  description: "Enter your tracking number for real-time updates on shipment status. Stay informed with Tesla Express Cargo.",
};

function page() {
  return (
    <div>
      <TrackingSection />
    </div>
  );
}

export default page;
