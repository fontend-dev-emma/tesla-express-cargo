import ShipmentVerificationPage from "@/app/_components/ShipmentVerificationPage";

export const metadata = {
  title: "Verify Shipment Before Update - Admin ",
  description:
    "Verify if a shipment exists by entering its tracking number or receiver email before Revealing the shipment details form in the admin Panel.",
};

function page() {
  return (
    <div>
      <ShipmentVerificationPage />
    </div>
  );
}

export default page;
