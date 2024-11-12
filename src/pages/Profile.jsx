import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Profile = () => {
  const [date, setDate] = useState(new Date());
  
  const homework = [
    {
      date: "2024-03-20",
      topic: "Present Simple",
      assignment: "Выполнить упражнения 1-3 в учебнике"
    },
    {
      date: "2024-03-22",
      topic: "Past Simple",
      assignment: "Написать эссе о прошедших выходных"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            className="md:col-span-1 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-center mb-2">Имя пользователя</h2>
              <p className="text-gray-600 text-center">Краткая биография</p>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Tabs defaultValue="schedule" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="schedule">Расписание</TabsTrigger>
                <TabsTrigger value="homework">Задания</TabsTrigger>
                <TabsTrigger value="settings">Настройки</TabsTrigger>
              </TabsList>

              <TabsContent value="schedule" className="mt-0">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
                  </h3>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
              </TabsContent>

              <TabsContent value="homework" className="mt-0">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Домашние задания</h3>
                  <Accordion type="single" collapsible>
                    {homework.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{item.date}</AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold">Тема урока</h4>
                              <p>{item.topic}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold">Домашнее задание</h4>
                              <p>{item.assignment}</p>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="mt-0">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Настройки</h3>
                  <p className="text-gray-600">Настройки будут добавлены позже</p>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;