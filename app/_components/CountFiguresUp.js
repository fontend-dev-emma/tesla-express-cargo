"use client";

import { useEffect, useRef, useState } from "react";
import FormatNumber from "./FormatNumber";

function CountFiguresUp({ end, duration = 2000, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  function animateCount() {
    const start = 0;
    const startTime = performance.now();

    function step(timestamp) {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setCount(value);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  return (
    <div ref={ref} className="flex flex-col bg-primary-100 sm:bg-primary-50 py-14 lg:gap-3">
      <span className="text-4xl lg:text-6xl">{FormatNumber(count)}</span>
      <p className="text-sm lg:text-[1.1rem] text-primary-500">{label}</p>
    </div>
  );
}

export default CountFiguresUp;
