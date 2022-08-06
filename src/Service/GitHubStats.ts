import axios from "axios";

export const github = axios.create({
  baseURL: "https://api.github.com",
  auth: import.meta.env.GITHUB_TOKEN,
});
