import getJobs from "@/api/getJobs";
import { defineStore } from "pinia";
import { useUserStore } from "@/stores/user";

export const FETCH_JOBS = "FETCH_JOBS";
export const UNIQUE_ORGANIZATION = "UNIQUE_ORGANIZATION";
export const FILTERED_JOBS_BY_ORGANIZATION = "FILTERED_JOBS_BY_ORGANIZATION";
export const UNIQUE_JOB_TYPES = "UNIQUE_JOB_TYPES";
export const FILTERED_JOB_TYPES = "FILTERED_JOB_TYPES";

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

    [FILTERED_JOBS_BY_ORGANIZATION](state) {
      const userStore = useUserStore();

      if (userStore.selectedOrganization.length === 0) {
        return state.jobs;
      }

      return state.jobs.filter(job => {
        return userStore.selectedOrganization.includes(job.organization);
      });
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

    [FILTERED_JOB_TYPES](state) {
      const userStore = useUserStore();

      if (userStore.selectedJobTypes.length === 0) {
        return state.jobs;
      }

      return state.jobs.filter(job => {
        return userStore.selectedJobTypes.includes(job.jobType);
      });
    },
  },
});
