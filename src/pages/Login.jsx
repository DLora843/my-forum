import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../pages/Login.css";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await login(email, password);
        if (user) navigate("/");
    };

  return (
    <div>
      <h1>Вход</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <input 
        type="password"
        placeholder="Парола"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        <button type="submit">Вход</button>
      </form>
    </div>
  );
}