<template>
  <div
    class="border-brang-gray-1 flex w-96 flex-col border-r border-solid bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Clear Filter" type="secondary" />
        </div>
      </div>
      <JobFilterSidebarCheckboxGroup
        header="Organizations"
        :unique-values="UNIQUE_ORGANIZATION"
        :action="userStore.ADD_SELECTED_ORGANIZATION"
      />
      <JobFilterSidebarCheckboxGroup
        header="Job Types"
        :unique-values="UNIQUE_JOB_TYPES"
        :action="userStore.ADD_SELECTED_JOB_TYPES"
      />
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";

import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";

import ActionButton from "@/components/shared/actionButton.vue";
import JobFilterSidebarCheckboxGroup from "@/components/jobResults/jobFiltersSidebar/jobFilterSidebarCheckboxGroup.vue";

const jobsStore = useJobsStore();
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES);
const UNIQUE_ORGANIZATION = computed(() => jobsStore.UNIQUE_ORGANIZATION);

const userStore = useUserStore();
</script>
