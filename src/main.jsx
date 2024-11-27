import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoginPage from "./pages/login.jsx";
import SignUpPage from "./pages/signup.jsx";
import ErrorPage from "./pages/error.jsx";
import HomePage from "./pages/home.jsx";
import CatalogPage from "./pages/catalog.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/catalog",
    element: <CatalogPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
