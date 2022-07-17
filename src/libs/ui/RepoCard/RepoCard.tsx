import { Component } from "solid-js";

import { repoIsSaved, saveRepo, unsavedRepo } from "../../store/repo";
import { Repo } from "../../types/Repo";
import Rating from "../Rating";

type RepoCard = {
  repo: Repo;
  onSave?: () => void;
  onUnsave?: () => void;
};

const RepoCard: Component<RepoCard> = ({ repo }) => {
  return (
    <div class="my-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <a href={repo.html_url}>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {repo.name}
          </h5>
        </a>
        <Rating count={repo.stargazers_count} />
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {repo.description}
        </p>
        {repoIsSaved(repo.id) ? (
          <button
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            onClick={() => unsavedRepo(repo.id)}
          >
            Unsave
          </button>
        ) : (
          <button
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => saveRepo(repo)}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
