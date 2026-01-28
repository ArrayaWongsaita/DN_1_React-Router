import { Outlet } from "react-router";
import PostSidebar from "../components/sidebars/Post.sidebar";

export default function PostLayout() {
  return (
    <div className="flex h-screen">
      <PostSidebar />
      <Outlet />
    </div>
  );
}
