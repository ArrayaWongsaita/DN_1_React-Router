import { NavLink } from "react-router";

export default function AuthSidebar() {
  return (
    <div className="w-48 flex flex-col gap-2 bg-gray-100">
      <NavLink
        to="/auth/login"
        className={({ isActive }) => `${isActive ? "bg-yellow-500" : ""} `}
      >
        login
      </NavLink>
      <NavLink
        to="/auth/register"
        className={({ isActive }) => `${isActive ? "bg-yellow-500" : ""} `}
      >
        register
      </NavLink>
    </div>
  );
}
