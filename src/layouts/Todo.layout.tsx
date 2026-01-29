import { Outlet, useNavigation } from "react-router";
import TodoSidebar from "../components/sidebars/Todo.sidebar";
import Loading from "../components/Loading";

export default function TodoLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div className="flex h-screen">
      <TodoSidebar />

      {isLoading ? <Loading /> : <Outlet />}
    </div>
  );
}
