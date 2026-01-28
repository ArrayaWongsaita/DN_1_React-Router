import { createBrowserRouter, Navigate } from "react-router";

import { authLayoutRoute } from "./auth.route";
import { userLayoutRoute } from "./user.route";
import { todoLayoutRoute } from "./todo.route";
import MainLayout from "../layouts/Main.layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <div>Home</div> }, //Outlet
      { path: "test", element: <div>test</div> }, // Outlet
      { path: "test2", element: <div>test2</div> }, // Outlet
    ],
  },
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
