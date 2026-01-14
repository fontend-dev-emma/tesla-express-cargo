import UpdateSettingsForm from "@/app/_components/UpdateSettingsForm";

export const metadata = {
  title: "Admin | Site Settings",
  description: "Update system preferences, configurations, and security settings.",
};

async function page() {
  return (
    <section className="sm:px-10 md:px-32 lg:px-64">
      <h1 className="text-center text-white/50 text-2xl border-b-2 border-b-white/15 mb-8 pb-2 sm:pt-4 md:pt-6">Update Site Settings</h1>

      <UpdateSettingsForm />
    </section>
  );
}

export default page;
