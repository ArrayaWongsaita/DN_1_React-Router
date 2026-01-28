import type { RouteObject } from "react-router";
import LoginPage from "../pages/auth/Login.page";
import RegisterPage from "../pages/auth/Register.page";

const authChildRoutes: RouteObject[] = [
  { path: "login", element: <LoginPage /> },
  { path: "register", element: <RegisterPage /> },
];

export const authLayoutRoute: RouteObject = {
  path: "/auth",
  children: authChildRoutes,
};
