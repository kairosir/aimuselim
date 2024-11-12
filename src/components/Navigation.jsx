import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { navItems } from "@/nav-items";
import { UserCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { LoginForm } from "./LoginForm";

const Navigation = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <nav className="flex items-center space-x-8">
            {navItems.slice(0, -1).map(({ title, to, icon }) => (
              <Link
                key={to}
                to={to}
                className="nav-link flex items-center space-x-2 text-sm font-medium"
              >
                {icon}
                <span>{title}</span>
              </Link>
            ))}
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