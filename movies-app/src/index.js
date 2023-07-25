import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { FavoritesPage, MoviePage } from "./Routes/export";
import Error from "./ErrorPage";
import "./index.css";
import { FavoritesProvider } from "./Routes/Favorites/FavoritesProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
    errorElement: <Error />,
  },
  {
    path: "/:movieId",
    element: <MoviePage />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </React.StrictMode>
);
