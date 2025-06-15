<template>
  <CollapsibleAccordian header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobType in UNIQUE_JOB_TYPES"
            :key="jobType"
            class="flex h-8 w-1/2 items-center justify-start p-2"
          >
            <input
              :id="jobTyp"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              @change="selectJobTypes"
            />
            <label :for="jobType" class="text-sm">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </CollapsibleAccordian>
</template>

<script>
import CollapsibleAccordian from "@/components/shared/collapsibleAccordian.vue";
import { useJobsStore, UNIQUE_JOB_TYPES } from "@/stores/jobs";
import { ADD_SELECTED_JOB_TYPES, useUserStore } from "@/stores/user";
import { mapState, mapActions } from "pinia";
export default {
  name: "JobFiltersSidebarJobTypes",
  components: {
    CollapsibleAccordian,
  },
  data() {
    return {
      selectedJobTypes: [],
    };
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_JOB_TYPES]),
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_JOB_TYPES]),

    selectJobTypes() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
      this.$router.push({
        name: "JobResults",
      });
    },
  },
};
</script>
