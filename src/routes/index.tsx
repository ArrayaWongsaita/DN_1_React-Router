import { createBrowserRouter } from "react-router";
import DashboardPage from "../pages/user/Dashboard.page";
import ProfilePage from "../pages/user/Profile.page";
import { authLayoutRoute } from "./auth.route";

const router = createBrowserRouter([
  { path: "/", element: <div>Home</div> },
  // auth
  authLayoutRoute,

  // user
  //   { path: "/user/dashboard", element: <div>dashboard</div> },
  //   { path: "/user/profile", element: <div>profile</div> },
  {
    path: "/user",
    children: [
      { path: "dashboard", element: <DashboardPage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },

  // not found
  { path: "*", element: <div>Not found</div> },
]);

export default router;
