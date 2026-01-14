import PasswordResetPage from "@/app/_components/PasswordResetPage";
import { getUser } from "@/app/_lib/actions";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Admin | Reset Password",
  description: "Reset and manage administrator account passwords securely.",
};

async function page() {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      <PasswordResetPage authId={user?.id} />
    </div>
  );
}

export default page;
