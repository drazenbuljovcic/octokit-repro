import { Octokit } from "octokit";

const main = () => {
  try {
    const octokit = new Octokit();
    console.log(import.meta);
    console.log(import.meta.url);
    console.log(import.meta.resolve);
    console.log(import.meta.resolve("octokit"));
    console.log(import.meta.resolve("octokit/index.js"));
  } catch (error) {
    console.error(error);
  }
};

main();
