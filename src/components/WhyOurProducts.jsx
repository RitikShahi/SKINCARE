import React from "react";

export default function WhyOurProducts() {
  return (
    <section className="bg-[#f8f8ed] py-12 px-4 md:px-12 flex flex-col items-center">
      {/* Top Large Paragraph */}
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 leading-snug">
          Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest <span className="font-semibold text-black">natural ingredients</span> with <span className="text-gray-400">advanced science</span>, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day. <span className="text-gray-400">Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.</span>
        </p>
      </div>

      {/* Main Content: Left Text + Right Image */}
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Left Side */}
        <div className="flex-1 max-w-lg w-full">
          <button className="mb-6 px-5 py-2 border border-gray-900 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-100 transition">
            <span className="w-3 h-3 rounded-full bg-gray-600 inline-block"></span>
            Why Our Products
          </button>

          <h2 className="text-2xl md:text-3xl font-inter mb-4 text-gray-900">
            YOUR SKIN DESERVES <br/>THE BEST CARE.
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin. Explore our rage crafted with love backed by science, and inspired by nature.
          </p>

          {/* Features List */}
          <div className="space-y-12 w-full">
            {/* 01 */}
            <div className="hover:border-l-4 hover:border-[#35413c] pl-3 transition-all">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-light text-gray-400">01</span>
                <span className="text-lg font-medium text-gray-900">Bio Ingredients</span>
              </div>
              <p className="ml-10 text-gray-600 text-sm">
                Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.
              </p>
            </div>
            {/* 02 */}
            <div className="hover:border-l-4 hover:border-[#35413c] pl-3 transition-all">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-light text-gray-400">02</span>
                <span className="text-lg font-medium text-gray-900">Everything Natural</span>
              </div>
              <p className="ml-10 text-gray-600 text-sm">
                Leading solutions for pure skin. The perfect solution for your skin care needs.
              </p>
            </div>
            {/* 03 */}
            <div className="hover:border-l-4 hover:border-[#35413c] pl-3 transition-all">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-light text-gray-400">03</span>
                <span className="text-lg font-medium text-gray-900">All Handmade</span>
              </div>
              <p className="ml-10 text-gray-600 text-sm">
                Made with love and care. Just for you. Give your skin the tender loving care it deserves.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Image and Badge */}
        <div className="flex-1 flex flex-col items-end relative">
          <div className="rounded-2xl   overflow-hidden relative w-[320px] h-[400px] md:w-[500px] md:h-[600px]">
            <img
              src="../public/images/Jun 15, 2025, 11_52_20 PM 2.png"
              alt="Skincare Model"
              className="w-full h-full object-cover"
            />
            {/* Badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#f6f8e5] rounded-full shadow px-4 py-2 flex items-center gap-2">
              <img
                src="../public/images/award.svg"
                alt="Headset Icon"
                className="w-8 h-8 object-contain text-gray-700"
                />
              <span className="text-xs text-gray-800">Best Skin Care Product Award Winning</span>
            </div>
          </div>

          {/* Learn More */}
          <div className="w-full flex justify-end mt-2">
            <a href="#" className="text-xs text-gray-700 font-medium hover:underline">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
