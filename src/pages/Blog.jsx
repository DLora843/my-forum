import { Link } from "react-router-dom";
import "./Blog.css";

const blogPosts = [
    {
        id: 1,
    title: "Как да научим React",
    description: "React е библиотека за UI...",
  },
  {
    id: 2,
    title: "Node.js за начинаещи",
    description: "Node.js позволява да пишете...",
  },
  {
    id: 3,
    title: "CSS съвети и трикове",
    description: "Как да направите красиви UI...",
  },
];

export default function Blog() {
    return (
        <div className="blog-container">
            <h1>Последни блог постове</h1>
            <div className="blog-list">
                {blogPosts.map((post) => (
                    <div key={post.id} className="blog-card">
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <Link to={`/blog/${post.id}`} className="read-more">
                        Прочети повече
                    </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}