import Img3 from "@/assets/about-vision-img.jpg";
import Img4 from "@/assets/about-wwd-img.jpg";
import { Briefcase, Cpu, Layers, LifeBuoy } from "lucide-react";
import Image from "next/image";
import AboutFeature from "../_components/AboutFeature";
import CenterTextParagraph from "../_components/CenterTextParagraph";
import HeroSection from "../_components/HeroSection";

export const metadata = {
  title: "About Us | Tesla Express Cargo",
  description: "Tesla Express Cargo is a trusted logistics partner, delivering reliable shipping solutions with a focus on customer satisfaction.",
};

function page() {
  return (
    <div>
      <HeroSection headingSize="text-5xl" heading="Tesla Express Cargo Connections. Rapid Growth." Img="/tesla-express-cargo-about-img-2.png">
        At Tesla Express Cargo, we connect innovation with opportunity. Delivering smart solutions that help businesses thrive in a fast-changing
        world.
      </HeroSection>

      <section data-aos="fade-up" className="px-2 my-10 sm:px-6 md:px-10 md:my-16 xl:px-20 xl:my-24  ">
        <h3 className="text-center mb-4 text-3xl font-bold">Our Story</h3>
        <div className=" space-y-6 ">
          <CenterTextParagraph>
            Tesla Express Cargo was founded with a bold vision, to redefine how businesses engage with technology and with each other.
          </CenterTextParagraph>

          <CenterTextParagraph>
            What began as a small team of passionate innovators has grown into a trusted partner for organizations seeking smarter, faster, and more
            efficient digital solutions. Over the years, we have earned our reputation for delivering value through strategic insight, technical
            expertise, and unwavering dedication to client success.
          </CenterTextParagraph>

          <CenterTextParagraph>
            Today, Tesla Express Cargo stands as a dynamic force in the industry, blending creativity, innovation, and technology to move businesses
            forward.
          </CenterTextParagraph>
        </div>
      </section>

      <section data-aos="fade-up" className="px-4 sm:px-8 my-10 md:my-10 lg:my-16 lg:px-10 xl:px-20">
        <div className="md:flex md:flex-row gap-8 md:gap-10">
          <div className="mb-2 md:flex-1">
            <Image src="/tesla-express-cargo-about-img-1.png" width={500} height={500} className="rounded-xl" alt="Our misson section image" />
          </div>

          <div className=" space-y-4 md:flex-1 xl:my-10">
            <h3 className="text-center mx-4 my-4 text-2xl sm:text-3xl md:my-1 lg:my-6 lg:text-4xl font-bold">Our Mission</h3>

            <CenterTextParagraph>
              To empower businesses and communities through innovative solutions that drive growth, efficiency, and meaningful connections.
            </CenterTextParagraph>
            <CenterTextParagraph>
              We are committed to delivering exceptional services and products that help our clients stay ahead of the curve, adapt to changing
              markets, and achieve lasting impact.
            </CenterTextParagraph>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="px-4 my-4 sm:my-14 md:my-20 sm:px-8 lg:my-28 lg:px-12 xl:px-20">
        <div className="md:flex md:flex-row gap-8">
          <div className="mb-2 md:flex-1 md:order-2">
            <Image src={Img3} className="rounded-xl" alt="Our Vision section image" />
          </div>

          <div className=" space-y-4 md:flex-1 md:order-1 lg:my-10 xl:my-16">
            <h3 className="text-center m-4 sm:mt-6 md:mt-2 text-2xl sm:text-3xl font-bold">Our Vision</h3>

            <CenterTextParagraph>
              To be a global leader in digital innovation — transforming industries, empowering people, and shaping the future of connected business.
            </CenterTextParagraph>
            <CenterTextParagraph>
              We envision a world where every organization, regardless of size or industry, can harness the power of technology to achieve its
              greatest potential.
            </CenterTextParagraph>
          </div>
        </div>
      </section>

      <section className="px-4 py-12  flex flex-col gap-10 bg-sky-50   lg:flex-row lg:gap-5 xl:py-24 xl:px-20">
        <div className="relative [text-shadow:_2px_2px_6px_rgba(0,0,0,0.3)] sm:mx-20 md:h-[500px] md:mx-28 lg:flex-1 lg:mx-3">
          <Image
            src={Img4}
            priority
            alt=" customers Gps shipment trackig image"
            className="w-full h-full object-cover lg:h-[650px] xl:h-[620px] rounded-3xl"
          />

          <div className="absolute rounded-3xl lg:h-[650px] xl:h-[620px] inset-0 bg-black/30" />

          <p className="absolute text-[0.9rem] shadow top-8 sm:top-12 left-5 sm:left-10 text-primary-50 py-2 px-4 border rounded-full bg-transparent sm:text-[1.1rem] ">
            What we Do
          </p>
          <p
            data-aos="fade-up"
            className="text-[0.8rem] sm:text-[0.95rem] text-primary-50 absolute top-24 sm:top-28 mx-4 sm:mx-6 md:mx-10 md:text-[1rem]"
          >
            At Tesla Express Cargo, we specialize in delivering end-to-end solutions that accelerate business performance and create lasting value.
          </p>
        </div>

        <div className="sm:flex sm:flex-wrap lg:flex-1">
          <div data-aos="fade-up" className="sm:w-1/2">
            <AboutFeature Icon={Layers} heading="Digital Transformation">
              Helping businesses embrace modern technologies to stay competitive and agile.
            </AboutFeature>
          </div>

          <div data-aos="fade-up" className="sm:w-1/2">
            <AboutFeature Icon={Briefcase} colored={true} heading="Strategic Consulting">
              Providing actionable insights and roadmaps tailored to each client’s unique goals.
            </AboutFeature>
          </div>

          <div data-aos="fade-up" className="sm:w-1/2 sm:order-4">
            <AboutFeature Icon={Cpu} heading="Technology Solutions">
              Designing and deploying robust digital platforms and tools for scalable growth.
            </AboutFeature>
          </div>

          <div data-aos="fade-up" className="sm:w-1/2 sm:order-3">
            <AboutFeature Icon={LifeBuoy} colored={true} heading="Ongoing Support">
              Offering continuous guidance and technical expertise to ensure long-term success.
            </AboutFeature>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
