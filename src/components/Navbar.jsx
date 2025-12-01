import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css"; // ✅ Импорт на CSS за Navbar

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">MyForum</Link>

        <Link to="/category/1">Общи теми</Link>
        <Link to="/category/2">Технологии</Link>
      </div>
      
      <div className="nav-right">
        {!user ? (
          <>
          <Link to="/login">Вход</Link>
          <Link to="/register">Регистрация</Link>
          </>
        ) : (
          <>
          <span className="welcome">Здравей, {user.username}</span>
          <Link to="/profile">Профил</Link>
          <button className="logout-btn" onClick={logout}>Изход</button></>
        )}
      </div>
    </nav>
  );
}
