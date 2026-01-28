import type { RouteObject } from "react-router";
import TodoListPage from "../pages/todo/TodoList.page";
import TodoDetailPage from "../pages/todo/TodoDetail.page";
import EditTodoPage from "../pages/todo/EditTodo.page";
import DeleteTodoPage from "../pages/todo/DeleteTodo.page";
import TodoLayout from "../layouts/Todo.layout";

const todoChildRoutes: RouteObject[] = [
  { path: "list/:page", element: <TodoListPage /> },
  { path: ":id", element: <TodoDetailPage /> },
  { path: "edit/:id", element: <EditTodoPage /> },
  { path: "delete/:id", element: <DeleteTodoPage /> },
];

export const todoLayoutRoute: RouteObject = {
  path: "/todo",
  element: <TodoLayout />,
  children: todoChildRoutes,
};
