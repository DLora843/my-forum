import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
    const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Профил</h1>
      <p>Потребителско име: {user ?.username}</p>
      <p>Имейл: {user ?.email}</p>
    </div>
  );
}
