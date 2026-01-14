"use client";

import { useState } from "react";
import CarCard from "./CarCard";
import TeslaCarStoreSectionHeader from "./TeslaCarStoreSectionHeader";
import TeslaCarStoreSectionToast from "./TeslaCarStoreSectionToast";
import { cars } from "../_utils/helpers";
import { UseAllCompanySettings } from "../_queryHooks/UseAllCompanySettings";

function TeslaCarStoreShowroom() {
  const [toast, setToast] = useState(null);

  const { allSettings } = UseAllCompanySettings();

  function handleBuyNow(car) {
    setToast(
      `Thank you for your interest in the ${car.model}! Please contact our support team at ${allSettings?.companyEmail} or call 1-800-TESLA-01 to complete your purchase. Our specialists are ready to assist you.`
    );
    setTimeout(() => setToast(null), 10000);
  }

  return (
    <section className="min-h-screen bg-black py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <TeslaCarStoreSectionHeader
          title="Tesla Showroom"
          subtitle="Electric. Efficient. Extraordinary."
          description="Discover the future of sustainable transportation. Each Tesla vehicle combines cutting-edge technology with uncompromising performance and zero emissions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} onBuyNow={handleBuyNow} />
          ))}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <p className="text-xs sm:text-sm lg:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            All prices shown are estimated starting prices. Final pricing may vary based on configuration, location, and available incentives. Contact
            us for a personalized quote.
          </p>
        </div>
      </div>

      {toast && <TeslaCarStoreSectionToast message={toast} onClose={() => setToast(null)} />}
    </section>
  );
}

export default TeslaCarStoreShowroom;
