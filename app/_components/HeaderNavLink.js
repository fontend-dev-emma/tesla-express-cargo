import Link from "next/link";
import { usePathname } from "next/navigation";

function HeaderNavLink({ children, hrefPath, pagePath }) {
  const pathName = usePathname();

  return (
    <Link href={hrefPath} className={`hover:text-accent-600 hover:underline ${pathName === pagePath ? "text-accent-600 underline" : ""}`}>
      {children}
    </Link>
  );
}

export default HeaderNavLink;
