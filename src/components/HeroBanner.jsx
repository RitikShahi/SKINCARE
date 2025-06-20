export default function HeroBanner({ onShopNowClick }) {
  return (
    <section className="bg-[#f8f8ed] min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full h-full max-w-8xl max-h-3xl rounded-2xl overflow-hidden relative shadow-md group">
        <img
          src="/images/ChatGPT Image Jun 16, 2025, 01_32_50 AM 1.png"
          alt="Feel Beautiful"
          className="w-full h-[600px] object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col items-center justify-end pb-20">
          <h1 className="text-white text-4xl md:text-5xl font-medium text-center mb-10 drop-shadow">
            Feel Beautiful Inside and Out<br />with Every Product.
          </h1>
          <button
            className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium shadow hover:bg-gray-100 transition text-base md:text-lg cursor-pointer"
            onClick={onShopNowClick}
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
