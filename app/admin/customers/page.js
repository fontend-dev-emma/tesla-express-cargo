import CustomersPage from "@/app/_components/CustomersPage";

export const metadata = {
  title: "Admin | Customers",
  description: "Manage and view all registered customers in the admin dashboard.",
};

function page() {
  return (
    <div>
      <CustomersPage />
    </div>
  );
}

export default page;
