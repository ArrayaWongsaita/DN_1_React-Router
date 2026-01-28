import { Outlet } from "react-router";
import UserSidebar from "../components/sidebars/User.sidebar";

export default function UserLayout() {
  return (
    <div className="flex h-screen">
      <UserSidebar />
      <Outlet />
    </div>
  );
}
