import Link from "next/link";

function SideBarNavLink({ hrefPath, children, onOpen }) {
  return (
    <li className="font-semibold text-[0.8rem] sm:text-[0.85rem] text-white/90 transition-all duration-300">
      <Link href={hrefPath} onClick={() => onOpen(false)} className="block px-2 py-1 rounded-md hover:bg-white/15 hover:text-primary-50">
        {children}
      </Link>
    </li>
  );
}

export default SideBarNavLink;
