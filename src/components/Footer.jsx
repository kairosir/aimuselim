import { Instagram, MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-4">Наш магазин</h3>
            <p className="text-gray-600 max-w-md">
              Мы стремимся предоставить лучший сервис и качественные товары нашим клиентам
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold mb-4">Свяжитесь с нами</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-6 h-6 text-primary" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <MessageCircle className="w-6 h-6 text-primary" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Phone className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; 2024 Наш магазин. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;