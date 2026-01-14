"use client";

import { MapPin, Phone, Mail, Clock, Send, Truck, Shield, Award, Zap } from "lucide-react";
import { UseAllCompanySettings } from "../_queryHooks/UseAllCompanySettings";
import { formatPhoneNumber } from "../_utils/helpers";

function ContactSection() {
  const { allSettings } = UseAllCompanySettings();

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-[#007F73] bg-opacity-10 rounded-full mb-4 sm:mb-6">
            <Truck className="w-4 h-4 sm:w- sm:h-5 text-[#007F73] mr-2" />
            <span className="text-sm sm:text-base font-semibold text-[#007F73]">Tesla Express Cargo</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">Let&apos;s Connect</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in logistics and cargo solutions. We&apos;re here to make shipping seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#007F73] to-[#00a693] p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Get in Touch</h3>
              <p className="text-white text-opacity-90">We typically respond within 24 hours</p>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#007F73] to-[#00a693] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h4>
                      <p className="text-gray-600 leading-relaxed">
                        123 Cargo Boulevard
                        <br />
                        Logistics District
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#007F73] to-[#00a693] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Call Us</h4>
                      <a
                        href={`tel:${formatPhoneNumber(allSettings?.companyPhone)}`}
                        className="text-gray-600 hover:text-[#007F73] transition-colors block"
                      >
                        {formatPhoneNumber(allSettings?.companyPhone)}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#007F73] to-[#00a693] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Email Us</h4>
                      <a href={`mailto:${allSettings?.companyEmail}`} className="text-gray-600 hover:text-[#007F73] transition-colors block">
                        {allSettings?.companyEmail}
                      </a>
                      <a href={`mailto:${allSettings?.companyEmail}`} className="text-gray-600 hover:text-[#007F73] transition-colors block">
                        {allSettings?.companyEmail}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#007F73] to-[#00a693] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Working Hours</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Mon - Fri: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 pt-8 border-t border-gray-100">
                <button className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#007F73] to-[#00a693] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Send us a message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00a693] to-[#007F73] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="bg-gradient-to-br from-[#007F73] to-[#00a693] rounded-3xl shadow-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Our Track Record</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-white text-opacity-90 text-sm">Customer Support</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-white text-opacity-90 text-sm">Years in Business</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">100K+</div>
                    <div className="text-white text-opacity-90 text-sm">Successful Deliveries</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">99.8%</div>
                    <div className="text-white text-opacity-90 text-sm">On-Time Delivery</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border-2 border-[#007F73]">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Emergency Line</h4>
              </div>
              <p className="text-gray-600 text-sm mb-3">24/7 urgent support available</p>
              <a
                href={`tel:${formatPhoneNumber(allSettings?.companyPhone)}`}
                className="text-2xl font-bold text-[#007F73] hover:text-[#00a693] transition-colors"
              >
                {formatPhoneNumber(allSettings?.companyPhone)}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007F73] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-[#007F73]" />
              </div>
              <h5 className="font-semibold text-gray-900 mb-1">Insured</h5>
              <p className="text-sm text-gray-600">Full coverage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007F73] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Zap className="w-8 h-8 text-[#007F73]" />
              </div>
              <h5 className="font-semibold text-gray-900 mb-1">Fast</h5>
              <p className="text-sm text-gray-600">Express delivery</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007F73] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-[#007F73]" />
              </div>
              <h5 className="font-semibold text-gray-900 mb-1">Certified</h5>
              <p className="text-sm text-gray-600">ISO certified</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007F73] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Truck className="w-8 h-8 text-[#007F73]" />
              </div>
              <h5 className="font-semibold text-gray-900 mb-1">Tracked</h5>
              <p className="text-sm text-gray-600">Real-time GPS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
