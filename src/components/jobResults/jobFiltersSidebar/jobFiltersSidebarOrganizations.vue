<template>
  <CollapsibleAccordian header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATION"
            :key="organization"
            class="flex h-8 w-1/2 items-center justify-start p-2"
          >
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              @change="selectOrganization"
            />
            <label :for="organization" class="text-sm">{{
              organization
            }}</label>
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

const selectedOrganizations = ref([]);

const jobsStore = useJobsStore();
const UNIQUE_ORGANIZATION = computed(() => jobsStore.UNIQUE_ORGANIZATION);

const router = useRouter();
const userStore = useUserStore();

const selectOrganization = () => {
  userStore.ADD_SELECTED_ORGANIZATION(selectedOrganizations.value);
  router.push({ name: "JobResults" });
};
</script>
