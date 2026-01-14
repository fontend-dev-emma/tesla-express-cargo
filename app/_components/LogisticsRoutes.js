import RoutesPath from "@/app/_components/RoutesPath";
import { FileText, FileUp, Send, Truck } from "lucide-react";

function LogisticsRoutes() {
  return (
    <section className="mt-6 sm:mt-10 pt-8 lg:px-20 lg:py-16">
      <h4 className="text-2xl text-center sm:text-4xl lg:text-5xl " data-aos="fade-up">
        Optimized Intelligent Route
      </h4>
      <p data-aos="fade-up" className="text-[0.75rem] mt-2 sm:m-4 lg:m-8 px-4 text-primary-600 sm:text-[1.12rem]  text-center">
        We analyze traffic patterns and use AI-driven mapping to ensure faster, more cost-effective delivery routes.
      </p>

      <div className="sm:grid grid-cols-2 xl:grid-cols-3 ">
        <div data-aos="fade-up">
          <RoutesPath route="01" Icon={Send} heading="Apply Online">
            <span>
              Easily start your shipment process by filling out our simple online application. Get instant access to tailored logistics solutions
              without stress.
            </span>
          </RoutesPath>
        </div>

        <div data-aos="fade-up">
          <RoutesPath route="02" Icon={FileText} heading="Submit Documents">
            <span>Securely upload all required documents in just a few clicks, ensuring smooth processing and compliance for your shipment.</span>
          </RoutesPath>
        </div>

        <div data-aos="fade-up">
          <RoutesPath route="03" Icon={Truck} heading="Recieve Goods ">
            <span>Sit back and relax as we deliver your goods safely and on time, straight to your doorstep or preferred location.</span>
          </RoutesPath>
        </div>
      </div>
    </section>
  );
}

export default LogisticsRoutes;
