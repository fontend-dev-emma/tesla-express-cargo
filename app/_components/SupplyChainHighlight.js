import bg from "@/assets/img-9.png";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  style: "italic",
  weight: "500",
});

function SupplyChainHighlight() {
  return (
    <section data-aos="fade-up" className="pt-10">
      <div className="relative h-[20rem] sm:h-[30rem] lg:h-[35rem] w-full">
        <Image src={bg} alt={`Supply chain highlight ${bg}`} className="object-cover sm:object-cover " fill sizes="100vw" />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute top-8 left-4 text-primary-50 max-w-sm text-left">
          <p
            className={`mt-4 sm:mt-8 text-[0.85rem] sm:text-[1.3rem] pr-12 sm:pr-2 sm:pl-4 font-thin lg:text-[1.4rem] lg:pl-8   ${montserrat.className} [text-shadow:_2px_2px_6px_rgba(0,0,0,0.4)]`}
          >
            Revolutionizing supply chains with accuracy, Our logistics company provides flawless solutions, enhancing efficiency and dependability to
            drive business success with assurance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SupplyChainHighlight;
