import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { ColorProvider } from "./ColorProvider.tsx";
import ErrorPage from "./error-page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ColorProvider>
        <App />
      </ColorProvider>
    ),
    errorElement: <ErrorPage />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
