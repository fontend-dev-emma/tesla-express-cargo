import parsePhoneNumberFromString from "libphonenumber-js";
import { Search } from "lucide-react";

export function getStatusStyle(status) {
  if (!status || typeof status !== "string") return "bg-gray-100 text-gray-800";

  switch (status.toLowerCase()) {
    case "pending":
      return {
        color: "text-white bg-gradient-to-r from-yellow-500 to-yellow-400",
        dot: "bg-yellow-300 animate-bounce",
      };
    case "processing":
      return {
        color: "text-white bg-gradient-to-r from-blue-500 to-blue-400",
        dot: "bg-blue-300 animate-bounce",
      };
    case "in transit":
      return {
        color: "text-white bg-gradient-to-r from-indigo-500 to-indigo-400",
        dot: "bg-indigo-300 animate-bounce",
      };
    case "out":
      return {
        color: "text-white bg-gradient-to-r from-orange-500 to-orange-400",
        dot: "bg-orange-300 animate-bounce",
      };
    case "at custom":
      return {
        color: "text-white bg-gradient-to-r from-purple-500 to-purple-400",
        dot: "bg-purple-300 animate-bounce",
      };
    case "on hold":
      return {
        color: "text-white bg-gradient-to-r from-gray-500 to-gray-400",
        dot: "bg-gray-300 animate-bounce",
      };
    case "delivered":
      return {
        color: "text-white bg-gradient-to-r from-green-500 to-green-400",
        dot: "bg-green-300 animate-bounce",
      };
    case "cancelled":
      return {
        color: "text-white bg-gradient-to-r from-red-500 to-red-400",
        dot: "bg-red-300 animate-bounce",
      };
    default:
      return {
        color: "text-white bg-gradient-to-r from-gray-500 to-gray-400",
        dot: "bg-gray-300 animate-bounce",
      };
  }
}

export function generateShipmentRef() {
  const prefix = "#SP";
  const randomNumber = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${randomNumber}`;
}

export function formatNumber(figure, decimal = true) {
  const num = Number(figure);

  if (decimal === true) {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } else {
    return num.toLocaleString("en-US");
  }
}

// export function formatPhoneNumber(number) {
//   try {
//     const phone = parsePhoneNumberFromString(number);
//     if (!phone) return number;
//     return phone.formatInternational();
//   } catch (err) {
//     return number;
//   }
// }

export function formatDateAndTime(isoString) {
  if (!isoString) return { date: "", time: "" };

  const dateObj = new Date(isoString);
  if (isNaN(dateObj)) return { date: "", time: "" };

  const date = dateObj?.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  let hours = dateObj.getHours();
  const minutes = String(dateObj?.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  const formattedHours = String(hours).padStart(2, "0");

  return {
    date,
    time: `${formattedHours}:${minutes} ${ampm}`,
  };
}

export function addDays(dateString, days) {
  const date = new Date(dateString);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString();
}

export function StatusBadge({ status }) {
  const statusConfig = {
    pending: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/30" },
    processing: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
    "in transit": { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/30" },
    out: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/30" },
    "at custom": { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
    "on hold": { bg: "bg-gray-500/10", text: "text-gray-400", border: "border-gray-500/30" },
    delivered: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/30" },
    cancelled: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/30" },
  };

  const config = statusConfig[status] || statusConfig["on hold"];

  return (
    <span
      className={`inline-flex font-mono items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${config.bg} ${config.text} ${config.border}`}
    >
      {status}
    </span>
  );
}

export function EmptyState() {
  return (
    <tr>
      <td colSpan="10" className="px-6 py-16 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center">
            <Search className="w-8 h-8 text-gray-600" />
          </div>
          <p className="text-gray-400 text-sm sm:text-base">No shipments found</p>
          <p className="text-gray-600 text-xs sm:text-sm">Try adjusting your filters</p>
        </div>
      </td>
    </tr>
  );
}

export function LoadingState() {
  return (
    <tr>
      <td colSpan="10" className="px-6 py-16 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-slate-700 border-t-teal-500 rounded-full animate-spin"></div>
          <p className="text-gray-400 text-sm">Loading shipments...</p>
        </div>
      </td>
    </tr>
  );
}

export function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-4 sm:px-0">
      <p className="text-xs sm:text-sm text-gray-400">
        Page {currentPage} of {totalPages}
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 sm:px-4 py-2 bg-slate-800 text-gray-300 rounded-lg text-sm font-medium hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all border border-slate-700"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 sm:px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-teal-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export async function getLocationInfo(location) {
  if (!location) {
    return { success: false, data: null, error: "No location provided" };
  }

  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}&limit=1`);

    if (!response.ok) {
      return {
        success: false,
        data: null,
        error: `HTTP error: ${response.status}`,
      };
    }

    const data = await response.json();

    if (!data || data.length === 0) {
      return { success: false, data: null, error: "No results found" };
    }

    const place = data[0];

    return {
      success: true,
      data: {
        name: place.display_name,
        lat: parseFloat(place.lat),
        lng: parseFloat(place.lon),
      },
      error: null,
    };
  } catch (err) {
    return { success: false, data: null, error: err.message || "Unknown error" };
  }
}

