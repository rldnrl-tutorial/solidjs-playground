import { Component, createSignal, For } from "solid-js";

import { savedRepos } from "../../libs/store/repo";
import RepoCard from "../../libs/ui/RepoCard";

const SavedRepos: Component = () => {
  return (
    <div>
      <h2>Saved Repos</h2>
      <For each={savedRepos()}>{(repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export default SavedRepos;
