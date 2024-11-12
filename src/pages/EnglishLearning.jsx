import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EnglishLearning = () => {
  const images = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
  ];

  return (
    <div className="min-h-screen pt-20">
      <div 
        className="h-[50vh] relative bg-cover bg-center bg-no-repeat mb-12"
        style={{ 
          backgroundImage: `url(${images[0]})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(255,255,255,0.9)"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-bold mb-4 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Обучение английскому языку
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-800 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Индивидуальный подход к каждому ученику
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Carousel className="w-full max-w-4xl mx-auto mb-12">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <motion.div 
                  className="aspect-video rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full animate-float"
          >
            Запись на занятие
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnglishLearning;