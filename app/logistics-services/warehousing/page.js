import CenterTextParagraph from "@/app/_components/CenterTextParagraph";
import ContactForm from "@/app/_components/ContactForm";
import HeroSection from "@/app/_components/HeroSection";
import HowStep from "@/app/_components/HowStep";
import ServiceItem from "@/app/_components/ServiceItem";
import Img from "@/assets/warehousing-hero-img.jpg";
import Img2 from "@/assets/warehousing-img.jpg";
import { Boxes, PackageSearch, ShieldCheck, Warehouse } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Warehousing | Tesla Express Cargo",
  description: "Safe and flexible storage solutions for your inventory.",
};

function page() {
  return (
    <div className="mx-auto mb-20">
      <HeroSection heading="Warehousing" Img="/tesla-express-cargo-warehousing.png">
        Safe, organized, and scalable storage solutions for your goods.
      </HeroSection>

      <section data-aos="fade-up" className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 py-20 lg:py-24 lg:px-14 xl:px-2">
        <div className="space-y-6 text-center xl:space-y-10">
          <h2 className="text-3xl font-extrabold sm:text-5xl xl:text-6xl">Seamless Storage & Fulfillment</h2>

          <CenterTextParagraph>
            Our warehousing and distribution solutions empower businesses with efficient inventory management and reliable order fulfillment. We
            ensure your products are stored in secure, climate-controlled environments with full visibility.
          </CenterTextParagraph>

          <CenterTextParagraph>
            From storage to last-mile delivery, our advanced systems and dedicated logistics team optimize every step, ensuring your goods are
            delivered accurately and on time.
          </CenterTextParagraph>
        </div>
      </section>

      <section>
        <h2 className="text-center text-2xl font-bold mb-4 sm:text-3xl md:text-4xl xl:text-5xl">Why Choose Our Warehousing & Fulfillment</h2>
        <p className="text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] xl:text-[1rem] text-center text-primary-600">
          Discover the core strengths that make our Sea freight reliable and efficient.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:mt-7">
          <ServiceItem Icon={Warehouse} heading="Secure Storage">
            Store your goods in climate-controlled, access-restricted facilities designed to maintain product integrity and prevent damage or loss.
          </ServiceItem>

          <ServiceItem Icon={Boxes} heading="Inventory Management">
            Our advanced inventory systems provide accurate stock tracking, efficient organization, and seamless integration with your order systems.
          </ServiceItem>

          <ServiceItem Icon={PackageSearch} heading="Fast Fulfillment">
            Monitored and sealed containers from port to port.
          </ServiceItem>

          <ServiceItem Icon={ShieldCheck} heading="24/7 Surveillance">
            Comprehensive security systems, including cameras, alarms, and on-site personnel, protect your inventory at all times.
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
              src="/tesla-express-cargo-about-img-1.png"
              width={500}
              height={500}
              alt="air freight how section image"
              className="rounded-xl w-full  h-auto md:h-[350px]"
            />
          </div>

          <div className="grid grid-cols-1 md:p-4 space-y-5 md:w-1/2 md:overflow-y-auto">
            <HowStep StepNum="01" step="Goods Reception">
              Verification on arrival prevents inventory errors and confirms product condition.
            </HowStep>
            <HowStep StepNum="02" step="Inventory Monitoring">
              Real-time tracking avoids stockouts and overstock, improving efficiency.
            </HowStep>
            <HowStep StepNum="03" step="Order Picking & Packing">
              Accurate picking reduces order errors and ensures customer satisfaction.
            </HowStep>
            <HowStep StepNum="04" step="Dispatch & Restocking">
              Smooth dispatch keeps supply chains flowing and triggers timely restocking alerts.
            </HowStep>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

export default page;
