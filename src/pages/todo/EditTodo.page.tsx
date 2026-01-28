import { useParams } from "react-router";

export default function EditTodoPage() {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <div>EditTodoPage</div>
      <div>id : {id}</div>
    </div>
  );
}
