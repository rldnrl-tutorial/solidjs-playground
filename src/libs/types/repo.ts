export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  languages_url: string;
  stargazers_count: number;
  owner: Owner;
};

export interface Owner {
  login: string;
}
