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
              :id="jobType"
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

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";

import CollapsibleAccordian from "@/components/shared/collapsibleAccordian.vue";

const selectedJobTypes = ref([]);

const jobsStore = useJobsStore();
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES);

const router = useRouter();
const userStore = useUserStore();

const selectJobTypes = () => {
  userStore.ADD_SELECTED_JOB_TYPES(selectedJobTypes.value);
  router.push({ name: "JobResults" });
};
</script>
