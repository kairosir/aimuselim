import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement login logic
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement registration logic
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <Tabs defaultValue="login" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Вход</TabsTrigger>
        <TabsTrigger value="register">Регистрация</TabsTrigger>
      </TabsList>
      
      <TabsContent value="login">
        <form onSubmit={handleLogin} className="space-y-4">
          <Input type="text" placeholder="Логин" required />
          <Input type="password" placeholder="Пароль" required />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Загрузка..." : "Войти"}
          </Button>
        </form>
      </TabsContent>
      
      <TabsContent value="register">
        <form onSubmit={handleRegister} className="space-y-4">
          <Input type="text" placeholder="Логин" required />
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Пароль" required />
          <Input type="password" placeholder="Подтвердите пароль" required />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Загрузка..." : "Зарегистрироваться"}
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  );
};