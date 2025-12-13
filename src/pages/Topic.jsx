import React from "react";
import { useParams, Link } from "react-router-dom";
import "../pages/Topic.css";

export default function Topic() {
  const { topicId } = useParams();

  // Теми с reply-card-и и линкове за картинки
  const topics = {
    1: {
      title: "React Hooks проблеми",
      description: "Обсъждаме проблеми при използване на useEffect и useState.",
      replies: [
        { id: 1, user: "Ivan", text: "Опитай да използваш useEffect с правилните зависимости.", avatar: "https://i.pravatar.cc/50?img=1"},
        { id: 2, user: "Maria", text: "Внимавай с async функции вътре в useEffect.", avatar: "https://i.pravatar.cc/50?img=2"},
        { id: 3, user: "Petar", text: "Може би проблема е със stale closure.", avatar: "https://i.pravatar.cc/50?img=3"},
        { id: 4, user: "Elena", text: "Провери дали не си забравил dependency array.", avatar: "https://i.pravatar.cc/50?img=4" },
        { id: 5, user: "Georgia", text: "Използвай useCallback за функции, предавани на children.", avatar: "https://i.pravatar.cc/50?img=5" },
        { id: 6, user: "Nikolay", text: "React.StrictMode може да кара useEffect да се вика два пъти в dev.", avatar: "https://i.pravatar.cc/50?img=6" },
        { id: 7, user: "Ana", text: "Пробвай да разделиш сложните useEffect на по-малки.", avatar: "https://i.pravatar.cc/50?img=7" },
        { id: 8, user: "Dimitar", text: "Може да е проблем със състоянието в useState.", avatar: "https://i.pravatar.cc/50?img=8" },
        { id: 9, user: "Kristina", text: "Провери console.log за промени на state.", avatar: "https://i.pravatar.cc/50?img=9" },
        { id: 10, user: "Martin", text: "Внимавай при промяна на обекти и масиви като dependencies.", avatar: "https://i.pravatar.cc/50?img=10" },
        { id: 11, user: "Ivaylo", text: "Използвай custom hook за повторно използване на логика.", avatar: "https://i.pravatar.cc/50?img=11" },
        { id: 12, user: "Svetlana", text: "Може би трябва да използваш useRef за някои стойности.", avatar: "https://i.pravatar.cc/50?img=12" },
      ],
    },
    2:{
title: "CSS Grid vs Flexbox",
    description: "Кога да използваме Grid и кога Flexbox.",
    replies: [
      {
        id: 1,
        user: "Maria",
        text: "Grid е по-добър за сложни layout-и, защото позволява да позиционираш елементи по редове и колони.",
        avatar: "/images/maria.jpg",
      },
      {
        id: 2,
        user: "Petar",
        text: "Flexbox е удобен за линейни елементи, като списъци или менюта, където подредбата е само в една посока.",
        avatar: "/images/petar.jpg",
      },
      {
        id: 3,
        user: "Ivan",
        text: "Комбинирай двата подхода за оптимално оформление – използвай Grid за основния layout и Flexbox вътре в отделни секции.",
        avatar: "/images/ivan.jpg",
      },
      {
        id: 4,
        user: "Elena",
        text: "Grid може да замени много Flexbox структури, особено при двуизмерни оформления с редове и колони.",
        avatar: "/images/elena.jpg",
      },
      {
        id: 5,
        user: "Georgi",
        text: "Flexbox е по-гъвкав при responsive дизайн, защото е лесно да променяш подредбата при различни екрани.",
        avatar: "/images/georgi.jpg",
      },
    ],
    }
  };

  const topic = topics[topicId];

  if (!topic) return <h2>Темата не е намерена!</h2>;

  return (
    <div className="topic-page">
      <header className="topic-header">
        <h1>{topic.title}</h1>
        <p>{topic.description}</p>
        <Link to="/forums" className="back-btn">⬅ Назад към категориите</Link>
      </header>

      <div className="replies-list">
        {topic.replies.map(reply => (
          <div key={reply.id} className="reply-card">
            {reply.avatar && <img src={reply.avatar} alt={reply.user} className="reply-avatar" />}
            <div className="reply-content">
              <strong>{reply.user}</strong>
              <p>{reply.text}</p>
              {reply.imageUrl && <img src={reply.imageUrl} alt="example" className="reply-image" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
