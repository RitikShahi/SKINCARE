import React, { useState } from "react";

const products = [
  {
    name: "ALYA SKIN CLEANSER.",
    price: "FROM $29.99",
    img: "../public/filip-knezevic-k-ElrinXWAk-unsplash 2.png",
    highlight: false,
  },
  {
    name: "RITUAL OF SAKURA.",
    price: "FROM $27.99",
    img: "../public/cierra-henderson-LWIQp-0_b98-unsplash 1.png",
    highlight: false, // changed from true to false
  },
  {
    name: "THE BODY LOTION.",
    price: "FROM $19.99",
    img: "../public/mathilde-langevin-p3O5f4u95Lo-unsplash 1.png",
    highlight: false,
  },
];

const filters = ["NEW ARRIVAL", "CLEANSING", "ACNE FIGHTER", "ANTI AGING"];

const faqs = [
  { q: "Are your products safe for sensitive skin?", a: "" },
  {
    q: "Are your products cruelty-free?",
    a: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
  },
  { q: "What's your return policy?", a: "" },
  { q: "Do you ship internationally?", a: "" },
  { q: "How do i choose the right product?", a: "" },
];

export default function ProductShowcaseAndFAQ() {
  const [openFAQ, setOpenFAQ] = useState(1); // Open the second FAQ by default

  return (
    <section className="bg-[#f8f8ed] py-12 px-4 md:px-12 flex flex-col items-center">
      {/* Heading */}
      <h2 className="w-full text-1xl md:text-4xl text-gray-900 text-center mb-6">
  Feel Beautiful Inside and Out<br />with Every Product.
</h2>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {filters.map((filter, idx) => (
          <button
            key={filter}
            className={`px-5 py-1 rounded-full border text-sm font-medium transition
              ${
                idx === 0
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-transparent text-gray-900 border-gray-900/30 hover:bg-gray-100"
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 mb-12">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition-all duration-300 ease-in-out cursor-pointer border border-transparent hover:shadow-xl hover:border-[#35413c] hover:scale-[1.02]"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-110 object-cover"
            />
            <div className="flex items-center justify-between px-4 py-3 bg-[#f8f8ed]">
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {product.name}
                </div>
                <div className="text-xs text-gray-500">{product.price}</div>
              </div>
              <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center transition hover:bg-gray-200 text-gray-900">
                 <img
  src="../public/cart.svg"
  alt="Headset Icon"
  className="w-5 h-8 object-contain text-gray-700"
/>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-center">
        {/* FAQ Image and Badge */}
        <div className="flex-1 flex flex-col items-center relative mb-8 md:mb-0">
          <div className="rounded-2xl overflow-hidden relative w-full max-w-md">
            <img
              src="../public/mathilde-langevin-p3O5f4u95Lo-unsplash 1.png"
              alt="FAQ Product"
              className="w-120 h-120 object-cover"
            />
            {/* Badge */}
            <div className="absolute bottom-4 left-4 bg-[#f6f8e5] rounded-full shadow px-4 py-2 flex items-center gap-2">
              <div className="bg-[#35413c] rounded-full">
                <img
              src="../public/headphone-svgrepo-com 1 (1).svg"  // or use an imported path
              alt="Headset Icon"
              className="w-5 h-5 object-contain"
              />
              </div>
    
              <span className="text-xs text-gray-800">
                24/7 We're Here to Help You
              </span>
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="flex-1 flex flex-col items-start">
          <button className="mb-4 px-5 py-2 border border-gray-900 rounded-full text-sm font-medium flex items-center gap-2 bg-[#f8f8ed]">
            <span className="w-3 h-3 rounded-full bg-gray-600 inline-block"></span>
            Frequently Asked Question
          </button>
          <h3 className="text-xl md:text-4xl font-light text-gray-900 mb-10">
            Answers to Your<br />
Skincare Questions, All<br />
in One Place.
          </h3>
          <div className="w-full space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="w-full">
                <button
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border text-left transition
                    ${
                      openFAQ === idx
                        ? "bg-[#f8f8ed] border-gray-900"
                        : "bg-[#f8f8ed] border-gray-300 hover:bg-gray-50"
                    }
                  `}
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                >
                  <span className="font-medium text-gray-900">{faq.q}</span>
                  <span className="material-icons text-gray-500">
                    {openFAQ === idx ? "remove" : "add"}
                  </span>
                </button>
                {openFAQ === idx && faq.a && (
                  <div className="px-4 pb-3 text-gray-700 text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
