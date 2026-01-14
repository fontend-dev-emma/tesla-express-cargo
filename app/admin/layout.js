"use client";

import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import AdminHeader from "../_components/AdminHeader";
import AdminSideBar from "../_components/AdminSideBar";
import Providers from "../Providers";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex h-screen min-h-[100dvh] bg-gray-50 text-gray-900">
      {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden" />}

      <AdminSideBar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

      <div className="flex flex-col flex-1 relative z-0 h-full overflow-hidden">
        <div className="sticky top-0 z-50">
          <AdminHeader isOpen={sidebarOpen} onMenuOpen={setSidebarOpen} />
        </div>

        <Providers>
          <main className="flex-1 overflow-y-auto bg-slate-900/90 text-gray-200 pt-44 p-4 scroll-smooth">
            {children}

            <Toaster
              position="top-center"
              gutter={12}
              toastOptions={{
                success: { duration: 3000 },
                error: { duration: 5000 },
                className: "text-base max-w-md px-4 py-3 bg-white text-gray-700 shadow-lg rounded-lg sm:max-w-lg w-[90%] sm:w-auto",
              }}
            />
          </main>
        </Providers>

        <footer className="bg-gray-900 text-white/60 text-[0.65rem] text-center py-4">
          <p>&copy; {new Date().getFullYear()} Tesla Express Cargo Limited</p>
        </footer>
      </div>
    </div>
  );
}
