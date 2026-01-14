import Image from "next/image";
import { CompanyLogos } from "./CompanyLogos";

function TrustedCompanyLogos() {
  return (
    <section className="w-full overflow-hidden px-5 py-8" data-aos="zoom-in">
      <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
        {CompanyLogos.concat(CompanyLogos).map((logo, index) => (
          <div
            key={index}
            className="flex-none mx-4 sm:mx-6 w-40 h-20 sm:w-44 sm:h-24 xl:w-52 xl:h-32  relative grayscale hover:grayscale-0 transition"
          >
            <Image
              src={logo}
              fill
              alt={`Trusted company logo ${index}`}
              className="object-contain "
              sizes="(max-width: 900px) 100px, (max-width: 1280px) 200px, 250px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedCompanyLogos;
