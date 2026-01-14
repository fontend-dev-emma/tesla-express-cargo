import TimelineStep from "./TimelineStep";

function ProgressTimeline({ fromLocation, currentLocation, toLocation, finalDestination, status }) {
  const baseSteps = [
    { label: "Order Placed", location: fromLocation },
    { label: "In Transit", location: currentLocation },
    { label: "Out for Delivery", location: toLocation },
    { label: "Delivered", location: finalDestination },
  ];

  const statusToStepIndex = {
    pending: 0,
    processing: 0,

    "in transit": 1,
    "at custom": 1,
    "on hold": 1,

    out: 2,

    delivered: 3,
  };

  const currentStepIndex = statusToStepIndex[status];

  const steps = baseSteps.map((step, index) => ({
    ...step,
    completed: index < currentStepIndex,
    active: index === currentStepIndex,
  }));

  return (
    <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-slate-700/50 shadow-xl">
      <h3 className="text-lg font-bold text-slate-100 mb-4">Delivery Progress</h3>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700"></div>
        <div
          className="absolute left-4 top-0 w-0.5 bg-teal-600 transition-all duration-1000"
          style={{ height: `${(currentStepIndex / (baseSteps.length - 1)) * 100}%` }}
        ></div>

        <div className="space-y-6 relative">
          {steps.map((step, index) => (
            <TimelineStep key={index} {...step} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgressTimeline;
