import React from "react";
import { useParams, Link } from "react-router-dom";
import "../pages/Topic.css";

export default function Topic() {
  const { topicId } = useParams();

  // Примерен масив с теми и отговори
  const topics = {
    1: {
      title: "React Hooks проблеми",
      description: "Обсъждаме проблеми при използване на useEffect и useState.",
      replies: [
        { id: 1, user: "Ivan", text: "Опитай да използваш useEffect с правилните зависимости." },
        { id: 2, user: "Maria", text: "Внимавай с async функции вътре в useEffect." },
        { id: 3, user: "Petar", text: "Може би проблема е със stale closure." },
        { id: 4, user: "Elena", text: "Провери дали не си забравил dependency array." },
        { id: 5, user: "Georgi", text: "Използвай useCallback за функции, предавани на children." },
        { id: 6, user: "Nikolay", text: "React.StrictMode може да кара useEffect да се вика два пъти в dev." },
        { id: 7, user: "Ana", text: "Пробвай да разделиш сложните useEffect на по-малки." },
        { id: 8, user: "Dimitar", text: "Може да е проблем със състоянието в useState." },
        { id: 9, user: "Kristina", text: "Провери console.log за промени на state." },
        { id: 10, user: "Martin", text: "Внимавай при промяна на обекти и масиви като dependencies." },
        { id: 11, user: "Ivaylo", text: "Използвай custom hook за повторно използване на логика." },
        { id: 12, user: "Svetlana", text: "Може би трябва да използваш useRef за някои стойности." },
      ],
    },
    2: {
      title: "CSS Grid vs Flexbox",
      description: "Кога да използваме Grid и кога Flexbox.",
      replies: [
        { id: 1, user: "Maria", text: "Grid е по-добър за сложни layout-и." },
        { id: 2, user: "Petar", text: "Flexbox е удобен за линейни елементи." },
        { id: 3, user: "Ivan", text: "Комбинирай двата подхода за оптимално оформление." },
        { id: 4, user: "Elena", text: "Grid може да замени много Flexbox структури." },
        { id: 5, user: "Georgi", text: "Flexbox е по-гъвкав при responsive дизайн." },
      ],
    },
    3: {
      title: "Адаптивност и медиa заявки",
      description: "Съвети за responsive дизайн и breakpoints.",
      replies: [
        { id: 1, user: "Petar", text: "Използвай mobile-first подход." },
        { id: 2, user: "Ivan", text: "Проверявай дизайна на различни устройства." },
        { id: 3, user: "Maria", text: "Използвай em/rem вместо px за по-гъвкав текст." },
        { id: 4, user: "Elena", text: "CSS variables улесняват темирането." },
        { id: 5, user: "Georgi", text: "Flexbox и Grid помагат при адаптивен layout." },
        { id: 6, user: "Kristina", text: "Не забравяй meta viewport в HTML." },
        { id: 7, user: "Martin", text: "Използвай breakpoints за ключови промени." },
        { id: 8, user: "Ivaylo", text: "Тествай с devtools на браузъра за различни екрани." },
      ],
    },
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
            <strong>{reply.user}</strong>
            <p>{reply.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
