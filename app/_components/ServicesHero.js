import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  style: "italic",
  weight: "700",
});

function ServicesHero() {
  return (
    <section className={` mb-16 ${cormorant.className} `}>
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] items-center">
        <video src="/tesla-express-cargo-video-1.MP4" autoPlay muted loop playsInline className="w-full h-full object-cover " />

        <div className="absolute  inset-0 bg-black/20" />

        <div className="absolute top-14 sm:top-24 lg:top-32 xl:top-36 left-1 text-primary-50 text-center mt-4   mx-6 [text-shadow:_2px_2px_6px_rgba(0,0,0,0.5)] ">
          <h1 className="text-[2rem] mb-4 sm:mb-8 xl:mb-10 sm:text-6xl  md:text-7xl lg:text-8xl xl:text-9xl  ">
            Tesla Express Cargo. Built for the World
          </h1>
          <p
            className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] xl:text-[2rem] xl:mx-12
          "
          >
            From road to ocean, air to warehousing — we power seamless logistics with speed, precision, and full real-time visibility.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
