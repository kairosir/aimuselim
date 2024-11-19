import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EnglishLessons = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container px-4 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="hero-title mb-6">
            Уроки английского языка
          </h1>
          <p className="text-lg text-foreground/80 mb-8">
            Индивидуальные занятия для всех уровней
          </p>
          <Button
            size="lg"
            className="shadow-md hover:shadow-lg transition-all duration-300"
          >
            Записаться на урок
          </Button>
        </motion.div>
      </section>

      {/* Courses Grid */}
      <section className="container px-4 py-16">
        <h2 className="section-title text-center mb-12">Наши курсы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
                  <p className="text-foreground/70 mb-4">{course.description}</p>
                  <ul className="space-y-2 mb-4">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg font-semibold mb-4">{course.price}</p>
                  <Button
                    variant="secondary"
                    className="w-full shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Выбрать курс
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="container px-4 py-16 bg-muted rounded-xl shadow-inner">
        <h2 className="section-title text-center mb-12">Наши методики</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{method.title}</h3>
                  </div>
                  <p className="text-foreground/70">{method.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section className="container px-4 py-16">
        <h2 className="section-title text-center mb-12">Расписание занятий</h2>
        <div className="max-w-2xl mx-auto">
          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="individual">Индивидуальные</TabsTrigger>
              <TabsTrigger value="group">Групповые</TabsTrigger>
            </TabsList>
            <TabsContent value="individual">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {schedule.individual.map((time, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 bg-muted rounded-lg"
                      >
                        <span>{time.time}</span>
                        <Button variant="outline" size="sm">
                          Записаться
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="group">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {schedule.group.map((time, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 bg-muted rounded-lg"
                      >
                        <span>{time.time}</span>
                        <Button variant="outline" size="sm">
                          Записаться
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ */}
      <section className="container px-4 py-16 bg-muted rounded-xl shadow-inner">
        <h2 className="section-title text-center mb-12">Частые вопросы</h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Teachers */}
      <section className="container px-4 py-16">
        <h2 className="section-title text-center mb-12">Наши преподаватели</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    {teacher.name}
                  </h3>
                  <p className="text-center text-foreground/70 mb-4">
                    {teacher.position}
                  </p>
                  <p className="text-sm text-center">{teacher.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="container px-4 py-16 bg-muted rounded-xl shadow-inner">
        <h2 className="section-title text-center mb-12">Отзывы учеников</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10" />
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-foreground/70">{review.course}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80">{review.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const courses = [
  {
    title: "Начальный уровень",
    description: "Для тех, кто только начинает изучать английский",
    features: [
      "Базовая грамматика",
      "Разговорная практика",
      "Аудирование",
    ],
    price: "от 5 000 ₸/урок",
    icon: "🌱",
  },
  {
    title: "Средний уровень",
    description: "Для тех, кто хочет улучшить свой английский",
    features: [
      "Углубленная грамматика",
      "Деловой английский",
      "Подготовка к экзаменам",
    ],
    price: "от 6 000 ₸/урок",
    icon: "📚",
  },
  {
    title: "Продвинутый уровень",
    description: "Для тех, кто стремится к совершенству",
    features: [
      "Сложная грамматика",
      "Бизнес-английский",
      "Подготовка к IELTS/TOEFL",
    ],
    price: "от 7 000 ₸/урок",
    icon: "🎓",
  },
];

const methods = [
  {
    title: "Коммуникативный подход",
    description: "Обучение через активное общение и практику",
    icon: "💬",
  },
  {
    title: "Индивидуальный подход",
    description: "Программа обучения адаптируется под каждого ученика",
    icon: "👤",
  },
  {
    title: "Современные технологии",
    description: "Использование онлайн-платформ и интерактивных материалов",
    icon: "💻",
  },
  {
    title: "Регулярная практика",
    description: "Постоянное закрепление материала через упражнения",
    icon: "✍️",
  },
];

const schedule = {
  individual: [
    { time: "09:00 - 10:00" },
    { time: "10:00 - 11:00" },
    { time: "11:00 - 12:00" },
    { time: "14:00 - 15:00" },
  ],
  group: [
    { time: "15:00 - 16:30" },
    { time: "17:00 - 18:30" },
    { time: "19:00 - 20:30" },
  ],
};

const faq = [
  {
    question: "Как проходят занятия?",
    answer: "Занятия проводятся индивидуально или в мини-группах. Каждый урок включает в себя практику разговорной речи, грамматики и аудирования.",
  },
  {
    question: "Какова продолжительность курса?",
    answer: "Продолжительность курса зависит от ваших целей и начального уровня. В среднем, для перехода на следующий уровень требуется 3-4 месяца при занятиях 2-3 раза в неделю.",
  },
  {
    question: "Есть ли пробное занятие?",
    answer: "Да, первое пробное занятие проводится со скидкой 50%, чтобы вы могли познакомиться с преподавателем и методикой обучения.",
  },
];

const teachers = [
  {
    name: "Анна Петрова",
    position: "Старший преподаватель",
    description: "10 лет опыта преподавания, сертификат CELTA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Джон Смит",
    position: "Носитель языка",
    description: "Преподаватель из США, опыт работы 5 лет",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    name: "Мария Иванова",
    position: "Преподаватель",
    description: "Специалист по подготовке к IELTS",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
];

const reviews = [
  {
    name: "Алия К.",
    course: "Начальный уровень",
    text: "За 3 месяца занятий значительно улучшила свой английский. Очень довольна результатом!",
  },
  {
    name: "Арман Б.",
    course: "Средний уровень",
    text: "Отличная подготовка к IELTS. Сдал на 7.0 благодаря занятиям.",
  },
  {
    name: "Динара М.",
    course: "Продвинутый уровень",
    text: "Прекрасные преподаватели и методика обучения. Рекомендую!",
  },
];

export default EnglishLessons;