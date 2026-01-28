import { NavLink } from "react-router";

const postPathsData = [
  { to: "/post/list/1", label: "List" },
  { to: "/post/1", label: "Detail" },
] as const;

export default function PostSidebar() {
  return (
    <div className="w-48 flex flex-col gap-2 bg-gray-100">
      {postPathsData.map((el) => (
        <NavLink
          className={({ isActive }) => (isActive ? "bg-red-200" : "")}
          key={el.to}
          to={el.to}
        >
          {el.label}
        </NavLink>
      ))}
    </div>
  );
}
