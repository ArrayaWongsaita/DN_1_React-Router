import { NavLink } from "react-router";

export default function TodoSidebar() {
  return (
    <div className="flex flex-col gap-2 w-48 bg-gray-100">
      <NavLink
        to="/todo/list/1"
        className={({ isActive }) => `${isActive ? "bg-yellow-500" : ""} `}
      >
        List
      </NavLink>
      <NavLink
        to="/todo/1"
        className={({ isActive }) => `${isActive ? "bg-yellow-500" : ""} `}
      >
        Detail
      </NavLink>
      <NavLink
        to="/todo/edit/1"
        className={({ isActive }) => `${isActive ? "bg-yellow-500" : ""} `}
      >
        Edit
      </NavLink>
      <NavLink
        to="/todo/delete/1"
        className={({ isActive }) => `${isActive ? "bg-yellow-500" : ""} `}
      >
        Delete
      </NavLink>
    </div>
  );
}
