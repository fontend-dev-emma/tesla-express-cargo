"use client";

import CountFiguresUp from "@/app/_components/CountFiguresUp";

import { useInView } from "react-intersection-observer";

function CompanyStatus() {
  return (
    <section data-aos="fade-up" className="pt-0">
      <div className="grid grid-cols-1 text-center gap-3 sm:gap-0 sm:grid-cols-3 ">
        <CountFiguresUp end={15000} label="Users" />
        <CountFiguresUp end={10000} label="Happy Customers" />
        <CountFiguresUp end={100000} label="Successful Deliveries" />
      </div>
    </section>
  );
}

export default CompanyStatus;
