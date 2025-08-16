<template>
  <div
    class="flex flex-col bg-white p-4 border-r border-brang-gray-1 border-solid w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 font-semibold text-base">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton
            text="Clear Filters"
            type="secondary"
            @click="userStore.CLEAR_USER_JOB_FILTERS"
          />
        </div>
      </div>

      <JobFiltersSidebarSkills />

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
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";

import ActionButton from "@/components/shared/actionButton.vue";
import CollapsibleAccordian from "@/components/shared/collapsibleAccordian.vue";
import JobFiltersSidebarDegrees from "@/components/jobResults/jobFiltersSidebar/jobFiltersSidebarDegrees.vue";
import JobFiltersSidebarOrganizations from "@/components/jobResults/jobFiltersSidebar/jobFiltersSidebarOrganizations.vue";
import JobFiltersSidebarJobTypes from "@/components/jobResults/jobFiltersSidebar/jobFiltersSidebarJobTypes.vue";
import JobFiltersSidebarSkills from "@/components/jobResults/jobFiltersSidebar/jobFiltersSidebarSkills.vue";

const userStore = useUserStore();
const route = useRoute();

onMounted(() => {
  userStore.ADD_SKILLS_SEARCH_TERM(route.query.role as string || "");
});

</script>
