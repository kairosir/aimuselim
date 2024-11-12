import { HomeIcon, Camera, BookOpen, ShoppingBag, UserCircle } from "lucide-react";
import Index from "./pages/Index.jsx";
import Photography from "./pages/Photography.jsx";
import EnglishLearning from "./pages/EnglishLearning.jsx";
import Shop from "./pages/Shop.jsx";
import Profile from "./pages/Profile.jsx";

export const navItems = [
  {
    title: "Главная",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Фотосъемка",
    to: "/photography",
    icon: <Camera className="h-4 w-4" />,
    page: <Photography />,
  },
  {
    title: "Английский язык",
    to: "/english",
    icon: <BookOpen className="h-4 w-4" />,
    page: <EnglishLearning />,
  },
  {
    title: "Магазин",
    to: "/shop",
    icon: <ShoppingBag className="h-4 w-4" />,
    page: <Shop />,
  },
  {
    title: "Профиль",
    to: "/profile",
    icon: <UserCircle className="h-4 w-4" />,
    page: <Profile />,
  },
];