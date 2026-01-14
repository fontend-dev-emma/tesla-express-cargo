import { CheckCircle, Clock, Truck, XCircle } from "lucide-react";
import { Suspense } from "react";
import ShipmentsTable from "../_components/ShipmentsTable";
import StatusCard from "../_components/StatusCard";

import { redirect } from "next/navigation";
import FullPageSpinner from "../_components/FullPageSpinner";
import { getUser } from "../_lib/actions";
import CustomersPage from "../_components/CustomersPage";

export const metadata = {
  title: "Admin | Dashboard",
  description: "Overview of the admin panel with insights into customers, shipments, and system activity.",
};

async function Page() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      <section className="">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatusCard figure={23} Icon={Clock}>
            Pending
          </StatusCard>
          <StatusCard figure={58} Icon={Truck}>
            In Transit
          </StatusCard>
          <StatusCard figure={195} Icon={CheckCircle}>
            Delivered
          </StatusCard>
          <StatusCard figure={13} Icon={XCircle}>
            Cancelled
          </StatusCard>
        </div>
      </section>

      <Suspense fallback={<FullPageSpinner />}>
        <div className="min-h-screen bg-slate-900/60 rounded-2xl my-16">
          <ShipmentsTable heading="All Shipments" />
        </div>

        <CustomersPage />
      </Suspense>
    </div>
  );
}

export default Page;
