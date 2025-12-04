import React from "react";
import { Link } from "react-router-dom";
import "../pages/Home.css";

export default function Home() {
  const categories = [
    { id: 1, name: "Frontend", description: "React, Vue, CSS, HTML" },
    { id: 2, name: "Backend", description: "Node.js, Django, PHP" },
    { id: 3, name: "Databases", description: "SQL, NoSQL, MongoDB" },
  ];

  const blogPosts = [
    { id: 1, title: "Как да научим React", snippet: "React е библиотека за UI..." },
    { id: 2, title: "Node.js за начинаещи", snippet: "Node.js позволява да пишете..." },
    { id: 3, title: "CSS съвети и трикове", snippet: "Как да направите красиви UI..." },
  ];

  return (
    <div className="home-page">
      <header className="home-header">
      <h1>Добре дошли в My-Forum!</h1>
      <p>Твоето място за дискусии, знания и ресурси за разработка</p>
      <Link to="/forums" className="btn">Разгледай форумите</Link>
      </header>

      <section className="home-categories">
        <h2>Форум категории</h2>
        <div className="categories-list">
          {categories.map(cat => (
            <div key={cat.id} className="category-card">
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              <Link to="/forums" className="btn-small">Виж форума</Link>
              </div>
          ))}
        </div>
      </section>

       <section className="home-blog">
        <h2>Последни блог постове</h2>
        <div className="blog-list">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-card">
              <h3>{post.title}</h3>
              <p>{post.snippet}</p>
              <Link to="/blog" className="btn-small">Прочети повече</Link>
              </div>
          ))}
        </div>
      </section>
      </div>
  );
};

      


