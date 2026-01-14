import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderNavLink from "./HeaderNavLink";
import Logo from "./Logo";

function DesktopHeader() {
  const pathName = usePathname();
  return (
    <div className="sm:flex hidden md:py-4 xl:mx-auto md:mx-auto   ">
      <Logo />

      <div className="  sm:gap-14 sm:ml-10 ">
        <nav className=" sm:flex sm:gap-8 md:gap-10 sm:text-[0.8rem] sm:justify-center sm:items-center md:text-[0.9rem] lg:gap-32">
          <div className="sm:border-2 sm:flex sm:gap-8 md:gap-12 sm:py-1 sm:px-3 sm:rounded-full md:px-5 md:py-2 lg:gap-16  ">
            <HeaderNavLink hrefPath="/" pagePath="/">
              Home
            </HeaderNavLink>
            <HeaderNavLink hrefPath="/about-us" pagePath="/about-us">
              About
            </HeaderNavLink>
            <HeaderNavLink hrefPath="/logistics-services" pagePath="/logistics-services">
              Services
            </HeaderNavLink>
            <HeaderNavLink hrefPath="/contact-us" pagePath="/contact-us">
              Contact
            </HeaderNavLink>
          </div>

          <div
            className={`sm:text-[0.8rem] sm:px-6 sm:py-2   sm:bg-gradient-to-br sm:from-orange-600 sm:via-orange-500 sm:to-amber-400 sm:text-white sm:rounded-full sm:hover:from-orange-700 sm:hover:via-orange-600 sm:hover:to-amber-500 transition duration-300 ${
              pathName === "/track-shipment" ? "underline" : ""
            }`}
          >
            <Link href="/track-shipment">Track</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default DesktopHeader;
