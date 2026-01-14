import SectionImage from "@/assets/img-1.png";
import Image from "next/image";
import HeadersWithExpression from "./HeadersWithExpression";

function WhySection() {
  return (
    <section className="px-3 sm:px-6 xl:px-12 space-y-6 xl:py-10 sm:grid sm:grid-cols-2">
      <div className="mb-5 ">
        <h3 className=" sm:text-left sm:text-[1.78rem]  font-bold text-2xl text-center mb-3 mt-8">What Sets Us Apart</h3>
        <p className="text-[0.7rem] sm:text-[0.9rem]  text-primary-600 mx-auto">
          We deliver reliability with cutting-edge technology, real-time tracking, and a commitment to on-time performance, ensuring seamless
          logistics solutions.
        </p>
      </div>

      <div className="sm:col-start-1 sm:row-start-2 " data-aos="fade-left">
        <HeadersWithExpression />
      </div>

      <div className="sm:col-start-2 sm:row-start-2 ml-4 " data-aos="fade-right">
        <Image src={SectionImage} className="rounded-xl" alt="logistics container ship " />
      </div>
    </section>
  );
}

export default WhySection;
