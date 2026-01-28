import { useParams } from "react-router";

export default function DeleteTodoPage() {
  const params = useParams<{ id: string }>();
  return (
    <div>
      <div>DeleteTodoPage</div>
      <div>id : {params.id}</div>
    </div>
  );
}
