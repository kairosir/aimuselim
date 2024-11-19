import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container px-4 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="hero-title mb-6">
            Интернет-магазин
          </h1>
          <p className="text-lg text-foreground/80 mb-8">
            Товары из Pinduoduo с доставкой
          </p>
          <Button
            size="lg"
            className="shadow-md hover:shadow-lg transition-all duration-300"
          >
            Смотреть товары
          </Button>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="container px-4 py-16">
        <h2 className="section-title text-center mb-12">Категории</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="card aspect-square relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-semibold">
                    {category.title}
                  </h3>
                  <p className="text-white/80 text-sm">{category.count} товаров</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4 py-16 bg-muted rounded-xl shadow-inner">
        <h2 className="section-title text-center mb-12">Популярные товары</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
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
                    <Button
                      variant="secondary"
                      size="sm"
                      className="shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="container px-4 py-16">
        <h2 className="section-title text-center mb-12">Наши преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-foreground/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How to Order */}
      <section className="container px-4 py-16 bg-muted rounded-xl shadow-inner">
        <h2 className="section-title text-center mb-12">Как сделать заказ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {orderSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                {index + 1}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-foreground/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="container px-4 py-16">
        <h2 className="section-title text-center mb-12">Отзывы покупателей</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10" />
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-foreground/70">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-2">{review.text}</p>
                  <div className="flex items-center gap-1">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Payment Methods */}
      <section className="container px-4 py-16 bg-muted rounded-xl shadow-inner">
        <h2 className="section-title text-center mb-12">Способы оплаты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      {method.icon}
                    </div>
                    <h3 className="font-semibold">{method.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/70">{method.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const categories = [
  {
    title: "Одежда",
    count: 120,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
  {
    title: "Электроника",
    count: 85,
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
  },
  {
    title: "Косметика",
    count: 64,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    title: "Аксессуары",
    count: 93,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
];

const products = [
  {
    title: "Смартфон Xiaomi",
    description: "6GB RAM, 128GB Storage",
    price: "89 990 ₸",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
  {
    title: "Наушники TWS",
    description: "Bluetooth 5.0, 20h",
    price: "12 990 ₸",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
  },
  {
    title: "Умные часы",
    description: "Фитнес-трекер",
    price: "24 990 ₸",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    title: "Рюкзак",
    description: "Водонепроницаемый",
    price: "8 990 ₸",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
];

const benefits = [
  {
    title: "Быстрая доставка",
    description: "7-14 дней",
    icon: "🚚",
  },
  {
    title: "Гарантия",
    description: "30 дней",
    icon: "✅",
  },
  {
    title: "Низкие цены",
    description: "Прямые поставки",
    icon: "💰",
  },
  {
    title: "Поддержка",
    description: "24/7",
    icon: "📞",
  },
];

const orderSteps = [
  {
    title: "Выбор товара",
    description: "Выберите товар из каталога",
  },
  {
    title: "Оформление",
    description: "Укажите адрес доставки",
  },
  {
    title: "Оплата",
    description: "Оплатите удобным способом",
  },
];

const reviews = [
  {
    name: "Алия К.",
    date: "15.03.2024",
    text: "Отличный магазин! Быстрая доставка.",
    rating: 5,
  },
  {
    name: "Арман Б.",
    date: "10.03.2024",
    text: "Хорошие цены и качество.",
    rating: 4,
  },
  {
    name: "Динара М.",
    date: "05.03.2024",
    text: "Всем рекомендую!",
    rating: 5,
  },
];

const paymentMethods = [
  {
    title: "Kaspi Red",
    description: "Рассрочка до 24 месяцев",
    icon: "💳",
  },
  {
    title: "Kaspi Gold",
    description: "Моментальная оплата",
    icon: "💰",
  },
  {
    title: "Наличные",
    description: "При получении",
    icon: "💵",
  },
];

export default Shop;