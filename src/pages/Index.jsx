import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Товар 1",
      price: "1999",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
    },
    {
      id: 2,
      name: "Товар 2",
      price: "2999",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    },
    {
      id: 3,
      name: "Товар 3",
      price: "3999",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-16 container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Популярные товары
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Gallery />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;