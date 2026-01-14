import { Zap, ArrowRight, Star } from "lucide-react";

// ============= COMPONENTS =============

// Featured Car Card Component
function FeaturedCarCard({ car }) {
  return (
    <div className="group relative bg-white border border-gray-200 hover:border-red-500/50 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img src={car.image} alt={car.model} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Badge */}
        {car.badge && (
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-red-600 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg flex items-center gap-1.5">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-white" />
            {car.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 lg:p-8">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{car.model}</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">{car.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6 py-4 border-t border-b border-gray-200">
          {car.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xs sm:text-sm text-gray-500">Starting at</span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">${car.price.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

// ============= MAIN COMPONENT =============

function TeslaHomePreview() {
  const featuredCars = [
    {
      id: 1,
      model: "Model S",
      description: "The flagship sedan with unparalleled performance, range, and luxury for the ultimate driving experience.",
      price: 74990,
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1583267746897-c071b11d9d7d?w=800&q=80",
      badge: "Premium",
      stats: [
        { value: "348mi", label: "Range" },
        { value: "3.8s", label: "0-60mph" },
        { value: "7", label: "Seats" },
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

          {/* CTA Button */}
          <button className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl sm:rounded-2xl text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/50 active:scale-95">
            <span>Explore All Vehicles</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Featured Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
          {featuredCars.map((car) => (
            <FeaturedCarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Features Banner */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
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

        {/* Footer Text */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
            Join thousands of drivers who&apos;ve made the switch to sustainable luxury. Schedule a test drive today.
          </p>
        </div>
      </div>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

export default TeslaHomePreview;
