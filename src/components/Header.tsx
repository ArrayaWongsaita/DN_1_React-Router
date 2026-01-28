import { Link } from "react-router";

export default function Header() {
  return (
    <div className="bg-blue-500 flex justify-between items-center text-white">
      <div>
        <Link to="/">Home</Link>
      </div>

      <div className="space-x-4">
        <Link to="/user">user</Link>
        <Link to="/todo/list/1">todo</Link>
      </div>

      <div className="space-x-4">
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/register">Register</Link>
        {/* <a href="/auth/register">Register</a> */}
      </div>
    </div>
  );
}
