import { createContext, useState } from "react";

export const AuthContext = createContext();

const API_URL = "http://localhost:3000/api";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (email, password) => {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
      
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
    } catch (err) {
      alert(err.message);
    }
  };

  const register = async (username, email, password) => {
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {"Content-Type" : "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Register failed");
      alert("Registered successfully: " + username);
    } catch (err) {
      alert(err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const authFetch = async (url, options = {}) => {
    try {
      const token = user ?.token;
      const headers = { "Content-Type": "aplication/json", ...API_URL(options.headers || {}) };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(`${API_URL}${url}`, { ...options, headers });
      if (!res.ok) throw new Error("Request failed");
      return await res.json();
    } catch (err) {
      Console.error(err);
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, authFetch }}>
      {children}
    </AuthContext.Provider>
  );
}
