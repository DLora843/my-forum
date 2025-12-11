import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../pages/Login.css";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(null); // true = успешен вход, false = грешка
  const [error, setError] = useState("");    // съобщение за грешка

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      if (user) {
        setValid(true);      // зелен квадрат
        setError("");
        navigate("/");       // препращане към началната страница
      }
    } catch (err) {
      setValid(false);       // червен квадрат
      setError(err.message || "Грешна парола или имейл");
    }
  };

  return (
    <div className="login-container">
      <h1>Вход</h1>
      <form onSubmit={handleSubmit}>
        <div className={`input-group ${valid === true ? "valid" : valid === false ? "invalid" : ""}`}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={`input-group ${valid === true ? "valid" : valid === false ? "invalid" : ""}`}>
          <input
            type="password"
            placeholder="Парола"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {valid === false && <p className="error-msg">{error}</p>}

        <button type="submit">Вход</button>
      </form>
    </div>
  );
}
