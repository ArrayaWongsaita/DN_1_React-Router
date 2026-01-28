import type { RouteObject } from "react-router";
import TodoListPage from "../pages/todo/TodoList.page";
import TodoDetailPage from "../pages/todo/TodoDetail.page";

const todoChildRoutes: RouteObject[] = [
  { path: "list/:page", element: <TodoListPage /> },
  { path: ":id", element: <TodoDetailPage /> },
  // edit
  // delete
];

export const todoLayoutRoute: RouteObject = {
  path: "/todo",
  children: todoChildRoutes,
};
