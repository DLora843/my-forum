import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email е задължителен";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Невалиден email";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Парола е задължителна";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Паролата трябва да е поне 6 символа";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) return;

    try {
      const user = await login(email, password);
      if (user) {
        navigate("/"); // препращане към началната страница
      }
    } catch (err) {
      setSubmitError(err.message || "Грешна парола или имейл");
    }
  };

  return (
    <div className="login-container">
      <h1>Вход</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className={`input-group ${errors.email ? "invalid" : ""}`}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span className="error-msg">{errors.email}</span>
          )}
        </div>

        <div className={`input-group ${errors.password ? "invalid" : ""}`}>
          <input
            type="password"
            placeholder="Парола"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <span className="error-msg">{errors.password}</span>
          )}
        </div>

        {submitError && <p className="error-msg submit-error">{submitError}</p>}

        <button type="submit">Вход</button>
      </form>
    </div>
  );
}
