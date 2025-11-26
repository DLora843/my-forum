import { useParams, Link } from "react-router-dom";

export default function Thread() {
  const { id } = useParams();
  return (
    <div>
      <h1>Тема ID: {id}</h1>
      <p>Съдържание на темата...</p>
      <Link to={`/thread/&{id}/new-post`}><button>Добави пост</button></Link>
    </div>
  );
}
