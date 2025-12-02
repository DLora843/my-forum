import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css"; 

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">MyForum</Link>
        <Link to="/">Начало</Link>
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
          <button className="logout-btn" onClick={logout}>Изход</button></>
        )}
      </div>
    </nav>
  );
}
