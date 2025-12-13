import { Link } from "react-router-dom";
import "/.Blog.css";

export default function BlogCard({ post }) {
    return (
        <article className="blog-card">
            <h3>{post.titile}</h3>
            <p>{post.content.slice(0, 80)}...</p>

            <Link to={`/blog/${post._id}`} className="read-more">
            Прочети повече
            </Link>
        </article>
    );
}