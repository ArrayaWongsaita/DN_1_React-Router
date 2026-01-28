import type { RouteObject } from "react-router";
import DashboardPage from "../pages/user/Dashboard.page";
import ProfilePage from "../pages/user/Profile.page";
import UserLayout from "../layouts/User.layout";

const userChidRoutes: RouteObject[] = [
  { path: "dashboard", element: <DashboardPage /> },
  { path: "profile", element: <ProfilePage /> },
];

export const userLayoutRoute: RouteObject = {
  path: "/user",
  element: <UserLayout />,
  children: userChidRoutes,
};
