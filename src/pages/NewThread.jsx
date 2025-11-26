import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function NewThread() {
    const { id } = useParams();
    const { authFetch } = useContext(AuthContext);
    const [title, setTitle ] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert(`Тема "${title}" създадена успешно!`);
        navigate(`/category/${id}`);
    };

  return (
    <div>
      <h1>Нова тема</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"placeholder="Заглавие" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Съдържание" value={content} onChange={(e) => setContent(e.target.value)} required />
        <button type="submit">Създай тема</button>
      </form>
    </div>
  );
}