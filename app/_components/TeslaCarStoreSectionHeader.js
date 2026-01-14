import { Zap } from "lucide-react";

function TeslaCarStoreSectionHeader({ title, subtitle, description }) {
  return (
    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
      <div className="flex justify-center mb-4 sm:mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-red-600/30 rounded-full blur-2xl"></div>
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/40">
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white fill-white" />
          </div>
        </div>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 tracking-tight">{title}</h2>
      <p className="text-base sm:text-lg lg:text-xl text-red-400 font-semibold mb-3 sm:mb-4 lg:mb-6">{subtitle}</p>
      <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto px-4 leading-relaxed">{description}</p>
    </div>
  );
}

export default TeslaCarStoreSectionHeader;
