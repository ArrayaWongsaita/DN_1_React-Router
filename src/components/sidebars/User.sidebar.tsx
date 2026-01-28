import { NavLink } from "react-router";

export default function UserSidebar() {
  return (
    <div className="flex flex-col gap-2 bg-gray-100 w-48">
      <NavLink
        to="/user/dashboard"
        className={({ isActive }) => (isActive ? "bg-red-500" : "")}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/user/profile"
        className={({ isActive }) => (isActive ? "bg-red-500" : "")}
      >
        Profile
      </NavLink>
    </div>
  );
}
