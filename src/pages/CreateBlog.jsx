import { useState } from "react";
import "./CreateBlog.css";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!title || !description || !content) {
      alert("Всички полета са задължителни");
      return;
    }

    await fetch("http://localhost:3000/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, content }),
    });

    alert("Публикацията е създадена успешно");
  };

  return (
    <div className="create-blog-container">
      <h1>Създай нов блог пост</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Заглавие"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Кратко описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <textarea
          placeholder="Съдържание"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Създай</button>
      </form>
    </div>
  );
}
