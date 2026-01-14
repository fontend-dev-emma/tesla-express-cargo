import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  style: "italic",
  weight: "700",
});

function HeroText() {
  return (
    <div className=" " data-aos="fade-up">
      <div className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-50 ">
        <p className=" text-center" data-aos="zoom-in">
          Effortless Shipping,
        </p>

        <p className="text-center font-bold" data-aos="zoom-in">
          <span>Rapid </span>
          <span
            className={`bg-gradient-to-br from-orange-700 via-orange-500 to-amber-400 bg-clip-text text-transparent font-semibold ${cormorant.className}`}
          >
            Delivery
          </span>
        </p>
      </div>

      <div className="px-8 py-4 xl:mb-8 text-sm text-center font-normal mx-auto text-primary-300 xl:text-[1rem]">
        From pickup to drop-off — powered, precise, and on time.
      </div>
    </div>
  );
}

export default HeroText;
