import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Товар 1",
      price: "1999 ₽",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
    },
    {
      id: 2,
      name: "Товар 2",
      price: "2999 ₽",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    },
    {
      id: 3,
      name: "Товар 3",
      price: "3999 ₽",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-4 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Интернет-магазин
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Уникальные товары для наших клиентов
        </motion.p>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                <motion.div 
                  className="relative aspect-square rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p>{product.price}</p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Shop;