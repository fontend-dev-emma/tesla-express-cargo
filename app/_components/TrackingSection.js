"use client";

import { Search, Package, Truck, MapPin, Clock, CheckCircle, ArrowRight, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { getShipment } from "../_lib/data-service";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MiniSpinner } from "./MiniSpinner";

function TrackingSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const inputValue = trackingNumber.trim();

    try {
      const shipment = await getShipment(inputValue);

      if (!shipment) {
        toast.error("❌ Invalid shipment tracking number");
      } else {
        router.push(`/track-shipment/${inputValue}`);
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 bg-[#007F73] bg-opacity-10 rounded-full mb-3 sm:mb-4 md:mb-6">
            <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-[#007F73] mr-1.5 sm:mr-2" />
            <span className="text-xs sm:text-sm md:text-base font-semibold text-[#007F73]">Tesla Express Cargo</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-4 leading-tight">
            Track Your Shipment
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Enter your tracking number below to get real-time updates on your cargo&apos;s journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-gray-100">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <label htmlFor="tracking" className="block text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                  Tracking Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 md:pl-5 flex items-center pointer-events-none">
                    <Package className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="tracking"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="e.g., TEC-20260108-483920"
                    className="w-full pl-11 sm:pl-13 md:pl-16 pr-3 sm:pr-4 md:pr-5 py-3 sm:py-4 md:py-5 lg:py-6 bg-gray-50 border-2 border-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl text-gray-900 placeholder-gray-400 text-sm sm:text-base md:text-lg lg:text-xl focus:outline-none focus:border-[#007F73] focus:ring-4 focus:ring-[#007F73] focus:ring-opacity-20 focus:bg-white transition-all duration-300"
                  />
                </div>
                <p className="mt-2 sm:mt-2.5 md:mt-3 text-xs sm:text-sm md:text-base text-gray-500">
                  Find your tracking number in your shipping confirmation email
                </p>
              </div>

              <button
                disabled={isLoading}
                onClick={handleSubmit}
                className="w-full group flex items-center justify-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white bg-[#007F73] rounded-lg sm:rounded-xl md:rounded-2xl hover:bg-[#006860] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <MiniSpinner />
                    <span className="ml-2">Fetching Shipment Details...</span>
                  </>
                ) : (
                  <>
                    <Search className="mr-2 sm:mr-2.5 md:mr-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    <span>Track Shipment</span>
                    <ArrowRight className="ml-2 sm:ml-2.5 md:ml-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 md:pt-10 border-t border-gray-100">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center mb-3 sm:mb-4">Need help? Contact our support team</p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                <button className="flex-1 flex items-center justify-center px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-medium text-[#007F73] bg-[#007F73] bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-200">
                  <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Sample: TEC-20260108-483920
                </button>
                <button className="flex-1 flex items-center justify-center px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-medium text-[#007F73] bg-[#007F73] bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-200">
                  <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Track Multiple
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            Real-Time Tracking Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#007F73] to-[#006860] rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 mx-auto">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 text-center">Live Location</h4>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center leading-relaxed">
                Real-time GPS tracking updates every 5 minutes
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#007F73] to-[#006860] rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 mx-auto">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 text-center">ETA Updates</h4>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center leading-relaxed">
                Accurate delivery time predictions with alerts
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#007F73] to-[#006860] rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 mx-auto">
                <Truck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 text-center">Full History</h4>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center leading-relaxed">Complete journey log with all checkpoints</p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#007F73] to-[#006860] rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 mx-auto">
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 text-center">Delivery Proof</h4>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center leading-relaxed">Digital signature and photo confirmation</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#007F73] to-[#006860] rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-10 md:mb-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white text-opacity-90 font-medium">Live Support</div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 sm:mb-2">99.8%</div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white text-opacity-90 font-medium">On-Time Rate</div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 sm:mb-2">100K+</div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white text-opacity-90 font-medium">Deliveries</div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white text-opacity-90 font-medium">Years Trusted</div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 md:pt-10 border-t border-white border-opacity-20">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white bg-opacity-20 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm md:text-base font-bold text-white">Fully Insured</div>
                    <div className="text-[10px] sm:text-xs text-white text-opacity-75">Complete Coverage</div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white bg-opacity-20 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm md:text-base font-bold text-white">Fast Delivery</div>
                    <div className="text-[10px] sm:text-xs text-white text-opacity-75">Express Available</div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2 sm:space-x-3 col-span-2 sm:col-span-1">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white bg-opacity-20 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm md:text-base font-bold text-white">ISO Certified</div>
                    <div className="text-[10px] sm:text-xs text-white text-opacity-75">Quality Assured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrackingSection;
