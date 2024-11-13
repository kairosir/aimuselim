import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, BookOpen, ShoppingBag } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Hero />
      
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
              <h2 className="text-4xl font-bold mb-6 gradient-text">Видеосъемка</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Создаем профессиональные видеоролики для ваших особенных моментов. 
                От семейных праздников до корпоративных мероприятий - мы запечатлеем 
                каждое мгновение с особым вниманием к деталям.
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
                    Современное оборудование
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Опытные операторы
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Креативный подход
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

      <section id="english" className="py-16 bg-gradient-to-b from-white to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h2 className="text-4xl font-bold mb-6 gradient-text">Английский язык</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Эффективное обучение английскому языку с индивидуальным подходом.
                Развивайте свои языковые навыки с профессиональными преподавателями.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">Для начинающих</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Базовая грамматика</li>
                  <li>• Разговорная практика</li>
                  <li>• Аудирование</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">Для продолжающих</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Сложная грамматика</li>
                  <li>• Деловой английский</li>
                  <li>• Подготовка к IELTS</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">Для продвинутых</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Разговорный клуб</li>
                  <li>• Бизнес-английский</li>
                  <li>• Подготовка к TOEFL</li>
                </ul>
              </motion.div>
            </div>

            <Gallery />

            <div className="text-center mt-12">
              <Link to="/english" className="inline-block">
                <Button 
                  size="lg" 
                  className="rounded-full bg-secondary hover:bg-secondary/90 group"
                >
                  Записаться на обучение
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="shop" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h2 className="text-4xl font-bold mb-6 gradient-text">Магазин</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Откройте для себя уникальные товары в нашем магазине. Мы тщательно 
                подбираем каждый предмет, чтобы предложить вам только лучшее качество.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Наши категории</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Модная одежда
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Аксессуары
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Подарки
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Преимущества</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Быстрая доставка
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Гарантия качества
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Удобная оплата
                  </li>
                </ul>
              </motion.div>
            </div>

            <Gallery />

            <div className="text-center mt-12">
              <Link to="/shop" className="inline-block">
                <Button 
                  size="lg" 
                  className="rounded-full bg-accent hover:bg-accent/90 text-black group"
                >
                  Перейти в магазин
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;