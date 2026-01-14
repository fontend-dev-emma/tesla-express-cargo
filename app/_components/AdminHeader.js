"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const { Menu, X, LogOut } = require("lucide-react");
const { default: LanguageSelector } = require("./LanguageSelector");

function AdminHeader({ isOpen = false, onMenuOpen = () => {} }) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

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

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm bg-opacity-95 border-b border-gray-700/50 shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => onMenuOpen((open) => !open)}
            className="group flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-800 active:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 md:w-6 md:h-6 text-gray-300 group-hover:text-white transition-colors" />
            ) : (
              <Menu className="w-5 h-5 md:w-6 md:h-6 text-gray-300 group-hover:text-white transition-colors" />
            )}
          </button>

          <div className="flex-1 flex justify-center md:justify-start md:ml-8">
            <div className="text-lg md:text-xl font-semibold text-white tracking-tight">Admin Panel</div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:block">
              <LanguageSelector />
            </div>

            <button
              onClick={handleLogout}
              className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-red-600 active:bg-red-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Log out"
            >
              <LogOut className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white transition-colors" />
              <span className="hidden md:inline text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Logout</span>
            </button>
          </div>
        </div>

        <div className="sm:hidden pb-3 pt-1">
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
