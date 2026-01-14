import FullPageSpinner from "@/app/_components/FullPageSpinner";
import ShipmentsTable from "@/app/_components/ShipmentsTable";
import { Suspense } from "react";

export const metadata = {
  title: "Admin | Shipments",
  description: "Track, manage, and update all shipments from the admin panel.",
};

async function Page() {
  return (
    <div>
      <Suspense fallback={<FullPageSpinner />}>
        <ShipmentsTable heading="All Shipments" />
      </Suspense>
    </div>
  );
}

export default Page;
