import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ForumCategory.css";

export default function ForumCategory() {
  const { id } = useParams();

  const categories = {
    1: {
      name: "Frontend",
      description: "React, Vue, CSS, HTML",
      image: "/11791254.jpg",
      topics: [
        { id: 1, title: "React Hooks проблеми", replies: 12 },
        { id: 2, title: "CSS Grid vs Flexbox", replies: 5 },
        { id: 3, title: "Адаптивност и медиa заявки", replies: 8 },
      ],
    },
    2: {
      name: "Backend",
      description: "Node.js, Django, PHP",
      image: "/backend_text_1.jpg",
      topics: [
        { id: 4, title: "Node Authentication JWT", replies: 22 },
        { id: 5, title: "Какво е REST API", replies: 9 },
      ],
    },
    3: {
      name: "Databases",
      description: "SQL, NoSQL, MongoDB",
      image: "/28393.jpg",
      topics: [
        { id: 6, title: "Mongo Collection vs Table", replies: 3 },
        { id: 7, title: "SQL Indexes explained", replies: 16 },
      ],
    },
  };

  const category = categories[id];

  if (!category) return <h2>Категорията не е намерена!</h2>;

  return (
    <div className="category-page">
      <header className="category-header">
        <img src={category.image} alt={category.name} className="category-banner" />
        <h1>{category.name}</h1>
        <p>{category.description}</p>
        <Link to="/forums" className="back-btn">⬅ Назад към категориите</Link>
      </header>

      <div className="topics-list">
        {category.topics.map(topic => (
          <div key={topic.id} className="topic-card">
            <h3 className="topic-title">{topic.title}</h3>

            {topic.image && (
                <img src={topic.image} alt={topic.title} className="topic-banner" />
            )}
            <p>{topic.replies} отговора</p>
            <Link to={`/topic/${topic.id}`} className="btn-small">Виж темата</Link>
          </div>
        ))}
      </div>
    </div>
  );
}