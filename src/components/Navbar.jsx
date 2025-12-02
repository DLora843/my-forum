import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css"; 

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyForum</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={({ isActive }) => isActive ? "active" : ""}>
            Catalog
            </NavLink>
          </li>
          {user ? (
            <>
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
            Dashboard
            </NavLink>
              </li>
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                  </button>
                  </li>
                </>
          ) : (
            <>
            <li>
              <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
            Login
            </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>
            Register
            </NavLink>
            </li>
            </>
          )}
          </ul>
          </nav>
  );
}