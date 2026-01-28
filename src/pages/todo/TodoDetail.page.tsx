import { useParams, useSearchParams } from "react-router";

export default function TodoDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const type = searchParams.get("type") || "";

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
    </div>
  );
}
