"use client";

import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    text: "Tesla Express Cargo has transformed our supply chain. Shipments that used to take days now arrive in hours, and their real-time tracking gives us complete peace of mind.",
    name: "John Miller",
    title: "CEO of SwiftTech Supplies",
    image: "/testimonial-1.png",
  },
  {
    text: "From booking to delivery, the experience is seamless. Tesla Express Cargo’s innovative approach to logistics has made managing our orders effortless.",
    name: "Emily Watson",
    title: "Founder of Luxe Homeware",
    image: "/testimonial-2.png",
  },
  {
    text: "The combination of speed, precision, and transparency is unmatched. Tesla Express Cargo consistently delivers our sensitive shipments safely and on time.",
    name: "Aisha Thompson",
    title: "Operations Manager at GreenFoods Inc.",
    image: "/testimonial-3.png",
  },
  {
    text: "Tesla Express Cargo not only meets deadlines — they exceed expectations. Their attention to detail and transparency makes them a trusted logistics partner for any business.",
    name: "David Kim",
    title: "Import/Export Coordinator at Horizon Imports",
    image: "/testimonial-4.png",
  },
  {
    text: "I’ve worked with multiple carriers, but Tesla Express Cargo stands out for its reliability and efficiency. The Tesla-powered fleet ensures every delivery feels cutting-edge.",
    name: "Carlos Rivera,",
    title: "Logistics Director at Nova Electronics",
    image: "/testimonial-5.png",
  },
];

function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  function nextSlide() {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }

  function prevSlide() {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="relative bg-gradient-to-br from-[#080718] via-[#0B1C1B] to-[#081C3D] text-white py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <span className="bg-blue-500/30 text-blue-300/80 rounded-3xl px-4 py-1 text-sm font-semibold uppercase tracking-wide">Success Stories</span>

        <h2 className="text-3xl sm:text-4xl font-bold">Client Testimonials</h2>
        <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
          Hear from our satisfied clients who have achieved remarkable results using{" "}
          <span className="text-green-400 font-medium">Tesla Express Cargo</span>.
        </p>

        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-between  mb-6">
                <div className="flex gap-1 text-yellow-400  ">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-green-400 opacity-80" />
              </div>

              <p className="text-md text-white/80 leading-relaxed mb-8 italic">“{testimonial.text}”</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={200}
                  height={100}
                  className="w-16 h-16 rounded-full border border-green-400/40 shadow-md object-cover"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-green-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition duration-300"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index ? "bg-green-400 scale-110" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default TestimonialsSection;
