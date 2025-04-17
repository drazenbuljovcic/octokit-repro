import { Octokit } from "octokit";

const main = () => {
  try {
    const octokit = new Octokit();
    console.log(import.meta);
    console.log(import.meta.url);
    console.log({ octokit });

    console.log(import.meta.resolve("octokit"));
    console.log(import.meta.resolve("@octokit/core"));
    console.log(import.meta.resolve("@octokit/app"));
  } catch (error) {
    console.error(error);
  }
};

main();
