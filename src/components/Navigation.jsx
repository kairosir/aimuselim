import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { UserCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { LoginForm } from "./LoginForm";

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold gradient-text">
            Logo
          </Link>

          <nav className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('photography')}
              className="nav-link flex items-center space-x-2 text-sm font-medium"
            >
              Видеосъемка
            </button>
            <button
              onClick={() => scrollToSection('english')}
              className="nav-link flex items-center space-x-2 text-sm font-medium"
            >
              Английский язык
            </button>
            <button
              onClick={() => scrollToSection('shop')}
              className="nav-link flex items-center space-x-2 text-sm font-medium"
            >
              Магазин
            </button>
          </nav>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <UserCircle className="h-6 w-6" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Вход в систему</DialogTitle>
              </DialogHeader>
              <LoginForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </motion.header>
  );
};

export default Navigation;