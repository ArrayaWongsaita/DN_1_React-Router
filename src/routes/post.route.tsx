import type { RouteObject } from "react-router";
import PostListPage from "../pages/post/PostList.page";
import PostDetailPage from "../pages/post/PostDetail.page";
import PostLayout from "../layouts/Post.layout";
import { loadPosts } from "../loaders/post.loader";

const postChildRoutes: RouteObject[] = [
  { path: "list/:page", element: <PostListPage />, loader: loadPosts },
  { path: ":id", element: <PostDetailPage /> },
];

export const postLayoutRoute: RouteObject = {
  path: "/post",
  element: <PostLayout />,
  children: postChildRoutes,
};
