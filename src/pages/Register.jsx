import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Register.css";
export default function Register() {
   const { register } = useContext(AuthContext);
   const navigate = useNavigate();
   
   const [username,setUsername] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");

   const [valid, setValid] = useState(null);
   const[error, setError] = useState("");

   const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const user = await register(username, email, password);
        if (user) {
          setValid(true);
          setError("");
          navigate("/login");
        }
        }catch (err){
        setValid(false);
        setError(err.message || "Грешна регистарция");
        }
        };

  return (
    <div className="register-container">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <div className={`input-group ${valid === true ? "valid" : valid === false ? "invalid" : ""}`}>
        <input 
        type="text" 
        placeholder="Потребителско име" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        required
        />
       </div>

       <div className={`input-group ${valid === true ? "valid" : valid === false ? "invalid" : ""}`}>
        <input 
        type="email" 
        placeholder="Имейл" 
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
        <button type="submit">Регистрация</button>
      </form>
    </div>
  );
}
