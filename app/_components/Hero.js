import Link from "next/link";
import Button from "./Button";
import HeroText from "./HeroText";

function Hero() {
  return (
    <section className="relative  min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted playsInline className=" w-full h-full object-cover brightness-75">
          <source src="tesla-express-cargo-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <HeroText />
        <div className="flex flex-col sm:mt-2 sm:justify-center sm:flex-row gap-3 items-center">
          <Button textColor="text-primary-100" bgColor="bg-accent-700 hover:bg-accent-800" size="small">
            <Link href="/track-shipment"> Track Shipment</Link>
          </Button>
          <Button textColor="text-accent-600" bgColor="bg-white hover:bg-gray-100 border border-accent-600" size="small">
            <Link href="/contact-us" className="font-medium">
              Contact Us
            </Link>
          </Button>
        </div>
        ;
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

export default Hero;
