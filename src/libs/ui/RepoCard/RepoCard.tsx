import { Component } from "solid-js";
import { Repo } from "../../types/Repo";
import Card from "../Card";

type RepoCard = {
  repo: Repo;
  onSave?: () => void;
};

const RepoCard: Component<RepoCard> = ({ repo, onSave }) => {
  return (
    <Card
      title={repo.name}
      description={repo.description}
      starCount={repo.stargazers_count}
      to={repo.html_url}
      onSave={onSave}
    />
  );
};

export default RepoCard;
