import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.price} ₽</p>
        <Button className="w-full rounded-md bg-primary hover:bg-primary/90 group">
          <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
          В корзину
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;