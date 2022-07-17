import axios from "axios";
import { Component, createEffect, createSignal, For, onMount } from "solid-js";
import { useRepoContext } from "../../libs/providers/RepoProvider";

import Card from "../../libs/ui/Card";

const Home: Component = () => {
  const [username, setUsername] = createSignal("rldnrl");
  const { repos, setRepos, savedRepos, setSavedRepos } = useRepoContext();

  onMount(async () => {
    const res = await axios.get(
      `https://api.github.com/users/${username()}/repos?sort=created`
    );
    setRepos(res.data);
  });

  createEffect(async () => {
    const res = await axios.get(
      `https://api.github.com/users/${username()}/repos?sort=created`
    );
    setRepos(res.data);
  });

  const refetchWithUsername = (e: Event) => {
    e.preventDefault();
    const usernameInput = document.querySelector(
      "#username"
    ) as HTMLInputElement;
    setUsername(usernameInput.value);
  };

  return (
    <div>
      <form class="mb-3 flex gap-1 h-10" onSubmit={refetchWithUsername}>
        <input
          type="text"
          class="px-2 py-1 align-middle border-2 rounded-md border-blue-400"
          id="username"
          required
        />
        <button
          type="submit"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </form>
      <h3>Githbu repos for {username()}</h3>
      <For each={repos}>
        {(repo) => (
          <Card
            title={repo.name}
            description={repo.description}
            starCount={repo.stargazers_count}
            to={repo.html_url}
            onSave={() => {
              setSavedRepos([...savedRepos, repo]);
            }}
            onUnsave={() => {
              const nextState = savedRepos.filter(
                (item) => item.id !== repo.id
              );
              setSavedRepos(nextState);
            }}
          />
        )}
      </For>
    </div>
  );
};

export default Home;
