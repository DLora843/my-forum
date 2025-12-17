import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">MyForum</Link>

        {/* Ако потребителят е логнат — показваме всички страници */}
        {user ? (
          <>
            <NavLink to="/" className="nav-link">Начало</NavLink>
            <NavLink to="/themes" className="nav-link">Теми</NavLink>
            <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            <NavLink to="/forums" className="nav-link">Forums</NavLink>
            <NavLink to="/blog/create" className="nav-link">Нов Пост</NavLink>
          </>
        ) : (
          /* Ако не е логнат — показваме само Начало */
          <NavLink to="/" className="nav-link">Начало</NavLink>
        )}
      </div>

      <div className="nav-right">
        {/* Ако потребителят НЕ е логнат */}
        {!user && (
          <>
            <NavLink to="/login" className="nav-btn">Вход</NavLink>
            <NavLink to="/register" className="nav-btn">Регистрация</NavLink>
            <NavLink to="/blog" className="nav-btn">Блог</NavLink>
            {/* Може да сложиш бутона за изход, но той няма да прави нищо, ако не е логнат */}
            <button className="nav-btn logout-btn" disabled>Изход</button>
          </>
        )}

        {/* Ако потребителят Е логнат */}
        {user && (
          <>
            <span className="user-name">Здравей, {user.username || user.email}</span>
            <button className="nav-btn logout-btn" onClick={logout}>Изход</button>
          </>
        )}
      </div>
    </nav>
  )
}
