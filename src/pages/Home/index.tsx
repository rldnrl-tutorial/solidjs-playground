import axios from "axios";
import { Component, createEffect, createSignal, For, onMount } from "solid-js";

import { Repo } from "../../libs/types/Repo";
import Card from "../../libs/ui/Card";

const Home: Component = () => {
  const [username, setUsername] = createSignal("rldnrl");
  const [repos, setRepos] = createSignal<Repo[]>([]);

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
    console.log(repos());
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
          class="w-12 flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        >
          Search
        </button>
      </form>
      <h3>Githbu repos for {username()}</h3>
      <For each={repos()}>
        {(repo) => (
          <Card
            title={repo.name}
            description={repo.description}
            starCount={repo.stargazers_count}
            to={repo.html_url}
          />
        )}
      </For>
    </div>
  );
};

export default Home;
