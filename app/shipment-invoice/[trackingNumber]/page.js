import Invoice from "@/app/_components/Invoice";
import InvoiceDownloadButton from "@/app/_components/InvoiceDownloadButton";

export async function generateMetadata({ params }) {
  const { trackingNumber } = await params;

  return {
    title: `Invoice #${trackingNumber} | Tesla Express Cargo`,
    description: `View detailed billing information and payment summary for invoice #${trackingNumber} on Tesla Express Cargo.`,
  };
}

async function page({ params }) {
  const { trackingNumber } = await params;

  return (
    <div className="px-4 sm:px-6 md:10 py-10 sm:py-14">
      <Invoice trackingNumber={trackingNumber} />
      <InvoiceDownloadButton trackingNumber={trackingNumber} />
    </div>
  );
}

export default page;
