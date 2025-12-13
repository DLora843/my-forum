import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Детайли за поста {id}</h1>
      <p>Тук ще се показват пълните детайли за поста.</p>
    </div>
  );
}
