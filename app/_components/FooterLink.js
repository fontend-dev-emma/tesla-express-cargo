import Link from "next/link";

function FooterLink({ children, hrefPath = "/" }) {
  return (
    <Link href={hrefPath} className="text-[0.8rem] hover:underline">
      {children}
    </Link>
  );
}

export default FooterLink;
