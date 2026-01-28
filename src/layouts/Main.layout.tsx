import { Outlet } from "react-router";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />

      {/* / Outlet == <div>Home</div>
      / test Outlet == <div>test</div> */}
    </div>
  );
}
