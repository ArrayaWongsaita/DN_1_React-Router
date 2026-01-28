import type { RouteObject } from "react-router";
import PostListPage from "../pages/post/PostList.page";
import PostDetailPage from "../pages/post/PostDetail.page";
import PostLayout from "../layouts/Post.layout";

const postChildRoutes: RouteObject[] = [
  { path: "list/:page", element: <PostListPage /> },
  { path: ":id", element: <PostDetailPage /> },
];

export const postLayoutRoute: RouteObject = {
  path: "/post",
  element: <PostLayout />,
  children: postChildRoutes,
};
