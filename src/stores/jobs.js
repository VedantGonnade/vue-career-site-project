import getJobs from "@/api/getJobs";
import { defineStore } from "pinia";
import { useUserStore } from "@/stores/user";

export const FETCH_JOBS = "FETCH_JOBS";
export const UNIQUE_ORGANIZATION = "UNIQUE_ORGANIZATION";
export const UNIQUE_JOB_TYPES = "UNIQUE_JOB_TYPES";
export const FILTERED_JOBS = "FILTERED_JOBS";
export const INCLUDE_JOB_BY_ORGANIZATION = "INCLUDE_JOB_BY_ORGANIZATION";
export const INCLUDE_JOB_BY_JOB_TYPE = "INCLUDE_JOB_BY_JOB_TYPE";

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

    [UNIQUE_JOB_TYPES](state) {
      const uniqueJobTypes = new Set();
      state.jobs.forEach(job => {
        if (job.jobType) {
          uniqueJobTypes.add(job.jobType);
        }
      });
      return uniqueJobTypes;
    },

    [INCLUDE_JOB_BY_ORGANIZATION]: () => job => {
      const userStore = useUserStore();
      if (userStore.selectedOrganization.length === 0) return true;

      return userStore.selectedOrganization.includes(job.organization);
    },

    [INCLUDE_JOB_BY_JOB_TYPE]: () => job => {
      const userStore = useUserStore();
      if (userStore.selectedJobTypes.length === 0) return true;

      return userStore.selectedJobTypes.includes(job.jobType);
    },

    [FILTERED_JOBS](state) {
      return state.jobs
        .filter(job => this.INCLUDE_JOB_BY_ORGANIZATION(job))
        .filter(job => this.INCLUDE_JOB_BY_JOB_TYPE(job));
    },
  },
});
