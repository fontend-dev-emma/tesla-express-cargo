import { Menu, X } from "lucide-react";
import HeaderNavLink from "./HeaderNavLink";
import Logo from "./Logo";

function MobileHeader({ isOpen, onOPen }) {
  return (
    <div>
      <div className="flex justify-between flex-row sm:hidden">
        <Logo />

        <button className="w-8 h-8 sm:hidden  " onClick={() => onOPen((open) => !open)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-3 pt-4 pb-4 mt-2 mx-0 sm:hidden border-t-2 border-b-2 border-[#037665] ">
          <nav className="grid grid-cols-4  text-[0.85rem] font-bold">
            <HeaderNavLink hrefPath="/">Home</HeaderNavLink>
            <HeaderNavLink hrefPath="/about-us"> About</HeaderNavLink>
            <HeaderNavLink hrefPath="/logistics-services">Services</HeaderNavLink>
            <HeaderNavLink hrefPath="/contact-us">Contact</HeaderNavLink>
          </nav>
          <div className="text-[0.85rem]">
            <HeaderNavLink hrefPath="/track-shipment">Track - Shipment</HeaderNavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileHeader;
