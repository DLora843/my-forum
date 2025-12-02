import { useParams } from "react-router-dom";

export default function Details() {
    const { id } = useParams();

  return (
    <div>
       <h1>Details Page</h1>
       <p>Showing details from item: {id}</p>
    </div>
  );
}