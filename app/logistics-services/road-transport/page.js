import CenterTextParagraph from "@/app/_components/CenterTextParagraph";
import ContactForm from "@/app/_components/ContactForm";
import HeroSection from "@/app/_components/HeroSection";
import HowStep from "@/app/_components/HowStep";
import ServiceItem from "@/app/_components/ServiceItem";
import Img from "@/assets/land-hero-img.jpg";
import Img2 from "@/assets/land-img.jpg";
import { CalendarCheck, Clock, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Road Freight | Tesla Express Cargo",
  description: "Secure and timely road transportation for your shipments.",
};

function page() {
  return (
    <div className="mx-auto mb-20">
      <HeroSection heading="Road Transport" Img="/tesla-express-cargo-road-img-2.png">
        Reliable road transport connecting cities with precision.
      </HeroSection>

      <section data-aos="fade-up" className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 py-20 lg:py-24 lg:px-14 xl:px-2">
        <div className="space-y-6 text-center xl:space-y-10">
          <h2 className="text-3xl font-extrabold sm:text-5xl xl:text-6xl">Dependable Road Logistics</h2>

          <CenterTextParagraph>
            Our standard delivery service ensures dependable road transportation designed for everyday logistics needs. We connect businesses to local
            and regional destinations with consistent scheduling and reliable performance.
          </CenterTextParagraph>

          <CenterTextParagraph>
            With a robust network of trusted carriers and optimized delivery routes, we provide cost-effective solutions that maintain the highest
            standards of safety, punctuality, and customer satisfaction.
          </CenterTextParagraph>
        </div>
      </section>

      <section>
        <h2 className="text-center text-2xl font-bold mb-4 sm:text-3xl md:text-4xl xl:text-5xl">Why Choose Our Road Transport</h2>
        <p className="text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] xl:text-[1rem] text-center text-primary-600">
          Discover the core strengths that make our Road transport reliable and efficient.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:mt-7">
          <ServiceItem Icon={Clock} heading="On-Time Delivery">
            Benefit from precisely scheduled pickups and route optimization that minimize delays and keep your supply chain running smoothly.
          </ServiceItem>

          <ServiceItem Icon={Truck} heading="Nationwide Reach">
            Deliver goods reliably across cities, industrial hubs, and rural regions using our extensive fleet and well-coordinated regional network.
          </ServiceItem>

          <ServiceItem Icon={ShieldCheck} heading="Cargo Protection">
            Fragile or sensitive shipments are safeguarded with reinforced packaging and secure loading methods to prevent damage in transit.
          </ServiceItem>
          <ServiceItem Icon={CalendarCheck} heading="Flexible Routing">
            We adapt to your logistics needs with customized pickup and drop-off locations, offering full control over your delivery routes.
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
            <Image
              src="/tesla-express-cargo-road-img-1.png"
              alt="road transport how section image"
              width={500}
              height={500}
              className="rounded-xl w-full  h-auto md:h-[350px]"
            />
          </div>

          <div className="grid grid-cols-1 md:p-4 space-y-5 md:w-1/2 md:overflow-y-auto">
            <HowStep StepNum="01" step="Order Scheduling">
              Clear scheduling aligns pickup times and avoids delivery conflicts or missed slots.
            </HowStep>
            <HowStep StepNum="02" step="En-Route Monitoring">
              GPS tracking guarantees route efficiency and allows instant updates on progress.
            </HowStep>
            <HowStep StepNum="03" step="Unloading & Delivery">
              Careful unloading avoids product damage and ensures correct delivery.
            </HowStep>
            <HowStep StepNum="04" step="Delivery Reports">
              Documentation provides accountability and records for future audits or claims.
            </HowStep>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

export default page;
