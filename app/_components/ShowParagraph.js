"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

function ShowParagraph({ children, headingText }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleShow() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="py-2">
      <p className="flex text-center mb-2">
        <span className="font-bold text-lg sm:text-[1.15rem]">{headingText}</span>
        <button className=" ml-auto " onClick={handleShow}>
          {isOpen ? <ToggleIcon icon={isOpen} /> : <ToggleIcon icon={isOpen} />}
        </button>
      </p>
      {isOpen && <p className="text-primary-500 sm:text-[0.9rem] text-[0.7rem]">{children}</p>}
    </div>
  );
}

function ToggleIcon({ icon }) {
  if (icon) return <ChevronDown className="w-10 h-7  stroke-[1] stroke-primary-500" />;

  if (!icon) return <ChevronRight className="w-10 h-7  stroke-[1]" />;
}

export default ShowParagraph;
