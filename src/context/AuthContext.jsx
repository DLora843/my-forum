import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);

      return data;
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const register = async (username, email, password) => {
    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {"Content-Type" : "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Registration failed");

      console.log("Registered:", data);
      return data;
    } catch (err) {
      console.error("Register error:", err);
      alert(err.message);
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const authFetch = async (url, options = {}) => {
    try {
      const headers = { ...(options.headers || {}) };

      if (!headers["Content-Type"]){
        headers["Content-Type"] = "application/json";
      }
      
      if (user?.token) {
        headers["Authorization"] = `Bearer ${user.token}`;
      }
    
      const res = await fetch(`http://localhost:3000/api${url}`, {
        ...options,
        headers,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Request failed");

      return data;
    } catch (err) {
      console.error("AuthFetch error:", err);
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, authFetch }}>
      {children}
    </AuthContext.Provider>
  );
}
