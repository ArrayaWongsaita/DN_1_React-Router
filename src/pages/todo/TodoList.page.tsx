import { useParams } from "react-router";

export default function TodoListPage() {
  const params = useParams<{ page: string }>();
  console.log("params", params);

  return (
    <div>
      <div>TodoListPage</div>
      <div>Page : {params.page}</div>
    </div>
  );
}
