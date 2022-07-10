import { Route, Routes } from "solid-app-router";
import type { Component } from "solid-js";
import Nav from "./libs/ui/Nav";
import Home from "./pages/Home";
import SavedRepos from "./pages/SavedRepos";

const App: Component = () => {
  return (
    <div class="px-4 pt-4">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-repos" element={<SavedRepos />} />
      </Routes>
    </div>
  );
};

export default App;
