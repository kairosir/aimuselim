import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <section id="photography" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Видеосъемка</h2>
            <p className="text-lg text-gray-600 mb-8">
              Профессиональная видеосъемка для ваших проектов. Создаем качественный контент
              для любых целей - от личных до коммерческих.
            </p>
            <Link to="/photography">
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 group"
              >
                Заказать
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="english" className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Английский язык</h2>
            <p className="text-lg text-gray-600 mb-8">
              Эффективное обучение английскому языку с индивидуальным подходом.
              Современные методики и опытные преподаватели.
            </p>
            <Link to="/english">
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 group"
              >
                Записаться
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="shop" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Магазин</h2>
            <p className="text-lg text-gray-600 mb-8">
              Уникальные товары с нашей тщательно подобранной коллекцией.
              Качество и стиль для наших клиентов.
            </p>
            <Link to="/shop">
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 group"
              >
                Купить
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;