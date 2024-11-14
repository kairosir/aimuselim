import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Gallery from "../Gallery";

const EnglishSection = () => {
  return (
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
              От базового до продвинутого уровня.
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
                <li>• Игровые методики</li>
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
                <li>• Разговорные клубы</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">Для продвинутых</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Бизнес-английский</li>
                <li>• Подготовка к TOEFL</li>
                <li>• Технический английский</li>
                <li>• Литературный перевод</li>
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
  );
};

export default EnglishSection;