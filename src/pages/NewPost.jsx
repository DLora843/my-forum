import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function NewPost() {
  const { id} = useParams();
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventdefault();
    alert(`Пост добавен в тема ${id}`);
    navigate(`/thread/${id}`);
  };

  return (
    <div>
      <h1>Нов пост</h1>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Вашият пост" value={content} onChange={e => setContent(e.target.value)} required />
          <button type="submit">Добави</button>
      </form>
    </div>
  );
}
