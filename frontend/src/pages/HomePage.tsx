import { getServices } from "../services/servicesService";
import { useEffect } from "react";
import { getHealthStatus } from "../services/healthService";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import FeaturedDeals from "../components/FeaturedDeals";
import TrendingDeals from "../components/TrendingDeals";
import HowItWorks from "../components/HowItWorks";
import TopServices from "../components/TopServices";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import PartnerBrands from "../components/PartnerBrands";
import BecomeProvider from "../components/BecomeProvider";
import AppPromo from "../components/AppPromo";
import ChatWidget from "../components/ChatWidget";
import StickyBookingBar from "../components/StickyBookingBar";
import Footer from "../components/Footer";

export default function HomePage() {
  useEffect(() => {
    getHealthStatus()
      .then(data => console.log("Backend:", data))
      .catch(err => console.error("Error:", err));
  }, []);
useEffect(() => {
  getServices()
    .then(data => console.log("Services:", data))
    .catch(err => console.error("Error:", err));
}, []);

  return (
    <div className="bg-[#f8fafc]">
      <Header />
      <HeroSection />

      <div className="max-w-[1200px] mx-auto">
        <Categories />
        <FeaturedDeals />
        <TrendingDeals />
        <HowItWorks />
        <TopServices />
        <WhyChooseUs />
        <Testimonials />
        <PartnerBrands />
        <BecomeProvider />
        <AppPromo />
      </div>

      <ChatWidget />
      <StickyBookingBar />
      <Footer />
    </div>
  );
}

