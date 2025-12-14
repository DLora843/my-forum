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
        { id: 2, user: "Mario", text: "Внимавай с async функции вътре в useEffect.", avatar: "https://i.pravatar.cc/50?img=2"},
        { id: 3, user: "Petar", text: "Може би проблема е със stale closure.", avatar: "https://i.pravatar.cc/50?img=3"},
        { id: 4, user: "Alexander", text: "Провери дали не си забравил dependency array.", avatar: "https://i.pravatar.cc/50?img=4" },
        { id: 5, user: "Georgia", text: "Използвай useCallback за функции, предавани на children.", avatar: "https://i.pravatar.cc/50?img=5" },
        { id: 6, user: "Nikolay", text: "React.StrictMode може да кара useEffect да се вика два пъти в dev.", avatar: "https://i.pravatar.cc/50?img=6" },
        { id: 7, user: "Plamen", text: "Пробвай да разделиш сложните useEffect на по-малки.", avatar: "https://i.pravatar.cc/50?img=7" },
        { id: 8, user: "Dimitar", text: "Може да е проблем със състоянието в useState.", avatar: "https://i.pravatar.cc/50?img=8" },
        { id: 9, user: "Kristina", text: "Провери console.log за промени на state.", avatar: "https://i.pravatar.cc/50?img=9" },
        { id: 10, user: "Martina", text: "Внимавай при промяна на обекти и масиви като dependencies.", avatar: "https://i.pravatar.cc/50?img=10" },
        { id: 11, user: "Ivaylo", text: "Използвай custom hook за повторно използване на логика.", avatar: "https://i.pravatar.cc/50?img=11" },
        { id: 12, user: "Svetoslav", text: "Може би трябва да използваш useRef за някои стойности.", avatar: "https://i.pravatar.cc/50?img=12" },
      ],
    },
    2:{
title: "CSS Grid vs Flexbox",
    description: "Кога да използваме Grid и кога Flexbox.",
    replies: [
      {
        id: 1,
        user: "Mario",
        text: "Grid е по-добър за сложни layout-и, защото позволява да позиционираш елементи по редове и колони.",
        avatar: "https://i.pravatar.cc/50?img=13",
      },
      {
        id: 2,
        user: "Petar",
        text: "Flexbox е удобен за линейни елементи, като списъци или менюта, където подредбата е само в една посока.",
        avatar: "https://i.pravatar.cc/50?img=14",
      },
      {
        id: 3,
        user: "Ivan",
        text: "Комбинирай двата подхода за оптимално оформление – използвай Grid за основния layout и Flexbox вътре в отделни секции.",
        avatar: "https://i.pravatar.cc/50?img=15",
      },
      {
        id: 4,
        user: "Elena",
        text: "Grid може да замени много Flexbox структури, особено при двуизмерни оформления с редове и колони.",
        avatar: "https://i.pravatar.cc/50?img=16",
      },
      {
        id: 5,
        user: "Georgi",
        text: "Flexbox е по-гъвкав при responsive дизайн, защото е лесно да променяш подредбата при различни екрани.",
        avatar: "https://i.pravatar.cc/50?img=18",
      },
    ],
    },
    3: {
    title: "Адаптивност и media заявки",
    description: "Как да направим сайта адаптивен за различни устройства.",
    replies: [
      {
        id: 1,
        user: "Ivan",
        text: "Използвай media queries, за да променяш CSS правилата за различни ширини на екрана.",
        avatar: "https://i.pravatar.cc/50?img=22",
      },
      {
        id: 2,
        user: "Maria",
        text: "Flexbox и Grid са много удобни за адаптивни layout-и, комбинирай ги с media queries.",
        avatar: "https://i.pravatar.cc/50?img=19",
      },
      {
        id: 3,
        user: "Petra",
        text: "Не забравяй да използваш относителни единици като %, em или rem вместо px.",
        avatar: "https://i.pravatar.cc/50?img=20",
      },
      {
        id: 4,
        user: "Elena",
        text: "Тествай дизайна на различни устройства или с DevTools, за да видиш как изглежда на малки екрани.",
        avatar: "https://i.pravatar.cc/50?img=21",
      },
      {
        id: 5,
        user: "Georgi",
        text: "Сложи максимална ширина на съдържанието и центрирай елементите за по-добро визуално усещане.",
        avatar: "https://i.pravatar.cc/50?img=33",
      },
      {
        id: 6,
        user: "Nikolay",
        text: "Използвай mobile-first подход: първо пишеш стилове за малки екрани, след това добавяш media queries за по-големи.",
        avatar: "https://i.pravatar.cc/50?img=27",
      },
      {
        id: 7,
        user: "Ana",
        text: "Скриването или показването на определени елементи с display: none или visibility е полезно за малки устройства.",
        avatar: "https://i.pravatar.cc/50?img=36",
      },
      {
        id: 8,
        user: "Dimitar",
        text: "Използвай CSS clamp(), min() и max() функции за адаптивни размери на шрифтове и отстояния.",
        avatar: "https://i.pravatar.cc/50?img=50",
      }
    ]
  },
   4: {
    title: "Node.js Authentication с JWT",
    description: "Обсъждаме JWT автентикация, сигурност и access token-и в Node.js.",
    replies: [
      { id: 1, user: "Daniel", text: "JWT е стандарт за автентикация чрез JSON токени.", avatar: "https://i.pravatar.cc/50?img=51" },
      { id: 2, user: "Stefania", text: "JWT съдържа Header, Payload и Signature.", avatar: "https://i.pravatar.cc/50?img=30" },
      { id: 3, user: "Borislav", text: "Header-ът определя алгоритъма за криптиране.", avatar: "https://i.pravatar.cc/50?img=52" },
      { id: 4, user: "Ralitsa", text: "Payload пази информация за потребителя.", avatar: "https://i.pravatar.cc/50?img=24" },
      { id: 5, user: "Hristo", text: "Signature защитава токена от подправяне.", avatar: "https://i.pravatar.cc/50?img=53" },
      { id: 6, user: "Milena", text: "JWT позволява stateless authentication.", avatar: "https://i.pravatar.cc/50?img=26" },
      { id: 7, user: "Kaloyan", text: "В Node.js се използва библиотеката jsonwebtoken.", avatar: "https://i.pravatar.cc/50?img=54" },
      { id: 8, user: "Desislava", text: "Токенът се създава с jwt.sign().", avatar: "https://i.pravatar.cc/50?img=28" },
      { id: 9, user: "Stanislav", text: "Валидацията става с jwt.verify().", avatar: "https://i.pravatar.cc/50?img=55" },
      { id: 10, user: "Yana", text: "JWT обикновено се праща в Authorization header.", avatar: "https://i.pravatar.cc/50?img=31" },
      { id: 11, user: "Todor", text: "Bearer token е стандартният формат за изпращане.", avatar: "https://i.pravatar.cc/50?img=56" },
      { id: 12, user: "Viktoria", text: "Middleware проверява дали токенът е валиден.", avatar: "https://i.pravatar.cc/50?img=32" },
      { id: 13, user: "Atanas", text: "При невалиден токен се връща 401 Unauthorized.", avatar: "https://i.pravatar.cc/50?img=57" },
      { id: 14, user: "Simona", text: "exp определя кога токенът изтича.", avatar: "https://i.pravatar.cc/50?img=34" },
      { id: 15, user: "Lyubomir", text: "Refresh token се използва за нов access token.", avatar: "https://i.pravatar.cc/50?img=58" },
      { id: 16, user: "Preslava", text: "Access token-ът е краткотраен.", avatar: "https://i.pravatar.cc/50?img=36" },
      { id: 17, user: "Valentin", text: "JWT secret трябва да е в environment variable.", avatar: "https://i.pravatar.cc/50?img=59" },
      { id: 18, user: "Gergana", text: "JWT не изисква сървърни сесии.", avatar: "https://i.pravatar.cc/50?img=38" },
      { id: 19, user: "Rosen", text: "Токенът може да се декодира, но не и валидира без secret.", avatar: "https://i.pravatar.cc/50?img=60" },
      { id: 20, user: "Nadezhda", text: "JWT е уязвим при XSS атаки.", avatar: "https://i.pravatar.cc/50?img=40" },
      { id: 21, user: "Emil", text: "Logout се прави чрез изтриване на токена.", avatar: "https://i.pravatar.cc/50?img=61" },
      { id: 22, user: "Ivelina", text: "JWT не е подходящ за всички приложения.", avatar: "https://i.pravatar.cc/50?img=42" }
    ],
  },
  5: {
    title: "REST API",
    description: "Обсъждаме какво е REST API и как работи.",
    replies: [
      { id: 1, user: "Plamen", text: "REST API е архитектурен стил за комуникация между клиенти и сървъри.", avatar: "https://i.pravatar.cc/50?img=65" },
      { id: 2, user: "Katerina", text: "Използва HTTP методи като GET, POST, PUT и DELETE.", avatar: "https://i.pravatar.cc/50?img=5" },
      { id: 3, user: "Genadi", text: "REST означава Representational State Transfer.", avatar: "https://i.pravatar.cc/50?img=67" },
      { id: 4, user: "Svetoslava", text: "Ресурсите се представят чрез URL адреси.", avatar: "https://i.pravatar.cc/50?img=9" },
      { id: 5, user: "Ivan", text: "Клиентът и сървърът са отделени и работят независимо.", avatar: "https://i.pravatar.cc/50?img=68" },
      { id: 6, user: "Kristalina", text: "REST API обикновено връща JSON данни.", avatar: "https://i.pravatar.cc/50?img=16" },
      { id: 7, user: "Petar", text: "Има статeless комуникация – сървърът не пази състояние.", avatar: "https://i.pravatar.cc/50?img=1" },
      { id: 8, user: "Nikolay", text: "REST API е лесно разширяем и мащабируем.", avatar: "https://i.pravatar.cc/50?img=2" },
      { id: 9, user: "Magdalena", text: "Може да се използва за мобилни приложения и уеб фронтенд.", avatar: "https://i.pravatar.cc/50?img=19" }
    ],
  },
  6: {
    title: "MongoDB Collection vs SQL Table",
    description: "Обяснение на разликите между колекции в MongoDB и таблици в SQL бази данни.",
    replies: [
      { id: 1, user: "Dimitriya", text: "Колекция в MongoDB е подобна на таблица в SQL, но няма строго фиксирана схема.", avatar: "https://i.pravatar.cc/50?img=31" },
      { id: 2, user: "Vesela", text: "Таблиците в SQL имат редове и колони с фиксирани типове данни, докато документите в колекция могат да имат различни полета.", avatar: "https://i.pravatar.cc/50?img=32" },
      { id: 3, user: "Tsvetelin", text: "MongoDB използва BSON документи вместо редове, което дава повече гъвкавост при съхранението на данни.", avatar: "https://i.pravatar.cc/50?img=33" }
    ],
  },
  7: {
    title: "SQL Indexes Explained",
    description: "Обясняваме как работят индексите в SQL и защо са полезни.",
    replies: [
      { id: 1, user: "Aleksandra", text: "SQL индексите ускоряват търсенето в таблиците.", avatar: "https://i.pravatar.cc/50?img=41" },
      { id: 2, user: "Mihaela", text: "Индексите могат да бъдат създадени върху един или повече колони.", avatar: "https://i.pravatar.cc/50?img=42" },
      { id: 3, user: "Katalina", text: "Основният тип индекс е B-Tree, който се използва за повечето заявки.", avatar: "https://i.pravatar.cc/50?img=43" },
      { id: 4, user: "Plamena", text: "Индексите подобряват SELECT заявките, но могат да забавят INSERT и UPDATE.", avatar: "https://i.pravatar.cc/50?img=44" },
      { id: 5, user: "Stefaniya", text: "UNIQUE индекс гарантира, че колоната няма дублирани стойности.", avatar: "https://i.pravatar.cc/50?img=45" },
      { id: 6, user: "Nina", text: "Composite индекс може да включва няколко колони за сложни заявки.", avatar: "https://i.pravatar.cc/50?img=46" },
      { id: 7, user: "Bozhidara", text: "Индексите за full-text се използват за търсене в текстови полета.", avatar: "https://i.pravatar.cc/50?img=47" },
      { id: 8, user: "Desi", text: "Clustered индекс определя физическото подреждане на редовете.", avatar: "https://i.pravatar.cc/50?img=48" },
      { id: 9, user: "Viktoria", text: "Non-clustered индекс съдържа отделна структура, сочеща към данните.", avatar: "https://i.pravatar.cc/50?img=49" },
      { id: 10, user: "Radostin", text: "Индексите за бърз достъп са полезни при WHERE и JOIN условия.", avatar: "https://i.pravatar.cc/50?img=50" },
      { id: 11, user: "Tihomir", text: "Too many индекси могат да забавят писането на данни.", avatar: "https://i.pravatar.cc/50?img=51" },
      { id: 12, user: "Erik", text: "Индексите могат да се създават и изтриват с CREATE INDEX / DROP INDEX.", avatar: "https://i.pravatar.cc/50?img=52" },
      { id: 13, user: "Nikolay", text: "Индексите помагат за оптимизация на заявките чрез плановете на изпълнение.", avatar: "https://i.pravatar.cc/50?img=53" },
      { id: 14, user: "Kristian", text: "Индексите за датa и време ускоряват филтрирането по колони с времеви стойности.", avatar: "https://i.pravatar.cc/50?img=54" },
      { id: 15, user: "Lyuben", text: "Индексите за уникални идентификатори често се създават върху primary key.", avatar: "https://i.pravatar.cc/50?img=55" },
      { id: 16, user: "Alben", text: "Редовно поддържан индекс намалява фрагментацията и поддържа бързо търсене.", avatar: "https://i.pravatar.cc/50?img=56" }
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
