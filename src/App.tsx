import { Component, lazy } from "solid-js";
import { Route, Routes } from "solid-app-router";

import Nav from "./libs/ui/Nav";

const Home = lazy(() => import("./pages/Home"));
const SavedRepos = lazy(() => import("./pages/SavedRepos"));

const App: Component = () => {
  return (
    <div class="w-96 px-4 pt-4">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-repos" element={<SavedRepos />} />
      </Routes>
    </div>
  );
};

export default App;
