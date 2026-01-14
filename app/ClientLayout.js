"use client";

import { usePathname } from "next/navigation";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Header />}
      <main className="mx-auto min-h-screen overflow-y-auto">{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}

export default ClientLayout;
