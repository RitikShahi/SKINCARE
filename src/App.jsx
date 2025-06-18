import { useRef, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeroBanner from "./components/HeroBanner";
import FAQSection from "./components/FAQSection";
import WhyOurProducts from "./components/WhyOurProducts";
import ProductShowcaseAndFAQ from "./components/ProductShowcaseAndFAQ";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection"
import BestSellingProducts from "./components/BestSellingProducts"
function App() {
  const [loading, setLoading] = useState(true);
  const productRef = useRef(null);

  // Handler to scroll to the product showcase section
  const handleShopNowClick = () => {
    productRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          <HeroSection onShopNowClick={handleShopNowClick}/>
          <WhyOurProducts />
          <BestSellingProducts />
          <HeroBanner onShopNowClick={handleShopNowClick} />
          <div ref={productRef}>
            <ProductShowcaseAndFAQ />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;