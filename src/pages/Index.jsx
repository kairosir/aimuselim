import { motion } from "framer-motion";
import HeroSection from "../components/sections/HeroSection";
import PhotographySection from "../components/sections/PhotographySection";
import EnglishSection from "../components/sections/EnglishSection";
import ShopSection from "../components/sections/ShopSection";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <PhotographySection />
      <EnglishSection />
      <ShopSection />
      <Reviews />
      <Footer />
    </motion.div>
  );
};

export default Index;