import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function PublicRoute({ children, onlyForGuests = false }) {
  const { user } = useContext(AuthContext);

  // Само login/register трябва да пренасочват логнати потребители
  if (user && onlyForGuests) {
    return <Navigate to="/dashboard" />;
  }

  return children;
}
