import CenterTextParagraph from "@/app/_components/CenterTextParagraph";
import ContactForm from "@/app/_components/ContactForm";
import HeroSection from "@/app/_components/HeroSection";
import HowStep from "@/app/_components/HowStep";
import ServiceItem from "@/app/_components/ServiceItem";
import Img from "@/assets/sea-hero-img.jpg";
import Img2 from "@/assets/sea-img.jpg";
import { CalendarCheck, Container, ShieldCheck, Ship } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Sea Freight | Tesla Express Cargo",
  description: "Efficient sea shipping with reliable cargo handling.",
};

function page() {
  return (
    <div className="mx-auto mb-20">
      <HeroSection heading="Ocean Freight" Img={Img}>
        Secure maritime shipping across major ports worldwide.
      </HeroSection>

      <section data-aos="fade-up" className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 py-20 lg:py-24 lg:px-14 xl:px-2">
        <div className="space-y-6 text-center xl:space-y-10">
          <h2 className="text-3xl font-extrabold sm:text-5xl xl:text-6xl ">Trusted Sea Logistics</h2>

          <CenterTextParagraph>
            Our ocean freight service is ideal for large-scale, high-volume shipments, offering a dependable and cost-efficient way to move goods
            across international waters. We handle everything from containerized cargo to bulk freight with precision.
          </CenterTextParagraph>

          <CenterTextParagraph>
            Through strategic partnerships with major shipping lines, we provide flexible scheduling, secure handling, and streamlined port-to-port
            delivery backed by expert documentation support.
          </CenterTextParagraph>
        </div>
      </section>

      <section>
        <h2 className="text-center text-2xl font-bold mb-4 sm:text-3xl md:text-4xl xl:text-5xl">Why Choose Our Sea Freight</h2>
        <p className="text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] xl:text-[1rem] text-center  text-primary-600">
          Discover the core strengths that make our Sea freight reliable and efficient.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:mt-7">
          <ServiceItem Icon={Ship} heading="Cost-Effective Shipping">
            Move large or heavy shipments at a fraction of air freight costs through our extensive sea network covering all major international ports.
          </ServiceItem>

          <ServiceItem Icon={Container} heading="Large Capacity">
            Transport oversized equipment or consolidated cargo efficiently in fully managed shipping containers built for maximum space utilization.
          </ServiceItem>

          <ServiceItem Icon={ShieldCheck} heading="Reliable Security">
            Every container is sealed, tracked, and monitored to ensure the safety and integrity of your goods from port of origin to destination.
          </ServiceItem>

          <ServiceItem Icon={CalendarCheck} heading="Scheduled Departures">
            Fixed sailing schedules let you plan ahead and maintain consistent delivery timelines for your global supply chain.
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
            <HowStep StepNum="01" step="Shipment Booking">
              Early booking secures vessel space and ensures compliance with maritime shipping regulations.
            </HowStep>
            <HowStep StepNum="02" step="Ocean Transit & Monitoring">
              Continuous monitoring ensures vessels follow optimal routes and timelines.
            </HowStep>
            <HowStep StepNum="03" step="Port Clearance & Duty Processing">
              Handling duties and inspections promptly prevents port congestion delays.
            </HowStep>
            <HowStep StepNum="04" step="Inland Delivery">
              Coordinated trucking ensures your goods move smoothly from port to final destination.
            </HowStep>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

export default page;
