import { createBrowserRouter, Navigate } from "react-router";

import { authLayoutRoute } from "./auth.route";
import { userLayoutRoute } from "./user.route";

const router = createBrowserRouter([
  { path: "/", element: <div>Home</div> },
  // auth
  authLayoutRoute,

  // user
  userLayoutRoute,

  // not found
  //   { path: "*", element: <div>Not found</div> },
  { path: "*", element: <Navigate to="/" replace /> },
]);

export default router;
