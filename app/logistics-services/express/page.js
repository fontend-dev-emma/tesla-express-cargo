import CenterTextParagraph from "@/app/_components/CenterTextParagraph";
import ContactForm from "@/app/_components/ContactForm";
import HeroSection from "@/app/_components/HeroSection";
import HowStep from "@/app/_components/HowStep";
import ServiceItem from "@/app/_components/ServiceItem";
import { Clock, MapPin, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Express Delivery | Tesla Express Cargo",
  description: "Quick and dependable express delivery for urgent shipments.",
};

function page() {
  return (
    <div className="mx-auto mb-20">
      <HeroSection heading="Express Courier" Img="/tesla-express-cargo-express-img-1.png">
        Rapid deliveries, right to your doorstep—every time.
      </HeroSection>

      <section data-aos="fade-up" className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 py-20 lg:py-24 lg:px-14 xl:px-2">
        <div className="space-y-6 text-center xl:space-y-10">
          <h2 className="text-3xl font-extrabold sm:text-5xl xl:text-6xl">Tesla Express Cargo Road Solutions</h2>

          <CenterTextParagraph>
            When every moment counts, our express delivery service guarantees fast and secure road transport for your time-critical shipments. We
            prioritize speed without compromising the integrity of your goods.
          </CenterTextParagraph>

          <CenterTextParagraph>
            Leveraging dedicated vehicles, real-time tracking, and priority handling, we ensure your deliveries arrive safely, accurately, and well
            ahead of schedule.
          </CenterTextParagraph>
        </div>
      </section>

      <section>
        <h2 className="text-center text-2xl font-bold mb-4 sm:text-3xl md:text-4xl xl:text-5xl">Why Choose Our Express Courier</h2>
        <p className="text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] xl:text-[1rem] text-center text-primary-600">
          Discover the core strengths that make our Express courier reliable and efficient.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:mt-7">
          <ServiceItem Icon={Zap} heading="Ultra-Fast Service">
            Meet urgent deadlines with our same-day and next-day delivery options built for businesses that can’t afford to wait.
          </ServiceItem>

          <ServiceItem Icon={Clock} heading="Time-Sensitive Priority">
            Shipments are flagged for top-priority handling from the moment they are booked to ensure they move faster than standard deliveries.
          </ServiceItem>

          <ServiceItem Icon={MapPin} heading="Door-to-Door Coverage">
            Enjoy a seamless logistics experience from your warehouse directly to your customer’s doorstep with no middle stops or delays.
          </ServiceItem>

          <ServiceItem Icon={ShieldCheck} heading="Safe & Reliable">
            Even at high speed, we maintain strict safety and handling standards to deliver your goods quickly and securely every time.
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
              src="/tesla-express-cargo-express-img-2.png"
              alt="express courier how section image"
              width={500}
              height={500}
              className="rounded-xl w-full  h-auto md:h-[350px]"
            />
          </div>

          <div className="grid grid-cols-1 md:p-4 space-y-5 md:w-1/2 md:overflow-y-auto">
            <HowStep StepNum="01" step="Order Creation">
              Fast order processing ensures parcels enter the delivery network without delay.
            </HowStep>
            <HowStep StepNum="02" step="Rapid Transit">
              Prioritized routing guarantees urgent parcels arrive within strict deadlines.
            </HowStep>
            <HowStep StepNum="03" step="Last-Mile Delivery">
              Efficient last-mile logistics ensures parcels reach the correct recipient promptly.
            </HowStep>
            <HowStep StepNum="04" step="Proof of Delivery">
              Digital confirmation provides instant assurance and closes the transaction securely.
            </HowStep>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

export default page;
