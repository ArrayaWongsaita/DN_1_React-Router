import { useLoaderData, useParams, useSearchParams } from "react-router";
import type { Todo } from "./TodoList.page";

export default function TodoDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const type = searchParams.get("type") || "";

  const todo = useLoaderData<Todo>();

  return (
    <div>
      <div>TodoDetailPage</div>
      <div>Id : {id}</div>
      <div>search : {search}</div>
      <div>type : {type}</div>
      <input
        type="text"
        className="border"
        value={search}
        onChange={(e) => {
          setSearchParams({ search: e.target.value });
        }}
      />
      <div>title : {todo.title}</div>
      <div>{todo.completed ? "completed" : "not completed"}</div>
      <div> userID : {todo.userId}</div>
    </div>
  );
}
