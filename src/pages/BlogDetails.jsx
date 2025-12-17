import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./BlogDetails.css";
export default function BlogDetails() {
  const { id } = useParams(); // Взимаме id от URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const deleteHandler = async () => {
    const confirmDelete = window.confirm("Наистина ли искате да изтриете тази публикация?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Грешка при изтриването на публикацията");
      }

      alert("Публикацията е изтрита успешно!");
      navigate("/blog"); // пренасочване към списъка с блогове
    } catch (err) {
      console.error(err);
      alert("Неуспешно изтриване");
    }
  };

  if (loading) return <p>Зареждане на публикацията...</p>;
  if (!post) return <p>Публикацията не е намерена.</p>;

  return (
    <div className="blog-details">
      <h1>{post.title}</h1>
      {post.image && <img src={post.image}  alt={post.title} className="blog-image"/>}
      <p>{post.content}</p>
      <p><b>Автор:</b> {post.author}</p>
      <p><b>Дата:</b> {post.date}</p>
      <Link to={`/blog/${post._id}/edit`} className="edit-btn">
    Редактирай
  </Link>
  <button className="delete-btn" onClick={deleteHandler}>Изтрий</button>
    </div>
  );
}