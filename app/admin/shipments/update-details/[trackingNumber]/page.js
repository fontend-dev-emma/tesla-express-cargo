import UpdateShipmentDetailsFormContainer from "@/app/_queryHooks/UpdateShipmentDetailsFormContainer";

async function page({ params }) {
  const { trackingNumber } = await params;

  return (
    <div>
      <UpdateShipmentDetailsFormContainer trackingNumber={trackingNumber} />
    </div>
  );
}

export default page;
