import { Link, useLoaderData, useParams, useSearchParams } from "react-router";

export type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export default function TodoListPage() {
  const data = useLoaderData<Todo[]>();
  console.log("data", data);
  const params = useParams<{ page: string }>();
  // console.log("params", params);

  const [searchParams, setSearchParams] = useSearchParams();

  const limitValue = searchParams.get("limit") || "";

  return (
    <div>
      <input
        className="border"
        value={limitValue}
        onChange={(e) => setSearchParams({ limit: e.target.value })}
      />
      <div>TodoListPage</div>
      <div>Page : {params.page}</div>

      <div className="space-y-6 px-2">
        {data.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-8 p-2 bg-gray-200 rounded-2xl"
          >
            <div>{todo.id}</div>
            <div className="flex-1 line-clamp-1">{todo.title}</div>
            <div>{todo.completed ? "Completed" : "Not Completed"}</div>

            <button className="bg-blue-500 text-white px-2 py-1 rounded">
              <Link to={`/todo/edit/${todo.id}`}>Edit</Link>
            </button>
            <button className="bg-red-500 text-white px-2 py-1 rounded">
              <Link to={`/todo/delete/${todo.id}`}> Delete</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
