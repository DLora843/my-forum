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
    4: {
    title: "Node Authentication JWT",
    description: "Обсъждаме как да имплементираме JWT за аутентикация в Node.js.",
    replies: [
      { id: 1, user: "Ivan", text: "Създай secret key за токените." },
      { id: 2, user: "Maria", text: "Не забравяй да валидираш токена при всеки request." },
      { id: 3, user: "Petar", text: "Използвай middleware за проверка на JWT." },
      { id: 4, user: "Elena", text: "Съхранявай токена безопасно на клиента." },
      { id: 5, user: "Georgi", text: "Проверявай expiration time на токена." },
      { id: 6, user: "Nikolay", text: "За refresh tokens използвай отделен endpoint." },
      { id: 7, user: "Ana", text: "Използвай bcrypt за хеширане на пароли." },
      { id: 8, user: "Dimitar", text: "JWT payload не трябва да съдържа чувствителна информация." },
      { id: 9, user: "Kristina", text: "Проверявай signature при декодиране на токена." },
      { id: 10, user: "Martin", text: "Може да използваш библиотека като jsonwebtoken." },
      { id: 11, user: "Ivaylo", text: "Добави token blacklist за logout функционалност." },
      { id: 12, user: "Svetlana", text: "Съхранявай токена в HttpOnly cookie за сигурност." },
      { id: 13, user: "Ivan", text: "Използвай алгоритъм HS256 за подписване." },
      { id: 14, user: "Maria", text: "Съсредоточи се върху expiration и refresh." },
      { id: 15, user: "Petar", text: "Middleware за проверка на роли е полезен." },
      { id: 16, user: "Elena", text: "Логвай всички failed authentication опити." },
      { id: 17, user: "Georgi", text: "Разгледай Passport.js за готови решения." },
      { id: 18, user: "Nikolay", text: "Разделяй auth routes от public routes." },
      { id: 19, user: "Ana", text: "Проверявай content-type при login request." },
      { id: 20, user: "Dimitar", text: "Не позволявай multiple simultaneous tokens без контрол." },
      { id: 21, user: "Kristina", text: "Обмисли rate limiting за login endpoint." },
      { id: 22, user: "Martin", text: "Винаги тествай с Postman или Insomnia." },
    ],
  },

  5: {
    title: "Какво е REST API",
    description: "Обсъждаме какво представлява REST API и как се използва.",
    replies: [
      { id: 1, user: "Ivan", text: "REST API е архитектурен стил за комуникация между клиенти и сървъри." },
      { id: 2, user: "Maria", text: "Използва HTTP методи като GET, POST, PUT, DELETE." },
      { id: 3, user: "Petar", text: "REST означава Representational State Transfer." },
      { id: 4, user: "Elena", text: "Ресурсите се идентифицират чрез URL адреси." },
      { id: 5, user: "Georgi", text: "Клиентът и сървърът са отделени по дизайн." },
      { id: 6, user: "Nikolay", text: "REST API отговаря със стандартни статус кодове." },
      { id: 7, user: "Ana", text: "Може да връща данни в JSON или XML формат." },
      { id: 8, user: "Dimitar", text: "Поддържа stateless комуникация между клиент и сървър." },
      { id: 9, user: "Kristina", text: "Често се използва за комуникация между frontend и backend." },
    ],
  },

  6: {
    title: "Mongo Collection vs Table",
    description: "Обсъждаме разликите между MongoDB колекции и SQL таблици.",
    replies: [
      { id: 1, user: "Ivan", text: "Колекциите са в NoSQL, таблиците са в SQL бази." },
      { id: 2, user: "Maria", text: "Колекцията няма фиксирана схема, таблицата има." },
      { id: 3, user: "Petar", text: "Документите в колекцията са JSON-базирани." },
    ],
  },

  7: {
    title: "SQL Indexes explained",
    description: "Обсъждаме как работят индексите в SQL и защо са важни.",
    replies: [
      { id: 1, user: "Ivan", text: "Индексите ускоряват търсенето в таблиците." },
      { id: 2, user: "Maria", text: "Можеш да създадеш индекс на една или повече колони." },
      { id: 3, user: "Petar", text: "Има различни типове индекси – B-Tree, Hash и др." },
      { id: 4, user: "Elena", text: "Индексите заемат допълнително пространство." },
      { id: 5, user: "Georgi", text: "Не всички колони имат нужда от индекс." },
      { id: 6, user: "Nikolay", text: "Индексите могат да ускорят SELECT, но забавят INSERT/UPDATE." },
      { id: 7, user: "Ana", text: "Можеш да създадеш уникален индекс за уникални стойности." },
      { id: 8, user: "Dimitar", text: "Индексите помагат при JOIN операции." },
      { id: 9, user: "Kristina", text: "Проверявай query execution plan, за да видиш използването на индексите." },
      { id: 10, user: "Martin", text: "Сложни индекси могат да съдържат няколко колони." },
      { id: 11, user: "Ivaylo", text: "Clustered индекс променя физическото подреждане на таблицата." },
      { id: 12, user: "Svetlana", text: "Non-clustered индекс е отделна структура, сочеща към редовете." },
      { id: 13, user: "Ivan", text: "Редовете на таблицата могат да имат повече от един индекс." },
      { id: 14, user: "Maria", text: "Следи за overhead при твърде много индекси." },
      { id: 15, user: "Petar", text: "Индексите са полезни при често използвани WHERE условия." },
      { id: 16, user: "Elena", text: "Можеш да използваш composite индекс за комбинация от колони." },
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
