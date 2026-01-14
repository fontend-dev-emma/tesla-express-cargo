import img from "@/public/tesla-express-cargo-logo.jpg";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const manrope = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

function Logo({ textColor = "text-primary-950" }) {
  return (
    <div className="flex gap-2 mb-3 sm:mb-0 md:gap-3 lg:mr-20 items-center  ">
      <span>
        <Image src={img} alt="Tesla Express Cargo logo" className="w-24 h-7 md:w-48 md:h-12 rounded-full " />
      </span>
      {/* <span className={`font-bold ${textColor} text-[1.1rem] md:text-[1.4rem] ${manrope.className}`}>Tesla Express Cargo</span> */}
    </div>
  );
}

export default Logo;
