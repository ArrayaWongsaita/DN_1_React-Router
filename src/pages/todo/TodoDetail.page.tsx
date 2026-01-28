import { useParams, useSearchParams } from "react-router";

export default function TodoDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const type = searchParams.get("type") || "";

  return (
    <div>
      <div>TodoDetailPage</div>
      <div>Id : {id}</div>
      <div>search : {search}</div>
      <div>type : {type}</div>
    </div>
  );
}
