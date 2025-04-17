import { Octokit } from "octokit";

const main = () => {
  try {
    const octokit = new Octokit();
    console.log(import.meta);
    console.log(import.meta.url);
    console.log(import.meta.resolve);
    try {
      console.log(import.meta.resolve("octokit"));
    } catch (error) {
      console.error("Error resolving 'octokit':", error);
      console.log(import.meta.resolve("octokit/index.js"));
    }
  } catch (error) {
    console.error(error);
  }
};

main();
