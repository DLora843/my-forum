import { useParams } from "react-router-dom";
import "./BlogDetails.css"

export default function BlogDetails() {
  const { id } = useParams();

    const posts = {
        "1": {
            title: "Как да научим React",
            image: "/01.jpg",
            intro: "React е една от най-популярните JavaScript библиотеки.",
            content: `
            React е библиотека за изграждане на потребителски интерфейси,
създадена от Facebook.

Тя позволява изграждане на компонентно-базирани приложения,
които са лесни за поддръжка и разширяване.

Основни концепции:
• Components
• JSX
• Props
• State
• Hooks

React се използва в големи проекти като Facebook, Instagram и Netflix.
            `,
            author: "Admin",
            date: "12 Декември 2025"
        },
        "2": {
      title: "Node.js за начинаещи",
      image: "/02.jpg",
      intro: "Node.js позволява да пишете сървърна JavaScript.",
      content: `
Node.js е среда за изпълнение на JavaScript извън браузъра.
Тя позволява изграждане на бързи и мащабируеми приложения.

Основни концепции:
• Event Loop
• Modules
• npm пакети
• Express.js
      `,
      author: "Admin",
      date: "13 Декември 2025"
    },
    "3": {
      title: "CSS съвети и трикове",
      image: "/03.jpg",
      intro: "Как да направите красиви UI.",
      content: `
CSS е стилов език за уеб страници.
Съвети и трикове за по-добър дизайн:

• Flexbox и Grid
• Анимации
• Responsive Design
• CSS Variables
      `,
      author: "Admin",
      date: "14 Декември 2025"
    }
    };
    const post = posts[id];

  if (!post) {
    return <p>Публикацията не е намерена</p>;
  }

  return (
    <div className="blog-details">
        <h1>{post.title}</h1>
        <img src={post.image} alt={post.title} />
        <p>{post.content}</p>
        <p><b>Автор:</b> {post.author}</p>
        <p><b>Дата:</b> {post.date}</p>
    </div>
  );
}
