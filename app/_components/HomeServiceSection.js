import ServiceCard from "./ServiceCard";
import Air from "@/assets/air-freight.jpg";
import Sea from "@/assets/sea-freight.png";

import { Anchor, ArrowUpRight, Boxes, Plane, Truck } from "lucide-react";

function HomeServiceSection() {
  return (
    <section className="px-4 py-10 sm:px-8 lg:p-12 xl:p-16">
      <div className="grid grid-cols-1 gap-6 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
        <ServiceCard img={Air} Icon={Plane} hrefPath="/logistics-services/air-freight" freight="Air Freight ">
          For urgent international shipments, our Air Freight service guarantees fast, safe, and efficient delivery through trusted global airline
          networks.
        </ServiceCard>

        <ServiceCard img="/tesla-express-cargo-express.png" Icon={ArrowUpRight} hrefPath="/logistics-services/express" freight="Express Courier">
          Our Express Courier service provides fast, secure delivery for time-sensitive documents and parcels, ensuring same-day or next-day arrival.
        </ServiceCard>

        <ServiceCard img="/tesla-express-cargo-road.png" Icon={Truck} hrefPath="/logistics-services/road-transport" freight="Road Transport ">
          Reliable ground transport for domestic shipments, offering scheduled, cost-effective, and secure delivery across all major regions.
        </ServiceCard>

        <ServiceCard img="/tesla-express-cargo-sea.png" Icon={Anchor} hrefPath="/logistics-services/sea-freight" freight="Sea Freight">
          Secure storage and inventory management solutions with flexible space, real-time tracking, and easy access to your goods whenever needed.
        </ServiceCard>

        <ServiceCard img="/tesla-express-cargo-warehousing.png" Icon={Boxes} hrefPath="/logistics-services/warehousing" freight="Warehousing">
          Secure storage and inventory management solutions with flexible space, real-time tracking, and easy access to your goods whenever needed.
        </ServiceCard>
      </div>
    </section>
  );
}

export default HomeServiceSection;
