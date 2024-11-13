import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Анна М.",
      rating: 5,
      text: "Отличный магазин! Быстрая доставка и качественные товары. Очень довольна покупками и обслуживанием.",
      type: "Магазин"
    },
    {
      id: 2,
      name: "Петр К.",
      rating: 5,
      text: "Профессиональная видеосъемка на высшем уровне. Результат превзошел все ожидания!",
      type: "Видеосъемка"
    },
    {
      id: 3,
      name: "Мария С.",
      rating: 5,
      text: "Замечательные уроки английского. Преподаватель находит подход к каждому ученику.",
      type: "Английский"
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-secondary/10 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Отзывы наших клиентов
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md card-hover relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-2">{review.text}</p>
              <span className="text-sm text-primary font-medium">{review.type}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;