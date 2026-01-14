import { Cormorant } from "next/font/google";
import Image from "next/image";

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  style: "italic",
  weight: "700",
});

function HeroSection({ headingSize = "text-6xl", heading, children, Img }) {
  return (
    <section className={`${cormorant.className}`}>
      <div className="relative w-full h-[430px] sm:h-[500px] md:h-[600px] [text-shadow:_2px_2px_6px_rgba(0,0,0,0.3)] ">
        <Image src={Img} width={500} height={500} priority alt=" Hero section image" className="w-full h-full object-cover" />

        <div className="absolute  inset-0 bg-black/30" />

        <div className="absolute top-64 sm:top-80 md:top-96  transform -translate-y-1/2  text-primary-50 px-4 text-center sm:px-8 md:px-16">
          <h1 data-aos="zoom-out" className={`${headingSize}  font-bold sm:text-7xl md:text-8xl`}>
            {heading}
          </h1>
          <p data-aos="fade-up" className="mt-2 text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] ">
            {children}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
