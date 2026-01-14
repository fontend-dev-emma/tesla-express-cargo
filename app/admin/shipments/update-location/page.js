import UpdateLocationPage from "@/app/_components/UpdateLocationPage";

export const metadata = {
  title: "Update Shipment Location | Admin Panel",
  description: "Modify and update the current location of shipments in real-time for accurate tracking.",
};

function page() {
  return (
    <div>
      <UpdateLocationPage />
    </div>
  );
}

export default page;
