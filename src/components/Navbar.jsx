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
        <Link to="/" className="nav-link">Home</Link>
        {user && <Link to="/category/1" className="nav-link">Категории</Link>}
      </div>
      <div className="nav-right">
        {!user && (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
        {user && (
          <>
            <Link to="/profile" className="nav-link">Profile</Link>
            <button className="nav-logout" onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
