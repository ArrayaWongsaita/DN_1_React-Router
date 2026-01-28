import { createBrowserRouter, Navigate } from "react-router";

import { authLayoutRoute } from "./auth.route";
import { userLayoutRoute } from "./user.route";
import { todoLayoutRoute } from "./todo.route";

const router = createBrowserRouter([
  { path: "/", element: <div>Home</div> },
  // todo
  todoLayoutRoute,
  // auth
  authLayoutRoute,

  // user
  userLayoutRoute,

  // not found
  //   { path: "*", element: <div>Not found</div> },
  { path: "*", element: <Navigate to="/" replace /> },
]);

export default router;
