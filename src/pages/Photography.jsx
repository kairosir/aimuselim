import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Photography = () => {
  const videos = [
    { id: 1, url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 3, url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 4, url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-4 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Заказ съемки
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Профессиональная видеосъемка для ваших проектов
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              className="aspect-video rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <iframe
                src={video.url}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full animate-float"
          >
            Заказать съемку
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Photography;