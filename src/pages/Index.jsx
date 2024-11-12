import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
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
              Профессиональная видеосъемка для ваших особенных моментов. Мы создаем 
              качественные видеоролики для любых событий - от семейных праздников 
              до корпоративных мероприятий. Наша команда использует современное 
              оборудование и креативный подход к каждому проекту.
            </p>
            <Gallery />
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-semibold">Наши услуги включают:</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Свадебная видеосъемка</li>
                <li>• Корпоративные мероприятия</li>
                <li>• Рекламные ролики</li>
                <li>• Музыкальные клипы</li>
              </ul>
            </div>
            <Link to="/photography" className="mt-8 inline-block">
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 group"
              >
                Заказать съемку
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
              Наши преподаватели используют современные методики и интерактивные 
              материалы для достижения наилучших результатов.
            </p>
            <Gallery />
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-semibold">Преимущества обучения:</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Индивидуальный подход к каждому ученику</li>
                <li>• Современные методики обучения</li>
                <li>• Разговорная практика с носителями языка</li>
                <li>• Гибкий график занятий</li>
              </ul>
            </div>
            <Link to="/english" className="mt-8 inline-block">
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 group"
              >
                Записаться на обучение
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
              Откройте для себя уникальные товары в нашем магазине. Мы тщательно 
              подбираем каждый предмет, чтобы предложить вам только лучшее качество 
              и стиль.
            </p>
            <Gallery />
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-semibold">Наши категории:</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Модная одежда</li>
                <li>• Аксессуары</li>
                <li>• Подарки</li>
                <li>• Предметы интерьера</li>
              </ul>
            </div>
            <Link to="/shop" className="mt-8 inline-block">
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 group"
              >
                Перейти в магазин
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;