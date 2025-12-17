import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Страницата не е намерена</h2>
      <p>Изглежда, че страницата, която търсите, не съществува или е преместена.</p>
      <Link to="/" className="home-btn">Върни се на началната страница</Link>
    </div>
  );
}
