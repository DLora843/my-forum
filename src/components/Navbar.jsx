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

        <NavLink to="/" className="nav-link">Начало</NavLink>
        <NavLink to="/themes" className="nav-link">Теми</NavLink>
        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
        <NavLink to="/forums" className="nav-link">Forums</NavLink>
      </div>

      <div className="nav-right">
        {!user && (
          <>
          <NavLink to="/login" className="nav-btn">Вход</NavLink>
          <NavLink to="/register" className="nav-btn">Регистрация</NavLink>
          <button className="logout-btn" onClick={logout}>Изход</button>

          </>
        )}
        {user && (
          <>
          </>
        )}
      </div>
    </nav>
  )
}
