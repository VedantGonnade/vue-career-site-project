import { defineStore } from "pinia";

export const ADD_SELECTED_ORGANIZATION = "ADD_SELECTED_ORGANIZATION";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    selectedOrganization: [],
    selectedJobTypes: [],
  }),
  actions: {
    login() {
      this.isLoggedIn = true;
    },

    [ADD_SELECTED_ORGANIZATION](organizations) {
      this.selectedOrganization = organizations;
    },

    [ADD_SELECTED_JOB_TYPES](jobTypes) {
      this.selectedJobTypes = jobTypes;
    },
  },
});
