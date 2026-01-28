import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  { path: "/", element: <div>Home</div> },
  // auth
  { path: "/auth/login", element: <div>Login</div> },
  { path: "/auth/register", element: <div>Register</div> },
  // user
  { path: "/dashboard", element: <div>dashboard</div> },
  { path: "/profile", element: <div>profile</div> },

  // not found
  { path: "*", element: <div>Not found</div> },
]);

export default router;