export function formatUSD(value) {
  const amount = Number(value) || 0;

  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

export function getFirstName(fullName = "") {
  return fullName.trim().split(/\s+/)[0] || "";
}

export function formatPhoneNumber(phoneNumber) {
  if (!phoneNumber) return "";

  const parsed = parsePhoneNumberFromString(phoneNumber);
  if (!parsed || !parsed.isValid()) return phoneNumber;

  return parsed.formatInternational();
}

export const cars = [
  {
    id: 1,
    model: "Model S Plaid",
    description: "Ultra-high-performance electric sedan with record-breaking acceleration and premium comfort.",
    price: 89990,
    image: "/model-s-1.png",
    badge: "Top Performance",
    features: ["396 mi range", "1.99s 0-60mph", "Tri Motor", "Autopilot"],
  },
  {
    id: 2,
    model: "/model-s-2.png",
    description: "Luxury electric sedan offering maximum range and smooth driving experience.",
    price: 74990,
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=900&q=80",
    features: ["405 mi range", "3.1s 0-60mph", "Premium Interior", "Autopilot"],
  },
  {
    id: 3,
    model: "Model 3 Performance",
    description: "Sport-focused compact sedan with aggressive acceleration and sharp handling.",
    price: 54990,
    image: "/model-3-1.png",
    badge: "Popular",
    features: ["315 mi range", "3.1s 0-60mph", "Track Mode", "Glass Roof"],
  },
  {
    id: 4,
    model: "Model 3 Long Range",
    description: "Efficient daily driver offering long range and advanced safety tech.",
    price: 47240,
    image: "/model-3-2.png",
    features: ["358 mi range", "4.2s 0-60mph", "5-Star Safety", "Autopilot"],
  },
  {
    id: 5,
    model: "Model Y Performance",
    description: "Electric SUV combining speed, cargo space, and modern design.",
    price: 56990,
    image: "/model-y-1.png",
    features: ["303 mi range", "3.5s 0-60mph", "AWD", "Panoramic Roof"],
  },
  {
    id: 6,
    model: "Model Y Long Range",
    description: "Tesla’s best-selling SUV with excellent range and everyday practicality.",
    price: 47740,
    image: "/model-y-2.png",
    badge: "Best Seller",
    features: ["330 mi range", "4.8s 0-60mph", "Cargo Space", "Autopilot"],
  },
  {
    id: 7,
    model: "Model X Plaid",
    description: "Luxury electric SUV with falcon-wing doors and extreme performance.",
    price: 94990,
    image: "/model-x-1.png",
    badge: "Premium",
    features: ["333 mi range", "2.5s 0-60mph", "Falcon Doors", "7 Seats"],
  },
  {
    id: 8,
    model: "Model X Long Range",
    description: "Spacious and safe SUV designed for families and long-distance travel.",
    price: 79990,
    image: "/model-x-2.png",
    features: ["348 mi range", "3.8s 0-60mph", "6 Seats", "Autopilot"],
  },
  {
    id: 9,
    model: "Cybertruck AWD",
    description: "Futuristic electric pickup built with stainless steel exoskeleton.",
    price: 60990,
    image: "/cyber-truck-1.png",
    badge: "New",
    features: ["340+ mi range", "4.1s 0-60mph", "Exoskeleton", "Adaptive Air"],
  },
  {
    id: 10,
    model: "Cybertruck Tri Motor",
    description: "Top-tier Cybertruck with maximum towing power and acceleration.",
    price: 79990,
    image: "/cyber-truck-2.png",
    features: ["500+ mi range", "2.9s 0-60mph", "14,000 lbs towing", "AWD"],
  },
  {
    id: 11,
    model: "Tesla Roadster",
    description: "Electric hypercar redefining speed, range, and performance.",
    price: 200000,
    image: "/tesla-roadster-1.png",
    badge: "Coming Soon",
    features: ["620 mi range", "1.9s 0-60mph", "250+ mph", "Convertible"],
  },
  // {
  //   id: 12,
  //   model: "Tesla Semi",
  //   description: "All-electric commercial truck designed for long-haul efficiency.",
  //   price: 180000,
  //   image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=900&q=80",
  //   badge: "Commercial",
  //   features: ["500 mi range", "80,000 lbs load", "Autopilot", "Fast Charging"],
  // },
  // {
  //   id: 13,
  //   model: "Tesla Semi 300",
  //   description: "Short-haul electric semi for regional transport and logistics.",
  //   price: 150000,
  //   image: "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?w=900&q=80",
  //   features: ["300 mi range", "Heavy Duty", "Autopilot", "Fleet Ready"],
  // },
  // {
  //   id: 14,
  //   model: "Tesla Model 2 (Concept)",
  //   description: "Affordable compact electric vehicle aimed at mass adoption.",
  //   price: 25000,
  //   image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1b?w=900&q=80",
  //   badge: "Concept",
  //   features: ["250+ mi range", "Compact Design", "Urban Focus", "Autopilot"],
  // },
  // {
  //   id: 15,
  //   model: "Tesla Robotaxi",
  //   description: "Fully autonomous electric vehicle designed for ride-hailing services.",
  //   price: 30000,
  //   image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=900&q=80",
  //   badge: "Autonomous",
  //   features: ["No Steering Wheel", "Full Self Driving", "AI Powered", "EV Platform"],
  // },
];
