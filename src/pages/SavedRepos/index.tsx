import { Component, createSignal, For } from "solid-js";
import { useRepoContext } from "../../libs/providers/RepoProvider";

import RepoCard from "../../libs/ui/RepoCard";

const SavedRepos: Component = () => {
  const { savedRepos } = useRepoContext();

  return (
    <div>
      <h2>Saved Repos</h2>
      <For each={savedRepos}>{(repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export default SavedRepos;
