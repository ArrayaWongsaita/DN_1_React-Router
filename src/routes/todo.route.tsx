import type { RouteObject } from "react-router";
import TodoListPage from "../pages/todo/TodoList.page";
import TodoDetailPage from "../pages/todo/TodoDetail.page";
import EditTodoPage from "../pages/todo/EditTodo.page";
import DeleteTodoPage from "../pages/todo/DeleteTodo.page";
import TodoLayout from "../layouts/Todo.layout";
import { loadTodoById, loadTodos } from "../loaders/todo.loader";
import ErrorComponent from "../components/Error";

const todoChildRoutes: RouteObject[] = [
  {
    path: "list/:page",
    element: <TodoListPage />,
    loader: loadTodos,
    hydrateFallbackElement: <div> Loading todos</div>,
  },
  { path: ":id", element: <TodoDetailPage />, loader: loadTodoById },
  { path: "edit/:id", element: <EditTodoPage />, loader: loadTodoById },
  {
    path: "delete/:id",
    element: <DeleteTodoPage />,
    loader: loadTodoById,
    errorElement: <ErrorComponent />,
  },
];

export const todoLayoutRoute: RouteObject = {
  path: "/todo",
  element: <TodoLayout />,
  children: todoChildRoutes,
};
