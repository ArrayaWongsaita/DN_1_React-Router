import { useLoaderData } from "react-router";

export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};
export default function PostListPage() {
  const posts = useLoaderData<Post[]>();

  return (
    <div>
      <div>PostListPage</div>
      {posts.map((post) => (
        <div className="border p-2 m-2" key={post.id}>
          <div>id : {post.id}</div>
          <div>title : {post.title}</div>
          <div>body : {post.body}</div>
        </div>
      ))}
    </div>
  );
}
