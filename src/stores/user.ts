import { defineStore } from "pinia";
import { ref } from "vue";

export const ADD_SELECTED_ORGANIZATION = "ADD_SELECTED_ORGANIZATION";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";
export const ADD_SELECTED_DEGREES = "ADD_SELECTED_DEGREES";
export const CLEAR_USER_JOB_FILTERS = "CLEAR_USER_JOB_FILTERS";

export const useUserStore = defineStore("user", () => {
  const isLoggedIn = ref(false);
  const selectedOrganization = ref<string[]>([]);
  const selectedJobTypes = ref<string[]>([]);
  const selectedDegrees = ref<string[]>([]);

  const login = () => {
    isLoggedIn.value = true;
  };

  const ADD_SELECTED_ORGANIZATION = (organizations: string[]) => {
    selectedOrganization.value = organizations;
  };

  const ADD_SELECTED_JOB_TYPES = (jobTypes: string[]) => {
    selectedJobTypes.value = jobTypes;
  };

  const ADD_SELECTED_DEGREES = (degrees: string[]) => {
    selectedDegrees.value = degrees;
  };

  const CLEAR_USER_JOB_FILTERS = () => {
    selectedOrganization.value = [];
    selectedJobTypes.value = [];
    selectedDegrees.value = [];
  };

  return {
    isLoggedIn,
    selectedOrganization,
    selectedJobTypes,
    selectedDegrees,
    login,
    ADD_SELECTED_ORGANIZATION,
    ADD_SELECTED_JOB_TYPES,
    ADD_SELECTED_DEGREES,
    CLEAR_USER_JOB_FILTERS,
  };
});
