import { createPinia, setActivePinia } from "pinia";
import { useJobsStore } from "@/stores/jobs";
import { beforeEach, describe, expect, it } from "vitest";
import axios from "axios";

vi.mock("axios");

describe("state", () => {
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
  });

  it("stores job listings", () => {
    const jobsStore = useJobsStore();
    expect(jobsStore.jobs).toEqual([]);
  });
});

describe("actions", () => {
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
  });

  describe("FETCH_JOBS", () => {
    it("it makes API request and stores jobs", async () => {
      axios.get.mockResolvedValue({ data: ["Job 1", "Job 2"] });
      const jobsStore = useJobsStore();
      await jobsStore.FETCH_JOBS();

      expect(jobsStore.jobs).toEqual(["Job 1", "Job 2"]);
    });
  });
});
