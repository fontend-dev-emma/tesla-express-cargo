import LoginForm from "../_components/LoginForm";

export const metadata = {
  title: "Admin Login | Tesla Express Cargo",
  description: "Securely log in to the Tesla Express Cargo admin portal to manage shipments, track deliveries, and access administrative tools.",
};

function page() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default page;
