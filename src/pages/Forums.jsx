import React from "react";
import { Link } from "react-router-dom";
import "../pages/Forums.css";

export default function Forums() {
  const categories = [
    { id: 1, 
      name: "Frontend", 
      description: "React, Vue, CSS, HTML",
      image: "/11791254.jpg"
    },
    { id: 2, 
      name: "Backend", 
      description: "Node.js, Django, PHP",
      image: "/backend_text_1.jpg" 
    },
    { id: 3, 
      name: "Databases", 
      description: "SQL, NoSQL, MongoDB",
      image: "/28393.jpg" 
    },
  ];


  return (
    <div className="forums-page">
      <header className="forums-header">
      <h1>Форум категории</h1>
      <p>Избери категория и започни дискусия!</p>
      </header>

        <div className="categories-list">
          {categories.map(cat => (
            <div key={cat.id} className="category-card">
              {cat.image && <img src={cat.image} alt={cat.name} className="category-img" />}
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              <Link to={`/forums/${cat.id}`}  className="btn-small">Виж форума</Link>
              </div>
          ))}
        </div>
      </div>
  );
};

      


