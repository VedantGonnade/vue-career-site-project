<template>
  <div
    class="border-brang-gray-1 flex w-96 flex-col border-r border-solid bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Clear Filters" type="secondary" @click="userStore.CLEAR_USER_JOB_FILTERS"/>
        </div>
      </div>
      <CollapsibleAccordian header="Organizations">
        <JobFiltersSidebarOrganizations />
      </CollapsibleAccordian>

      <CollapsibleAccordian header="Job Types">
        <JobFiltersSidebarJobTypes />
      </CollapsibleAccordian>

      <CollapsibleAccordian header="Degrees">
        <JobFiltersSidebarDegrees />
      </CollapsibleAccordian>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user";

import ActionButton from "@/components/shared/actionButton.vue";
import CollapsibleAccordian from "@/components/shared/collapsibleAccordian.vue";
import JobFiltersSidebarDegrees from "@/components/jobResults/jobFiltersSidebar/jobFiltersSidebarDegrees.vue";
import JobFiltersSidebarOrganizations from "@/components/jobResults/jobFiltersSidebar/jobFiltersSidebarOrganizations.vue";
import JobFiltersSidebarJobTypes from "@/components/jobResults/jobFiltersSidebar/jobFiltersSidebarJobTypes.vue";

const userStore = useUserStore();
</script>
