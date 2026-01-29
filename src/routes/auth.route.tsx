import type { RouteObject } from "react-router";
import LoginPage from "../pages/auth/Login.page";
import RegisterPage from "../pages/auth/Register.page";
import AuthLayout from "../layouts/Auth.layout";
import { loginAction } from "../actions/login.action";

const authChildRoutes: RouteObject[] = [
  { path: "login", element: <LoginPage />, action: loginAction },
  { path: "register", element: <RegisterPage /> },
];

export const authLayoutRoute: RouteObject = {
  path: "/auth",
  element: <AuthLayout />,
  children: authChildRoutes,
};
