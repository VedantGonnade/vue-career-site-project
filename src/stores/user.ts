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
  const skillsSearchTerm = ref("");

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

  const ADD_SKILLS_SEARCH_TERM = (searchTerm: string) => {
    skillsSearchTerm.value = searchTerm;
  };

  const CLEAR_USER_JOB_FILTERS = () => {
    selectedOrganization.value = [];
    selectedJobTypes.value = [];
    selectedDegrees.value = [];
    skillsSearchTerm.value = "";
  };

  return {
    isLoggedIn,
    selectedOrganization,
    selectedJobTypes,
    selectedDegrees,
    skillsSearchTerm,
    login,
    ADD_SELECTED_ORGANIZATION,
    ADD_SELECTED_JOB_TYPES,
    ADD_SELECTED_DEGREES,
    ADD_SKILLS_SEARCH_TERM,
    CLEAR_USER_JOB_FILTERS,
  };
});
