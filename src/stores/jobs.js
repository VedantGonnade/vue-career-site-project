import getJobs from "@/api/getJobs";
import { defineStore } from "pinia";

export const FETCH_JOBS = "FETCH_JOBS";
export const UNIQUE_ORGANIZATION = "UNIQUE_ORGANIZATION";

export const useJobsStore = defineStore("jobs", {
  state: () => ({
    jobs: [],
  }),
  actions: {
    async [FETCH_JOBS]() {
      this.jobs = await getJobs();
    },
  },
  getters: {
    [UNIQUE_ORGANIZATION](state) {
      const uniqueOrganizations = new Set();
      state.jobs.forEach(job => {
        if (job.organization) {
          uniqueOrganizations.add(job.organization);
        }
      });
      return uniqueOrganizations;
    },
  },
});
