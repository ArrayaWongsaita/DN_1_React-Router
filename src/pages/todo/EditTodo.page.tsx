import { useLoaderData, useParams } from "react-router";
import type { Todo } from "./TodoList.page";

export default function EditTodoPage() {
  const { id } = useParams<{ id: string }>();
  const data = useLoaderData<Todo>();
  console.log("data", data);
  return (
    <div>
      <div>EditTodoPage</div>
      <div>id : {id}</div>
      <div>title :{data.title}</div>
      <div>{data.completed ? "completed" : "not completed"}</div>
      <div>userID :{data.userId}</div>
    </div>
  );
}
