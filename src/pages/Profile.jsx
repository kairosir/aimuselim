import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6" />
            <h1 className="text-2xl font-semibold mb-2">Личный кабинет</h1>
            <p className="text-foreground/70">Добро пожаловать!</p>
          </div>

          <div className="space-y-8">
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Мои заказы</h2>
              <p className="text-foreground/70 text-center py-8">У вас пока нет заказов</p>
              <Button variant="secondary" className="w-full">
                Перейти в магазин
              </Button>
            </div>

            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Мои уроки</h2>
              <p className="text-foreground/70 text-center py-8">У вас пока нет забронированных уроков</p>
              <Button variant="secondary" className="w-full">
                Записаться на урок
              </Button>
            </div>

            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Мои съемки</h2>
              <p className="text-foreground/70 text-center py-8">У вас пока нет забронированных съемок</p>
              <Button variant="secondary" className="w-full">
                Заказать съемку
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;