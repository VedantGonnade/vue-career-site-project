<template>
  <JobFilterSidebarCheckboxGroup
    :unique-values="UNIQUE_DEGREES"
    :action="userStore.ADD_SELECTED_DEGREES"
  />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useDegreesStore } from "@/stores/degrees";
import { useUserStore } from "@/stores/user";
import JobFilterSidebarCheckboxGroup from "@/components/jobResults/jobFiltersSidebar/jobFilterSidebarCheckboxGroup.vue";

const degreeStore = useDegreesStore();
const UNIQUE_DEGREES = computed(() => degreeStore.UNIQUE_DEGREES);

const userStore = useUserStore();
</script>