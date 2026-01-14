"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AdminSideBar({ isOpen, closeSidebar }) {
  const [isLoading, setIsLoading] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  function handleLinkClick() {
    closeSidebar();
  }

  async function handleLogout() {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (!confirmed) return;

    setIsLoading(true);

    try {
      const res = await fetch("/api/logout", { method: "POST" });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to log out");
      } else {
        router.push("/login");
      }
    } catch (err) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  const sidebarGroups = [
    {
      title: "Dashboard",
      items: [{ name: "Dashboard", href: "/admin" }],
    },
    {
      title: "Feedback",
      items: [{ name: "Create Feedback", href: "/admin/feedback" }],
    },
    {
      title: "Shipments",
      items: [
        { name: "All Shipments", href: "/admin/shipments" },
        { name: "Add New Shipment", href: "/admin/shipments/new" },
        { name: "Update Location", href: "/admin/shipments/update-location" },
        { name: "Update Status", href: "/admin/shipments/update-status" },
        { name: "Update Details", href: "/admin/shipments/update-details" },
      ],
    },
    {
      title: "Customers",
      items: [
        { name: "All Customers", href: "/admin/customers" },
        { name: "Send Email", href: "/admin/send-email" },
      ],
    },
    {
      title: "Settings",
      items: [
        { name: "Site Settings", href: "/admin/settings" },
        { name: "Reset Password", href: "/admin/reset-password" },
      ],
    },
    {
      title: "Other",
      items: [
        { name: "Home", href: "/" },
        { name: "Logout", href: "#", onClick: handleLogout },
      ],
    },
  ];

  return (
    <div className="overflow-hidden">
      {isOpen && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden" onClick={closeSidebar} />}

      <aside
        className={`fixed md:static top-0 left-0 z-50 h-full w-64
          bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100
          transform transition-transform duration-300 ease-out
          border-r border-slate-700/50 md:border-none
          ${isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="relative p-6  border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
          <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Admin Panel</h2>
        </div>

        <nav className="p-4 pt-6 space-y-6 overflow-y-auto h-full pb-32 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
          {sidebarGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs capitalized text-slate-400 font-bold mb-2 px-3 tracking-wider">{group.title}</h3>
              <ul className="space-y-1">
                {group.items.map(({ name, href, onClick }) => {
                  const isActive = href === pathname;
                  return (
                    <li key={name}>
                      {onClick ? (
                        <button
                          onClick={onClick}
                          className={`group text-sm flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left transition-all duration-200
                          ${
                            isActive
                              ? "bg-gradient-to-r from-blue-900 to-blue-800 text-white font-semibold shadow-lg shadow-blue-600/20"
                              : "text-gray-300 hover:bg-white/5 hover:text-white hover:shadow-md"
                          }`}
                        >
                          {name}
                        </button>
                      ) : (
                        <Link
                          onClick={handleLinkClick}
                          href={href}
                          className={`group flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left transition-all duration-200
                          ${
                            isActive
                              ? "bg-gradient-to-r from-blue-900 to-blue-800 text-white font-semibold shadow-lg shadow-blue-600/20"
                              : "text-gray-300 hover:bg-slate-800/80 hover:text-white hover:shadow-md"
                          }`}
                        >
                          {name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}
