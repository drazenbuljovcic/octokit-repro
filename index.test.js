import { describe, expect, it } from "vitest";

describe("octokit-repro", () => {
  it("should resolve octokit", async () => {
    const { Octokit } = await import("octokit");
    expect(Octokit).toBeDefined();
  });

  it("should resolve octokit/index.js", async () => {
    const { Octokit } = await import("octokit/main.js");
    expect(Octokit).toBeDefined();
  });
});
