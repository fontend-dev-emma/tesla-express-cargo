"use client";

import { useEffect, useState } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import LanguageSelector from "./LanguageSelector";
import { usePathname } from "next/navigation";

function Header() {
  const [isOpen, setIsOPen] = useState(false);

  const [hideHeader, setHideHeader] = useState(false);
  const pathname = usePathname();

  const hideHeaderPaths = ["/login", "/admin-dashboard", "/forgot-password"];

  const isAuthPage = hideHeaderPaths.some((path) => pathname.includes(path));

  useEffect(() => {
    async function fetchData() {
      const notFoundPage = document.querySelector("[data-404-page]");
      setHideHeader(Boolean(notFoundPage));
    }
    fetchData();
  }, [pathname]);

  if (hideHeader) return null;

  return (
    <header
      className={`py-5 px-4 text-primary-950 lg:py-4  flex sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-[0_4px_6px_rgba(200,200,200,0.1)] flex-col ${
        isOpen ? "bg-black/5 sm:bg-inherit  z-50 shadow sm:shadow-none" : ""
      }  lg:px-9 xl:px-14 ${isAuthPage ? "hidden" : ""} `}
    >
      <LanguageSelector />

      <DesktopHeader />

      <MobileHeader isOpen={isOpen} onOPen={setIsOPen} />
    </header>
  );
}

export default Header;
