// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="relative bg-[#35413c] text-white pt-16 pb-8 px-4 md:px-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
//         {/* Left */}
//         <div className="mb-12 md:mb-0">
//           <h2 className="text-2xl md:text-3xl font-normal mb-2">
//             Join The Skincare<br />Community Now.
//           </h2>
//         </div>
//         {/* Right */}
//         <div>
//           <div className="text-base mb-1">Get in Touch</div>
//           <a
//             href="https://contact.skincare.com"
//             className="text-2xl md:text-2xl font-normal text-white hover:underline"
//           >
//             contact.skincare.com
//           </a>
//         </div>
//       </div>
//       {/* Links */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 mb-8">
//         <div className="flex gap-8 mb-4 md:mb-0">
//           <a href="#" className="hover:underline">Facebook</a>
//           <a href="#" className="hover:underline">Instagram</a>
//           <a href="#" className="hover:underline">YouTube</a>
//         </div>
//         <div className="flex gap-8">
//           <a href="#" className="hover:underline">Terms of Service</a>
//           <a href="#" className="hover:underline">Privacy Policy</a>
//           <a href="#" className="hover:underline">Cookies Policy</a>
//         </div>
//       </div>
//       {/* Large background text */}
//       <div className="absolute left-0 bottom-0 w-full text-[12vw] font-extrabold text-[#3d4a43] opacity-60 select-none pointer-events-none leading-none z-0">
//         SKINCARE
//       </div>
//     </footer>
//   );
// }
import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-[#35413c] text-white pt-16 pb-[10rem] px-4 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-16 z-10 relative">
        {/* Left */}
        <div className="mb-12 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-normal mb-2">
            Join The Skincare<br />Community Now.
          </h2>
        </div>
        {/* Right */}
        <div>
          <div className="text-base mb-1">Get in Touch</div>
          <a
            href="https://contact.skincare.com"
            className="text-2xl md:text-2xl font-normal text-white hover:underline"
          >
            contact.skincare.com
          </a>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 mb-8 z-10 relative">
        <div className="flex gap-8 mb-4 md:mb-0">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">YouTube</a>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookies Policy</a>
        </div>
      </div>

      {/* Large background text */}
      <div className="absolute top-50 right-120 w-250 text-[22vw] md:text-[21vw] font-extrabold text-[#3d4a43] opacity-90 select-none pointer-events-none leading-none text-center z-0">
        SKINCARE
      </div>
    </footer>
  );
}
