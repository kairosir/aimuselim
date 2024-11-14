import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Gallery from "../Gallery";

const PhotographySection = () => {
  return (
    <section id="photography" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <Camera className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-6 gradient-text">Профессиональная видеосъемка</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Создаем качественные видеоролики для любых событий. От семейных 
              праздников до корпоративных мероприятий — каждый момент особенный.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Наши преимущества</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Современное оборудование 4K
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Опытные операторы
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Креативный подход
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Быстрая обработка материала
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Виды съемок</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Свадебная видеосъемка
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Корпоративные мероприятия
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Рекламные ролики
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Музыкальные клипы
                </li>
              </ul>
            </motion.div>
          </div>

          <Gallery />

          <div className="text-center mt-12">
            <Link to="/photography" className="inline-block">
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 group"
              >
                Заказать съемку
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotographySection;