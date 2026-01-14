import CenterTextParagraph from "@/app/_components/CenterTextParagraph";
import ContactForm from "@/app/_components/ContactForm";
import HeroSection from "@/app/_components/HeroSection";
import HowStep from "@/app/_components/HowStep";
import ServiceItem from "@/app/_components/ServiceItem";
import Img from "@/assets/air-hero-img.jpg";
import Img2 from "@/assets/air-img.jpg";
import { Headset, Radar, Rocket, ShieldCheck } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Air Freight | Tesla Express Cargo",
  description: "Fast and reliable air shipment with real-time tracking.",
};

function page() {
  return (
    <div className="mx-auto mb-20">
      <HeroSection heading="Air Freight" Img={Img}>
        Global reach at unmatched speed. Fly your cargo worldwide.
      </HeroSection>

      <section data-aos="fade-up" className=" mx-auto px-2 sm:px-4 md:px-6 py-20 lg:py-24 lg:px-14 xl:px-2">
        <div className="space-y-6 text-center xl:space-y-10">
          <h2 className="text-3xl font-extrabold sm:text-5xl xl:text-6xl  ">Fast Global Airlift</h2>

          <CenterTextParagraph>
            Our air freight solutions connect your business to global markets with unmatched speed and reliability. Whether it’s time-sensitive
            parcels or high-value cargo, we ensure your shipments reach their destination safely and on schedule.
          </CenterTextParagraph>

          <CenterTextParagraph>
            With access to major international airports and a dedicated support team, we offer a seamless end-to-end delivery experience tailored to
            your specific logistics needs.
          </CenterTextParagraph>
        </div>
      </section>

      <section className="mb-10">
        <h2
          className="text-center text-2xl font-bold mb-4 sm:text-3xl md:text-4xl xl:text-5xl
         "
        >
          Why Choose Our Air Freight
        </h2>
        <p className="text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] xl:text-[1rem] text-center text-primary-600">
          Discover the core strengths that make our Air freight reliable and efficient.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:mt-7">
          <ServiceItem Icon={Rocket} heading="Fast Transit Times">
            Ship your cargo across continents in record time with our optimized global air routes designed to minimize transit delays and ensure
            consistent delivery speed.
          </ServiceItem>

          <ServiceItem Icon={Headset} heading="Dedicated Support">
            Our expert logistics team is available 24/7 to handle inquiries, resolve issues, and ensure a seamless experience from booking to
            delivery.
          </ServiceItem>

          <ServiceItem Icon={Radar} heading="Real-Time Tracking">
            Stay informed with live shipment monitoring that provides location and status updates from departure to arrival, giving you total
            visibility and peace of mind.
          </ServiceItem>
          <ServiceItem Icon={ShieldCheck} heading="Secure Handling">
            We implement strict safety protocols and advanced packaging methods to protect high-value and sensitive cargo throughout the entire
            transport process.
          </ServiceItem>
        </div>
      </section>

      <section data-aos="fade-up" className="px-2 sm:px-10 md:px-4 xl:px-12 2xl:px-28">
        <h2 className="text-center text-2xl font-bold mb-4 sm:text-3xl md:text-4xl xl:text-5xl">How It Works</h2>
        <p className="text-[0.85rem] mb-6 sm:text-[0.9rem] md:text-[0.95rem] xl:text-[1rem] text-center text-primary-700">
          A simple step-by-step process ensuring smooth and reliable delivery.
        </p>

        <div className="flex flex-col w-full md:h-[350px] md:flex-row md:mt-12 md:gap-6  ">
          <div className=" mx-2 my-8 md:m-0  md:w-1/2 ">
            <Image src={Img2} alt="air freight how section image" className="rounded-xl w-full  h-auto md:h-[350px]" />
          </div>

          <div className="grid grid-cols-1 md:p-4 space-y-5 md:w-1/2 md:overflow-y-auto">
            <HowStep StepNum="01" step="Booking & Documentation">
              Accurate booking and paperwork ensure your cargo meets international aviation regulations and avoids customs delays.
            </HowStep>
            <HowStep StepNum="02" step="Air Transit & Tracking">
              Real-time tracking builds trust and allows quick responses to any flight schedule changes.
            </HowStep>
            <HowStep StepNum="03" step="Customs Clearance">
              Timely clearance minimizes airport storage fees and keeps deliveries on schedule.
            </HowStep>
            <HowStep StepNum="04" step="Delivery Confirmation">
              Proof of delivery closes the logistics chain and confirms your shipment’s safe arrival.
            </HowStep>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

export default page;
