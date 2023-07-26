import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./ErrorPage";
import App from "./App";
import { FavoritesPage, MoviePage } from "./Routes/export";
import { FavoritesProvider } from "./Routes/Favorites/FavoritesProvider";
import GlobalStyles from "./GlobalStyle";
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
      <GlobalStyles />
      <RouterProvider router={router} />
    </FavoritesProvider>
  </React.StrictMode>
);
