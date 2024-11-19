import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VideoServices = () => {
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
            Профессиональная видеосъемка
          </h1>
          <p className="text-lg text-foreground/80 mb-8">
            Создаем качественные видеоролики для любых мероприятий
          </p>
          <Button
            size="lg"
            className="shadow-md hover:shadow-lg transition-all duration-300"
          >
            Записаться на съемку
          </Button>
        </motion.div>
      </section>

      {/* Services Tabs */}
      <section className="container px-4 py-16">
        <h2 className="section-title text-center mb-12">Наши услуги</h2>
        <Tabs defaultValue="wedding" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-4">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="data-[state=active]:shadow-md py-3"
              >
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xl font-semibold">{service.price}</p>
                  <Button className="shadow-md hover:shadow-lg transition-all duration-300">
                    Заказать съемку
                  </Button>
                </div>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Portfolio */}
      <section className="container px-4 py-16 bg-muted rounded-xl shadow-inner">
        <h2 className="section-title text-center mb-12">Наши работы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Equipment */}
      <section className="container px-4 py-16">
        <h2 className="section-title text-center mb-12">Наше оборудование</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container px-4 py-16 bg-muted rounded-xl shadow-inner">
        <h2 className="section-title text-center mb-12">Как мы работаем</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {process.map((step, index) => (
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
        <h2 className="section-title text-center mb-12">Отзывы клиентов</h2>
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
                  <p className="text-foreground/80">{review.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="container px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="section-title">Готовы заказать съемку?</h2>
          <p className="text-foreground/80 mb-8">
            Свяжитесь с нами для обсуждения деталей вашего проекта
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="shadow-md hover:shadow-lg transition-all duration-300"
            >
              Написать в WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="shadow-md hover:shadow-lg transition-all duration-300"
            >
              Позвонить
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

const services = [
  {
    id: "wedding",
    title: "Свадебная съемка",
    description: "Профессиональная съемка вашего особенного дня",
    features: [
      "Full HD качество",
      "Монтаж видео",
      "Цветокоррекция",
      "Запись звука",
    ],
    price: "от 50 000 ₸",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    id: "corporate",
    title: "Корпоративная съемка",
    description: "Съемка мероприятий и презентаций",
    features: [
      "Многокамерная съемка",
      "Монтаж",
      "Графика",
      "Озвучка",
    ],
    price: "от 40 000 ₸",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    id: "commercial",
    title: "Рекламная съемка",
    description: "Создание рекламных роликов",
    features: [
      "Сценарий",
      "Кастинг",
      "Монтаж",
      "Спецэффекты",
    ],
    price: "от 60 000 ₸",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
];

const portfolio = [
  {
    title: "Свадьба Алии и Армана",
    description: "Романтическая свадебная церемония",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    title: "Презентация Tesla",
    description: "Корпоративное мероприятие",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    title: "Реклама для Nike",
    description: "Рекламный ролик новой коллекции",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
];

const equipment = [
  {
    title: "Камеры",
    description: "Sony A7III, Canon C70",
    icon: "📷",
  },
  {
    title: "Освещение",
    description: "Godox, Aputure",
    icon: "💡",
  },
  {
    title: "Стабилизация",
    description: "DJI RS 3 Pro",
    icon: "🎥",
  },
  {
    title: "Звук",
    description: "Rode, Sennheiser",
    icon: "🎤",
  },
];

const process = [
  {
    title: "Консультация",
    description: "Обсуждаем ваши идеи и пожелания",
  },
  {
    title: "Съемка",
    description: "Профессиональная съемка вашего проекта",
  },
  {
    title: "Монтаж",
    description: "Создание финального видео",
  },
];

const reviews = [
  {
    name: "Алия К.",
    date: "15.03.2024",
    text: "Отличная работа! Очень довольны результатом свадебной съемки.",
  },
  {
    name: "Арман Б.",
    date: "10.03.2024",
    text: "Профессиональный подход к делу. Рекомендую!",
  },
  {
    name: "Динара М.",
    date: "05.03.2024",
    text: "Качественная съемка и монтаж. Спасибо за работу!",
  },
];

export default VideoServices;