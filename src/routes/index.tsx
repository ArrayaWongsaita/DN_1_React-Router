import { createBrowserRouter, Navigate } from "react-router";

import { authLayoutRoute } from "./auth.route";
import { userLayoutRoute } from "./user.route";
import { todoLayoutRoute } from "./todo.route";
import MainLayout from "../layouts/Main.layout";
import { postLayoutRoute } from "./post.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <div>Loading Hydrate</div>,
    // HydrateFallback: () => <div>Loading Hydrate</div>,
    children: [
      { index: true, element: <div>Home</div> }, //Outlet

      // post
      postLayoutRoute,
      // todo
      todoLayoutRoute,
      // auth
      authLayoutRoute,

      // user
      userLayoutRoute,
    ],
  },

  // not found
  //   { path: "*", element: <div>Not found</div> },
  { path: "*", element: <Navigate to="/" replace /> },
]);

export default router;
