import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-secondary/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-6 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Добро пожаловать
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Откройте для себя уникальные товары с нашей тщательно подобранной коллекцией
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            size="lg" 
            className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg group"
          >
            Начать покупки
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
      
      <div className="absolute -z-10 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl animate-float" />
      </div>
    </div>
  );
};

export default Hero;