import React from "react";
import { MoviesPage } from "./Routes";
import { PageLayout } from "./components";
function App() {
  return (
    <PageLayout>
      <MoviesPage />;
    </PageLayout>
  );
}

export default App;
