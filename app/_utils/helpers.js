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
    description: "Tesla’s fastest production sedan featuring a tri-motor setup, advanced thermal management, and a refined luxury interior.",
    price: 89990,
    image: "/model-s-1.png",
    badge: "Top Performance",
    features: ["396 mi range (EPA)", "1.99s 0–60 mph", "Tri-Motor AWD", "Full Self-Driving Capable"],
  },
  {
    id: 2,
    model: "Model S Long Range",
    description: "Premium electric sedan optimized for long-distance travel with smooth ride quality and cutting-edge infotainment.",
    price: 74990,
    image: "/model-s-2.png",
    features: ["405 mi range (EPA)", "3.1s 0–60 mph", "Premium Interior", "Autopilot"],
  },
  {
    id: 3,
    model: "Model 3 Performance",
    description: "High-performance compact sedan engineered for speed, precision handling, and everyday usability.",
    price: 54990,
    image: "/model-3-1.png",
    badge: "Popular",
    features: ["315 mi range (EPA)", "3.1s 0–60 mph", "Track Mode", "Performance Brakes"],
  },
  {
    id: 4,
    model: "Model 3 Long Range",
    description: "Efficient and affordable electric sedan offering excellent range, safety, and smart technology.",
    price: 47240,
    image: "/model-3-2.png",
    features: ["358 mi range (EPA)", "4.2s 0–60 mph", "Dual Motor AWD", "5-Star Safety Rating"],
  },
  {
    id: 5,
    model: "Model Y Performance",
    description: "Compact electric SUV delivering strong acceleration, versatile cargo space, and sporty styling.",
    price: 56990,
    image: "/model-y-1.png",
    features: ["303 mi range (EPA)", "3.5s 0–60 mph", "Performance AWD", "Panoramic Glass Roof"],
  },
  {
    id: 6,
    model: "Model Y Long Range",
    description: "Tesla’s best-selling SUV built for families, road trips, and everyday convenience.",
    price: 47740,
    image: "/model-y-2.png",
    badge: "Best Seller",
    features: ["330 mi range (EPA)", "4.8s 0–60 mph", "Large Cargo Capacity", "Autopilot"],
  },
  {
    id: 7,
    model: "Model X Plaid",
    description: "Luxury electric SUV combining supercar acceleration with advanced comfort and iconic falcon-wing doors.",
    price: 94990,
    image: "/model-x-1.png",
    badge: "Premium",
    features: ["333 mi range (EPA)", "2.5s 0–60 mph", "Falcon Wing Doors", "Up to 7 Seats"],
  },
  {
    id: 8,
    model: "Model X Long Range",
    description: "Spacious and technologically advanced SUV designed for long-distance comfort and family travel.",
    price: 79990,
    image: "/model-x-2.png",
    features: ["348 mi range (EPA)", "3.8s 0–60 mph", "6-Seat Configuration", "Autopilot"],
  },
  {
    id: 9,
    model: "Cybertruck AWD",
    description: "Electric pickup truck built with a stainless-steel exoskeleton for durability and futuristic design.",
    price: 60990,
    image: "/cyber-truck-1.png",
    badge: "New",
    features: ["340+ mi range", "4.1s 0–60 mph", "Stainless Steel Body", "Adaptive Air Suspension"],
  },
  {
    id: 10,
    model: "Cybertruck Tri-Motor",
    description: "High-end Cybertruck variant delivering maximum towing capacity, range, and performance.",
    price: 79990,
    image: "/cyber-truck-2.png",
    features: ["500+ mi range", "2.9s 0–60 mph", "14,000 lbs Towing", "Tri-Motor AWD"],
  },
  {
    id: 11,
    model: "Tesla Roadster",
    description: "Next-generation electric supercar pushing the limits of acceleration, speed, and engineering.",
    price: 200000,
    image: "/tesla-roadster-1.png",
    badge: "Coming Soon",
    features: ["620 mi range (est.)", "1.9s 0–60 mph", "250+ mph Top Speed", "Removable Glass Roof"],
  },
  {
    id: 12,
    model: "Tesla Semi",
    description: "All-electric commercial truck engineered for long-haul efficiency, safety, and reduced operating costs.",
    price: 180000,
    image: "/tesla-semi-2.png",
    badge: "Commercial",
    features: ["500 mi range (est.)", "80,000 lbs GVWR", "Enhanced Autopilot", "Megacharger Support"],
  },
  {
    id: 13,
    model: "Tesla Semi 300",
    description: "Regional and short-haul electric semi optimized for logistics, ports, and distribution centers.",
    price: 150000,
    image: "/tesla-semi-1.png",
    features: ["300 mi range (est.)", "Heavy-Duty Electric Drivetrain", "Fleet Monitoring", "Fast Charging"],
  },

  {
    id: 14,
    model: "Tesla Robotaxi",
    description: "Purpose-built autonomous electric vehicle designed for large-scale ride-hailing networks.",
    price: 30000,
    image: "/tesla-robotaxi.png",
    badge: "Autonomous",
    features: ["No Steering Wheel", "Full Self-Driving", "AI-Powered Navigation", "Low Operating Cost"],
  },
];

export function generateReference() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `REF-${date}-${random}`;
}

export function getUniqueReceivers(allShipments) {
  const seen = new Set();

  return allShipments
    ?.filter((shipment) => {
      const key = `${shipment.receiverName}|${shipment.receiverEmail}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map(({ receiverName, receiverEmail }) => ({ receiverName, receiverEmail }));
}
