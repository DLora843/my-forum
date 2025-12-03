import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Детайли за тема</h1>
      <p>ID на темата: {id}</p>
    </div>
  )
}