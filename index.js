import { Octokit } from "octokit";

const main = () => {
  try {
    const octokit = new Octokit();
  } catch (error) {
    console.error(error);
  }
};

main();
