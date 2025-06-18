import React, { useRef } from "react";
import { gsap } from "gsap";

const faqs = [
  { q: "What is luxury landing?", a: "A premium landing page experience." },
  { q: "Is it responsive?", a: "Yes, it works on all devices." },
  { q: "Are animations smooth?", a: "Absolutely, powered by GSAP." },
];

export default function FAQSection() {
  const answerRefs = useRef([]);

  const toggleFAQ = (i) => {
    const el = answerRefs.current[i];
    if (el.style.height && el.style.height !== "0px") {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.4, ease: "power2.inOut" });
    } else {
      el.style.height = "auto";
      const height = el.scrollHeight;
      el.style.height = "0px";
      gsap.to(el, { height, opacity: 1, duration: 0.4, ease: "power2.inOut" });
    }
  };

  return (
    <section className="py-12 bg-white max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">FAQ</h2>
      {faqs.map((faq, i) => (
        <div key={i} className="mb-4 border-b">
          <button
            className="w-full text-left py-3 font-medium"
            onClick={() => toggleFAQ(i)}
          >
            {faq.q}
          </button>
          <div
            ref={el => (answerRefs.current[i] = el)}
            style={{ height: 0, overflow: "hidden", opacity: 0 }}
            className="transition-all px-4"
          >
            <p className="py-2">{faq.a}</p>
          </div>
        </div>
      ))}
    </section>
  );
}