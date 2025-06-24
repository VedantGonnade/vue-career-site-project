<template>
  <JobFilterSidebarCheckboxGroup
    :unique-values="UNIQUE_ORGANIZATION"
    :action="userStore.ADD_SELECTED_ORGANIZATION"
  />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";
import JobFilterSidebarCheckboxGroup from "@/components/jobResults/jobFiltersSidebar/jobFilterSidebarCheckboxGroup.vue";

const jobsStore = useJobsStore();
const UNIQUE_ORGANIZATION = computed(() => jobsStore.UNIQUE_ORGANIZATION);

const userStore = useUserStore();
</script>