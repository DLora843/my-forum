import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Зареждане...</p>;
  }

  if (!posts.length) {
    return <p>Няма публикации за показване.</p>;
  }

  return (
    <div className="blog-container">
      <h1>Последни блог постове</h1>

      <div className="blog-list">
        {posts.map(post => (
          <div key={post._id || post.id} className="blog-card">
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.description}</p>

            <Link to={`/blog/${post._id || post.id}`} className="read-more">
              Прочети повече
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}