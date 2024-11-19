import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CategoryPage = () => {
  const { category } = useParams();

  // In a real app, you would fetch products based on the category
  const products = [
    {
      id: 1,
      title: "Смартфон Xiaomi",
      description: "6GB RAM, 128GB Storage",
      price: "89 990 ₸",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    },
    // Add more products...
  ];

  return (
    <div className="container px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-semibold mb-8">{category}</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} to={`/shop/product/${product.id}`}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{product.title}</h3>
                  <p className="text-sm text-foreground/70 mb-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">{product.price}</span>
                    <Button variant="secondary" size="sm">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CategoryPage;