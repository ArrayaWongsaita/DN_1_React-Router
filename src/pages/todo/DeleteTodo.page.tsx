import { useLoaderData, useParams } from "react-router";
import type { Todo } from "./TodoList.page";

export default function DeleteTodoPage() {
  throw new Error("error วันดี  กีกว่่า error เมื่อวาน");

  const params = useParams<{ id: string }>();
  const { id, completed, title, userId } = useLoaderData<Todo>();
  return (
    <div>
      <div>DeleteTodoPage</div>
      <div>id params : {params.id}</div>
      <div>id : {id}</div>
      <div>title :{title}</div>
      <div>{completed ? "completed" : "not completed"}</div>
      <div>userID :{userId}</div>
    </div>
  );
}
