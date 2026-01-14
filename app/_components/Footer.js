"use client";

import SocialIcons from "@/app/_components/SocialIcons";
import FooterContactInfo from "./FooterContactInfo";
import FooterLink from "./FooterLink";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function Footer() {
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
    <footer className={`bg-primary-950 text-primary-500 px-4 py-6 lg:px-10 lg:py-16  ${isAuthPage ? "hidden" : ""}`}>
      <div className="sm:grid sm:grid-cols-2 ">
        <div>
          <Logo textColor=" text-primary-100 " />

          <p className="text-[0.83rem] mt-4">
            Tesla Express Cargo delivers reliable logistics solutions, seamlessly connecting businesses to customers with precision and care.
          </p>

          <SocialIcons />
        </div>

        <div className="flex gap-20 sm:gap-10 sm:ml-10 lg:gap-20">
          <div className=" ">
            <h3 className="text-[1rem] mb-3 text-primary-100">Navigation</h3>
            <span className="flex flex-col gap-2">
              <FooterLink hrefPath="/">Home</FooterLink>
              <FooterLink hrefPath="/about-us">About Us</FooterLink>
              <FooterLink hrefPath="/logistics-services">services</FooterLink>
              <FooterLink hrefPath="/contact-us">Contact</FooterLink>
            </span>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[1rem] mb-3 text-primary-100">Courier Types</h3>
            <span className="flex flex-col gap-2">
              <FooterLink hrefPath="/logistics-services/express">Express</FooterLink>
              <FooterLink hrefPath="/logistics-services/road-transport">Standard</FooterLink>
              <FooterLink hrefPath="/logistics-services/air-freight">International</FooterLink>
              <FooterLink hrefPath="/logistics-services/warehousing">Warehousing</FooterLink>
              <FooterLink hrefPath="/logistics-services/sea-freight">Ocean frieght</FooterLink>
            </span>
          </div>
        </div>

        <FooterContactInfo />
      </div>

      <div className="text-[0.7rem] text-center pt-6 border-t border-t-primary-500 lg:text-[0.9rem]">
        <p>&copy; {new Date().getFullYear()} Tesla Express Cargo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
