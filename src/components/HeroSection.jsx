import React, { useState } from "react";

export default function HeroSection({ onShopNowClick }) {
  const [highlighted, setHighlighted] = useState(false);

  return (
    <section className="bg-[#f6f8e5] max-h-[100vh] flex flex-col relative overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-4 md:px-8 md:py-6 z-20 relative">
        <div className="font-bold text-base md:text-lg tracking-widest">
          SKINCARE
        </div>
        <nav className="space-x-4 md:space-x-8 hidden md:flex">
          <a href="#" className="hover:underline">All Products</a>
          <a href="#" className="hover:underline">Serum</a>
          <a href="#" className="hover:underline">Sunscreen</a>
          <a href="#" className="hover:underline">Bundle</a>
        </nav>
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="flex items-center space-x-1">
           <img
  src="../public/static/images/cart.svg"
  alt="Headset Icon"
  className="w-5 h-8 object-contain text-gray-700"
/>
            <span className="text-xs">(1)</span>
          </div>
          <img
  src="../public/static/images/heart.png"
  alt="Headset Icon"
  className="w-5 h-5 object-contain text-gray-700"
/>
          <img
  src="../public/static/images/person.svg"
  alt="Headset Icon"
  className="w-5 h-8 object-contain text-gray-700"
/>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 px-4 md:px-16 relative z-10">
        {/* Left Description */}
        <div className="flex-1 max-w-md text-gray-700 mb-8 md:mb-0 -mt-15 md:-mt-35 z-20">
          <p className="text-sm md:text-lg">
            Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
          </p>
          <button
            className="mt-6 md:mt-8 px-6 py-2 bg-black text-white rounded-full shadow hover:bg-gray-800 transition text-sm md:text-base cursor-pointer"
            onClick={onShopNowClick} 
          >
            Shop Now
          </button>
        </div>

        {/* Center Image and Headline */}
        <div className="relative flex flex-col items-center flex-1 z-20 mt-0 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center leading-tight mb-4 z-20">
            GLOW<br className="hidden md:block" />NATUR-<br/>ALLY
          </h1>

          {/* Image container with testimonial */}
          <div className="relative w-[240px] h-[320px] md:w-[24rem] md:h-[31rem] md:mt-3 z-20">

            <img
              src="../public/static/images/ChatGPT Image Jun 15, 2025, 10_24_47 PM 3.png"
              alt="Main Product"
              className="w-full h-full object-cover rounded-xl shadow-xl z-10"
            />

            {/* Testimonial box at image bottom */}
            <div
              className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-[16rem] md:w-[20rem] bg-[#f6f8e5] rounded-full shadow-lg px-4 py-2 flex items-center gap-3 z-30 transition-all duration-200 cursor-pointer outline-none
                ${highlighted ? "ring-4 ring-[#35413c] bg-[#f8f8ed] shadow-2xl" : ""}
              `}
              tabIndex={0}
              onMouseEnter={() => setHighlighted(true)}
              onMouseLeave={() => setHighlighted(false)}
              onFocus={() => setHighlighted(true)}
              onBlur={() => setHighlighted(false)}
            >
              <img
              src="..public/static/images/skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 4.png"
              alt="Main Product"
              className="w-12 h-12 rounded-full object-cover  shadow-xl z-10"
            />
              <span className="text-sm text-gray-700 font-medium leading-snug">
                While giving you an invigorating cleansing experience.
              </span>
            </div>
          </div>
        </div>

        {/* Right Floating Product - lifted for alignment */}
        <div className="flex-1 flex justify-end md:items-start mt-6 md:-mt-135 z-20 ">
          <img
            src="../public/static/images/skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 4.png"
            alt="Tube Product"
            className="w-20 h-20 md:w-28 md:h-28 object-contain rounded-xl"
          />
        </div>
      </div>

      {/* Background SKINCARE text */}
      <div className="absolute top-132 right-5 w-full flex justify-center z-0">
        <div className="text-[25vw] md:text-[21vw] font-extrabold text-[#35413c] opacity-90 leading-none select-none pointer-events-none w-full ">
          SKINCARE
        </div>
      </div>
    </section>
  );
}