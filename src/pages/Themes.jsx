import { Link } from "react-router-dom";

export default function Themes() {
  const themes = [
    { id: 1, title: "React Hooks", description: "Обсъждане на React Hooks" },
    { id: 2, title: "Node.js", description: "Темa за Node.js и backend логика" },
    { id: 3, title: "MongoDB", description: "База данни и Mongoose" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Всички Теми</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {themes.map((t) => (
          <li
            key={t.id}
            style={{
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <h3>{t.title}</h3>
            <p>{t.description}</p>

            <Link to={`/details/${t.id}`}>Виж детайли</Link>
          </li>
        ))}
        <Link to="/">Начало</Link>
      </ul>
    </div>
  );
}
