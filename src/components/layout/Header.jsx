import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { navItems } from "@/nav-items";

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-center space-x-4">
          {navItems.map(({ title, to, icon }) => (
            <Link key={to} to={to}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors ${
                  location.pathname === to
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                {icon}
                <span>{title}</span>
              </motion.button>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;