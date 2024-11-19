import { Link } from "react-router-dom";
import { MessageCircle, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p className="text-foreground/70">© 2024 Aimuselim. Все права защищены</p>
          <div className="flex gap-4">
            <Link
              to="https://wa.me/your_number"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              <MessageCircle className="h-6 w-6" />
            </Link>
            <Link
              to="https://t.me/your_username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              <Send className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;