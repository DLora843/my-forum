// src/context/AuthContext.jsx
import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Текущ потребител, взет от localStorage (симулация)
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Симулиран login
  const login = async (email, password) => {
    // Тук няма fetch — просто симулираме успешно логване
    const simulatedUser = { username: "TestUser", email };
    localStorage.setItem("token", "fake-jwt-token");
    localStorage.setItem("user", JSON.stringify(simulatedUser));
    setUser(simulatedUser);
    alert("Успешен вход!");
  };

  // Симулирана регистрация
  const register = async (username, email, password) => {
    // Тук няма fetch — просто симулираме регистрация
    alert(`Потребител ${username} регистриран успешно!`);
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    alert("Излязохте успешно!");
  };

  // Симулиран authFetch
  const authFetch = async (url, options = {}) => {
    // В реалния проект тук ще се извършва fetch към бекенда
    // За сега просто връща примерни данни
    console.log("authFetch called:", url, options);

    // Пример за симулирана категория и теми
    if (url.startsWith("/categories/1")) {
      return {
        name: "Общи теми",
        threads: [
          { _id: "101", title: "Първа тема" },
          { _id: "102", title: "Втора тема" },
        ],
      };
    }

    if (url.startsWith("/categories/2")) {
      return {
        name: "Технологии",
        threads: [
          { _id: "201", title: "React въпроси" },
          { _id: "202", title: "Node.js дискусии" },
        ],
      };
    }

    // Симулиране на response за други заявки
    return { message: "Simulated response" };
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, authFetch }}>
      {children}
    </AuthContext.Provider>
  );
}
