import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../pages/Home.css";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const { authFetch } = useContext(AuthContext);

  useEffect(() => {
    authFetch("/categories")
    .then(setCategories)
    .catch(console.error)
  }, []);

  return (
    <div className="home-container">
      <h1>Категории</h1>

      <div className="category-list">
        {categories.map(cat => {
          <Link 
          key={cat._id} 
          to={`/category/${cat._id}`} 
          className="category-card"
          >
            <h3>{cat.name}</h3>
            <p>{cat.description || "Няма описание за тази категория."}</p>
          </Link>
        })}
      </div>
    </div>
  );
}

