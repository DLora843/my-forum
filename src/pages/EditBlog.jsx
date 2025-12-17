import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setTitle(data.title);
        setDescription(data.description);
        setContent(data.content);
        setLoading(false);
      });
  }, [id, user, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!title || !description || !content) {
      alert("Всички полета са задължителни");
      return;
    }

    try {
      await fetch(`http://localhost:3000/api/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, content }),
      });

      alert("Публикацията е редактирана успешно");
      navigate(`/blog/${id}`);
    } catch (err) {
      console.error(err);
      alert("Възникна грешка при редакцията");
    }
  };

  if (loading) return <p>Зареждане на публикацията...</p>;
  if (!post) return <p>Публикацията не е намерена.</p>;

  return (
    <div className="edit-blog-container">
      <h1>Редактиране на публикация</h1>
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
        <button type="submit">Запази промените</button>
      </form>
    </div>
  );
}
