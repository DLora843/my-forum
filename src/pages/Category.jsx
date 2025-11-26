import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Category() {
    const { id } = useParams();
    const { authFetch, user } = useContext(AuthContext);
    const [threads, setThreads] = useState([]);
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const category = await authFetch(`/categories/${id}`);
                setCategoryName(category.name);
                setThreads(category.threads || {});
            } catch (err) {
                console.error(err.message);
            }
        };
        fetchData();
    }, [id]);

  return (
    <div>
      <h1>Категория: {categoryName}</h1>
      {user && <Link to={`/category/${id}/new-thread`}><button>Нова тема</button></Link>}
      <ul>
        {threads.length === 0 && <li>Все още няма теми.</li>}
        {threads.map(t => (
            <li key={t._id}><Link to={`/thread/${t._id}`}>{t.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}
