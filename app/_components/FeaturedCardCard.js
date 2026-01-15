import { Star, Zap } from "lucide-react";
import Image from "next/image";
import { formatUSD } from "../_utils/helpers";

function FeaturedCardCard({ car }) {
  return (
    <div className="group  relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-red-500/60 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/30 hover:-translate-y-2">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10"></div>
      </div>

      <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-950">
        <Image
          src={car.image}
          alt={car.model}
          width={800}
          height={600}
          className="w-full h-full object-cover scale-5 transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        {car.badge && (
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs sm:text-sm font-bold rounded-full shadow-xl shadow-red-600/50 flex items-center gap-1.5 backdrop-blur-sm border border-red-400/20">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-white" />
            {car.badge}
          </div>
        )}

        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-400/20">
          <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
        </div>
      </div>

      <div className="relative p-5 sm:p-6 lg:p-8">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-tight">{car.model}</h3>

        <p className="text-sm sm:text-base text-gray-400 mb-5 sm:mb-6 line-clamp-2 leading-relaxed">{car.description}</p>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6 py-4 sm:py-5 border-t border-b border-zinc-800">
          {car.stats.map((stat, index) => (
            <div key={index} className="text-center group/stat">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 group-hover/stat:text-red-400 transition-colors">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <p className="text-xs sm:text-sm text-gray-500 mb-1">Starting at</p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {formatUSD(car.price)}
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400 font-medium whitespace-nowrap">Available Now</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

export default FeaturedCardCard;
