import { Plane, Ship, Train, Truck } from "lucide-react";

function ShipmentProgressBar({ status, freight = "air" }) {
  let Icon;

  const progress = {
    pending: 5,
    processing: 20,
    "in transit": 40,
    out: 60,
    "on hold": 70,
    "at custom": 85,
    delivered: 100,
  };

  if (freight === "sea") {
    Icon = Ship;
  } else if (freight === "road") {
    Icon = Truck;
  } else if (freight === "express") {
    Icon = Train;
  } else {
    Icon = Plane;
  }
  const progressBar = progress[status];

  return (
    <div className="w-full mt-6 sm:mt-10 ">
      <div className="relative w-full h-3 bg-gray-300 rounded">
        <div className="absolute top-0 left-0 h-3 bg-teal-500 rounded" style={{ width: `${progressBar}%` }}></div>

        <div className="absolute -top-6 transform -translate-x-1/2" style={{ left: `${progressBar}%` }}>
          <div className="p-2 bg-slate-950 rounded-full border-2 border-teal-500 shadow-md">
            <Icon className="h-8 w-8 text-teal-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShipmentProgressBar;
