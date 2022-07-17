import { createSignal } from "solid-js";

import { Repo } from "../types/Repo";

export const [repos, setRepos] = createSignal<Repo[]>([]);
export const [savedRepos, setSavedRepos] = createSignal<Repo[]>([]);

export const saveRepo = (repo: Repo) => {
  setSavedRepos([repo, ...savedRepos()]);
};

export const unsavedRepo = (repoId: number) => {
  setSavedRepos(savedRepos().filter((item) => item.id !== repoId));
};

export const repoIsSaved = (repoId: number) => {
  const repo = savedRepos().filter((item) => item.id === repoId);

  return repo.length > 0;
};
