import { HomeIcon, CameraIcon, BookOpenIcon, ShoppingBagIcon, UserIcon } from "lucide-react";
import Home from "./pages/Home";
import VideoServices from "./pages/VideoServices";
import EnglishLessons from "./pages/EnglishLessons";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import ProductPage from "./pages/shop/ProductPage";
import CategoryPage from "./pages/shop/CategoryPage";

export const navItems = [
  {
    title: "Главная",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Home />,
  },
  {
    title: "Видеосъемка",
    to: "/video",
    icon: <CameraIcon className="h-4 w-4" />,
    page: <VideoServices />,
  },
  {
    title: "Английский язык",
    to: "/english",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <EnglishLessons />,
  },
  {
    title: "Магазин",
    to: "/shop",
    icon: <ShoppingBagIcon className="h-4 w-4" />,
    page: <Shop />,
  },
  {
    title: "Профиль",
    to: "/profile",
    icon: <UserIcon className="h-4 w-4" />,
    page: <Profile />,
  },
];

// Additional routes that don't appear in the navigation
export const additionalRoutes = [
  {
    to: "/shop/product/:id",
    page: <ProductPage />,
  },
  {
    to: "/shop/category/:category",
    page: <CategoryPage />,
  },
];