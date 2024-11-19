import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ProductPage = () => {
  const { id } = useParams();

  // In a real app, you would fetch the product data based on the ID
  const product = {
    title: "Смартфон Xiaomi",
    description: "6GB RAM, 128GB Storage",
    price: "89 990 ₸",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    features: [
      "Процессор Snapdragon 888",
      "Камера 108MP",
      "Быстрая зарядка 67W",
      "AMOLED экран 120Hz"
    ]
  };

  return (
    <div className="container px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="text-foreground/70">{product.description}</p>
          <div className="space-y-2">
            <h3 className="font-semibold">Характеристики:</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-2xl font-semibold">{product.price}</p>
          <div className="space-y-4">
            <Button size="lg" className="w-full">
              Купить сейчас
            </Button>
            <Button variant="outline" size="lg" className="w-full">
              Добавить в корзину
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductPage;