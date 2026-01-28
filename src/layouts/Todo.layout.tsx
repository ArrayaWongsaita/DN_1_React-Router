import { Outlet } from "react-router";
import TodoSidebar from "../components/sidebars/Todo.sidebar";

export default function TodoLayout() {
  return (
    <div className="flex h-screen">
      <TodoSidebar />
      <Outlet />
    </div>
  );
}
