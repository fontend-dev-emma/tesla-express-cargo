import UpdateStatusPage from "@/app/_components/UpdateStatusPage";

export const metadata = {
  title: "Update Shipment Status | Admin Panel",
  description: "Manage and update shipment progress, from processing to delivery confirmation.",
};

function page() {
  return (
    <div>
      <UpdateStatusPage />
    </div>
  );
}

export default page;
