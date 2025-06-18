import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to(".loading-screen", { opacity: 0, duration: 0.8, onComplete: onFinish });
    }, 1200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loading-screen fixed inset-0 bg-[#f6f8e5] flex items-center justify-center z-50 transition-opacity">
      <span className="text-[#35413c] text-2xl font-bold">Where Your Health Meets Luxury...</span>
    </div>
  );
}