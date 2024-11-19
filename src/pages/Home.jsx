import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { navItems } from "@/nav-items";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import GoogleMap from "@/components/shared/GoogleMap";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Services Sections */}
      <div className="space-y-20 py-10">
        {navItems.slice(1, 4).map((service, index) => (
          <motion.section
            key={service.to}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="container px-4 py-16 bg-white rounded-xl shadow-lg"
          >
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
              <p className="text-foreground/70 mb-8">
                {getServiceDescription(service.title)}
              </p>
              <Carousel className="max-w-4xl mx-auto">
                <CarouselContent>
                  {getServiceImages(service.title).map((img, i) => (
                    <CarouselItem key={i}>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src={img}
                          alt={`${service.title} ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <Link to={service.to} className="mt-8 inline-block">
                <Button
                  size="lg"
                  className="shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Подробнее
                </Button>
              </Link>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Kaspi Section */}
      <section className="container px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="card p-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl bg-white">
            <h3 className="text-xl font-semibold mb-4">Kaspi Рассрочка 0-0-12</h3>
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="Kaspi Рассрочка"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="card p-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl bg-white">
            <h3 className="text-xl font-semibold mb-4">Kaspi Red</h3>
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1504893524553-b855bce32c67"
                alt="Kaspi Red"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="container px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-8">Наш адрес</h2>
          <GoogleMap />
        </motion.div>
      </section>
    </div>
  );
};

function getServiceDescription(title) {
  switch (title) {
    case "Видеосъемка":
      return "Профессиональная видеосъемка для любых мероприятий: свадьбы, корпоративы, репортажи";
    case "Английский язык":
      return "Индивидуальные уроки английского языка для всех уровней с опытными преподавателями";
    case "Магазин":
      return "Качественные товары из Pinduoduo с быстрой доставкой и гарантией";
    default:
      return "";
  }
}

function getServiceImages(title) {
  switch (title) {
    case "Видеосъемка":
      return [
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
      ];
    case "Английский язык":
      return [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      ];
    case "Магазин":
      return [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
        "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
      ];
    default:
      return [];
  }
}

export default Home;