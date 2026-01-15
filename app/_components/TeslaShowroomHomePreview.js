import { ArrowRight, Zap } from "lucide-react";
import FeaturedCardCard from "./FeaturedCardCard";
import Link from "next/link";

function TeslaShowroomHomePreview() {
  const featuredCars = [
    {
      id: 1,
      model: "Model S",
      description: "The flagship sedan with unparalleled performance, range, and luxury for the ultimate driving experience.",
      price: 74990,
      image: "/model-s-1.png",
      badge: "Best Seller",
      stats: [
        { value: "405mi", label: "Range" },
        { value: "3.1s", label: "0-60mph" },
        { value: "200mph", label: "Top Speed" },
      ],
    },
    {
      id: 2,
      model: "Model 3",
      description: "The most affordable Tesla combining efficiency, technology, and performance in a sleek package.",
      price: 40240,
      image: "/model-3-1.png",
      badge: "Popular",
      stats: [
        { value: "358mi", label: "Range" },
        { value: "3.1s", label: "0-60mph" },
        { value: "162mph", label: "Top Speed" },
      ],
    },
    {
      id: 3,
      model: "Model X",
      description: "The safest and quickest SUV featuring falcon wing doors and exceptional versatility for families.",
      price: 79990,
      image: "/model-x-1.png",
      badge: "Premium",
      stats: [
        { value: "348mi", label: "Range" },
        { value: "3.8s", label: "0-60mph" },
        { value: "7", label: "Seats" },
      ],
    },

    {
      id: 4,
      model: "Tesla Robotaxi",
      description: "Fully autonomous electric vehicle designed for ride-hailing, optimized for safety, efficiency, and zero-driver operation.",
      price: 30000,
      image: "/tesla-robotaxi.png",
      badge: "Autonomous",
      stats: [
        { value: "FSD", label: "Autonomy" },
        { value: "AI-Driven", label: "Navigation" },
        { value: "4", label: "Passengers" },
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-4 sm:mb-6">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 fill-red-600" />
            <span className="text-xs sm:text-sm font-semibold text-red-600">Electric Vehicles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 tracking-tight">
            Drive the Future Today
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4 leading-relaxed">
            Experience the power of sustainable luxury. Discover our collection of premium electric vehicles designed to revolutionize your journey.
          </p>

          <Link
            href="/tesla-showroom"
            className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl sm:rounded-2xl text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/50 active:scale-95"
          >
            <span>Explore All Vehicles</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
          {featuredCars.map((car) => (
            <FeaturedCardCard key={car.id} car={car} />
          ))}
        </div>

        <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-red-600 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-1">Zero Emissions</h4>
                <p className="text-xs sm:text-sm text-gray-400">100% electric, 0% carbon footprint</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-1">Instant Power</h4>
                <p className="text-xs sm:text-sm text-gray-400">Instant torque, thrilling acceleration</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-1">Safety First</h4>
                <p className="text-xs sm:text-sm text-gray-400">5-star safety rating across all models</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
            Join thousands of drivers who&apos;ve made the switch to sustainable luxury. Schedule a test drive today.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TeslaShowroomHomePreview;
