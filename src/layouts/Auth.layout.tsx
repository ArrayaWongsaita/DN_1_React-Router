import { Outlet } from "react-router";
import AuthSidebar from "../components/sidebars/Auth.sidebar";

export default function AuthLayout() {
  return (
    <div className="flex h-screen">
      <AuthSidebar />
      <Outlet />
    </div>
  );
}
