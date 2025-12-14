import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Details.css";

export default function Details() {
  const { id } = useParams();

  const topics = {
    1: {
      title: "React Hooks",
      description: "Обсъждане на React Hooks, useState, useEffect и custom hooks.",
      details: "В тази тема ще разгледаме често срещани проблеми при React Hooks, практики за оптимизация и примери за използване в реални проекти.",
      image: "/react.jpg", 
    },
    2: {
      title: "Node.js",
      description: "Темa за Node.js и backend логика, работа с REST API и JWT.",
      details: "Тук ще обсъдим създаване на сървъри, маршрути, аутентикация и middleware в Node.js.",
      image: "/images.jpg"
    },
    3: {
      title: "MongoDB",
      description: "База данни и Mongoose, работа с документи и колекции.",
      details: "Обсъждаме CRUD операции, индексиране, оптимизация на заявки и работа с Mongoose модели.",
      image:"/MongoDB.jpg"
    },
  };

  const topic = topics[id];

  if (!topic) return <h2>Тази тема не е намерена!</h2>;

  return (
    <div className="details-page">
      <h1>{topic.title}</h1>
      <img src={topic.image} alt={topic.title} className="tpoic-image" />
      <p>{topic.description}</p>
      <p>{topic.details}</p>

      {/* Бутон за връщане към Themes page */}
      <Link to="/themes" className="back-btn">
        ⬅ Назад към всички теми
      </Link>
    </div>
  );
}
