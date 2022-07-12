/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "solid-app-router";

import "./index.css";
import App from "./App";
import RepoProvider from "./libs/providers/RepoProvider";

render(
  () => (
    <Router>
      <RepoProvider>
        <App />
      </RepoProvider>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
