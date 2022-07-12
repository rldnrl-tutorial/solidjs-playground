import { createContext, useContext } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";
import { Repo } from "../types/Repo";

const [repos, setRepos] = createStore<Repo[]>([]);
const [savedRepos, setSavedRepos] = createStore<Repo[]>([]);

type RepoContextType = {
  repos: Repo[];
  setRepos: SetStoreFunction<Repo[]>;
  savedRepos: Repo[];
  setSavedRepos: SetStoreFunction<Repo[]>;
};

export const RepoContext = createContext<RepoContextType>({
  repos,
  setRepos,
  savedRepos,
  setSavedRepos,
});

export const useRepoContext = () => useContext(RepoContext);

type RepoProps = {
  children?: any;
};

export default function RepoProvider({ children }: RepoProps) {
  return (
    <RepoContext.Provider
      value={{
        repos,
        savedRepos,
        setSavedRepos,
        setRepos,
      }}
    >
      {children}
    </RepoContext.Provider>
  );
}
