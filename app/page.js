import AwardeeSection from "./_components/AwardeeSection.js";
import CompanyStatus from "./_components/CompanyStatus.js";
import ContactForm from "./_components/ContactForm.js";
import Hero from "./_components/Hero.js";
import HomeServices from "./_components/HomeServices.js";
import HomeServiceSection from "./_components/HomeServiceSection.js";
import LogisticsRoutes from "./_components/LogisticsRoutes.js";
import SupplyChainHighlight from "./_components/SupplyChainHighlight.js";
import TeslaShowroomHomePreview from "./_components/TeslaShowroomHomePreview.js";
import TestimonialsSection from "./_components/TestimonialsSection.js";
import TrustedCompanyLogos from "./_components/TrustedCompanyLogos.js";
import WhySection from "./_components/WhySection.js";

export const metadata = {
  title: "Home || Realiable & Fast Delivery | Tesla Express Cargo",
  description:
    "Secure and affordable logistics for nationwide and international shipping. Track parcels and enjoy on-time delivery with Tesla Express Cargo",
};

export default function Home() {
  return (
    <div className="mx-auto">
      <Hero />
      <TrustedCompanyLogos />

      <HomeServiceSection />
      <HomeServices />

      <WhySection />
      <AwardeeSection />

      <SupplyChainHighlight />
      <CompanyStatus />

      <TestimonialsSection />

      <TeslaShowroomHomePreview />

      <LogisticsRoutes />

      <ContactForm />
    </div>
  );
}
