import { github } from "./GitHubStats";

interface RepoInterface {
  languages_url: string;
}

interface LenguagesInterface {
  JavaScript: number;
  TypeScript: number;
  CSS: number;
  SCSS: number;
  HTML: number;
  SUM: number;
}

const Lenguages: LenguagesInterface = {
  JavaScript: 0,
  TypeScript: 0,
  CSS: 0,
  SCSS: 0,
  HTML: 0,
  SUM: 0,
};

export function GetRepositoris() {
  github.get("users/zarkovich/repos").then(({ data }) => {
    const UrlsLenguages = data.map((rep: RepoInterface) => rep.languages_url);

    GetLenguagesStats(UrlsLenguages);
  });
}

function GetLenguagesStats(array: string[]) {
  array.forEach((link: string) => {
    github.get(link).then((resp) => {
      if (resp.data.JavaScript > 0)
        Lenguages.JavaScript += resp.data.JavaScript;
      if (resp.data.TypeScript > 0)
        Lenguages.TypeScript += resp.data.TypeScript;
      if (resp.data.CSS > 0) Lenguages.CSS += resp.data.CSS;
      if (resp.data.SCSS > 0) Lenguages.SCSS += resp.data.SCSS;
      if (resp.data.HTML > 0) Lenguages.HTML += resp.data.HTML;
    });
  });
}
