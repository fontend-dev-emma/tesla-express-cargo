import { DoorClosed, Globe, Zap } from "lucide-react";
import Button from "./Button";
import ServiceItem from "./ServiceItem";
import Link from "next/link";

function HomeServices() {
  return (
    <section className="mt-16 sm:px-4 xl:px-10 xl:mt-20 ">
      <div className=" grid grid-cols-1 sm:grid-cols-2  xl:mx-5 gap-5 ">
        <h2 className="text-3xl sm:text-[1.9rem] px-2   font-semibold">Comprehensive Logistics Services</h2>

        <p className=" text-left mx-2 text-[0.8rem] text-primary-600 leading-relaxed break-words sm:col-start-2 sm:row-start-2 sm:text-[0.8rem]  ">
          We deliver reliability with cutting-edge technology, real time tracking, and a commitment to on-time performance, ensuring seamless
          logistics solutions.
        </p>

        <div className=" justify-center mx-4 sm:my-2 sm:mx-12 sm:justify-end  ">
          <Link href="/logistics-services">
            <Button
              textColor="text-primary-50 "
              bgColor="bg-accent-600 transition-colors duration-300 ease-in-out 
               hover:bg-accent-700"
              size="large"
            >
              View all Services
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3  sm:mt-5 md:mt-8 lg:mt-12">
        <ServiceItem Icon={Zap} heading="Express Shipping">
          Our Express Shipping ensures fast and reliable delivery for time-sensitive packages, keeping your business and customers on schedule.
        </ServiceItem>

        <ServiceItem Icon={DoorClosed} heading="Door-to-Door Delivery">
          Door-to-Door Delivery provides convenience by picking up goods from your location and delivering them directly to the recipient&apos;s
          doorstep.
        </ServiceItem>

        <ServiceItem Icon={Globe} heading="International Shipping">
          With International Shipping, we connect you across borders, handling customs and ensuring your cargo arrives safely and on time worldwide.
        </ServiceItem>
      </div>
    </section>
  );
}

export default HomeServices;
