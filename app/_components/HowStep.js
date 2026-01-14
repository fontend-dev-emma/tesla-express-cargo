import { Inbox } from "lucide-react";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  style: "italic",
  weight: "700",
});

function HowStep({ children, StepNum, step }) {
  return (
    <div
      className={`mx-2 flex flex-row items-center  gap-6 border shadow px-2 py-1 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-[#037665] ${cormorant.className}`}
    >
      <span className="text-[4rem] font-semibold text-primary-500 ">{StepNum}</span>

      <div>
        <h3 className="text-[1.4rem]">{step}</h3>
        <p className="text-[1rem] text-primary-600">{children}</p>
      </div>
    </div>
  );
}

export default HowStep;
