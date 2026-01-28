import type { RouteObject } from "react-router";
import DashboardPage from "../pages/user/Dashboard.page";
import ProfilePage from "../pages/user/Profile.page";

const userChidRoutes: RouteObject[] = [
  { index: true, element: <DashboardPage /> },
  { path: "profile", element: <ProfilePage /> },
];

export const userLayoutRoute: RouteObject = {
  path: "/user",
  children: userChidRoutes,
};
