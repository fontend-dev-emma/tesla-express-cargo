"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AOSWrapper({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    AOS.init({ duration: 600, once: true });
  }, []);

  if (!isClient) return null;

  return <div>{children}</div>;
}

export default AOSWrapper;
