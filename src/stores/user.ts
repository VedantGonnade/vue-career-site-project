import { defineStore } from "pinia";

export const ADD_SELECTED_ORGANIZATION = "ADD_SELECTED_ORGANIZATION";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";
export const ADD_SELECTED_DEGREES = "ADD_SELECTED_DEGREES";

export interface UserState {
  isLoggedIn: boolean;
  selectedOrganization: string[];
  selectedJobTypes: string[];
  selectedDegrees: string[];
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    isLoggedIn: false,
    selectedOrganization: [],
    selectedJobTypes: [],
    selectedDegrees: []
  }),
  actions: {
    login() {
      this.isLoggedIn = true;
    },

    [ADD_SELECTED_ORGANIZATION](organizations: string[]) {
      this.selectedOrganization = organizations;
    },

    [ADD_SELECTED_JOB_TYPES](jobTypes: string[]) {
      this.selectedJobTypes = jobTypes;
    },

    [ADD_SELECTED_DEGREES](degrees: string[]) {
      this.selectedDegrees = degrees;
    },
  },
});
