"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function CarCard({ car, onBuyNow }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-red-600/50 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
        <Image
          src={car.image}
          alt={car.model}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {car.badge && (
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 py-1 sm:px-4 sm:py-1.5 bg-red-600 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg">
            {car.badge}
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-tight">{car.model}</h3>

        <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-4 sm:mb-6 line-clamp-2 leading-relaxed">{car.description}</p>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
          {car.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-zinc-800">
          <div>
            <p className="text-xs sm:text-sm text-gray-500 mb-1">Starting at</p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">${car.price.toLocaleString()}</p>
          </div>
          <button
            onClick={() => onBuyNow(car)}
            className="w-full sm:w-auto group/btn flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/50 active:scale-95"
          >
            <span className="text-sm sm:text-base">Buy A Tesla Now</span>
            <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
