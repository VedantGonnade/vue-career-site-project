<template>
  <li class="mb-7">
    <RouterLink
      :to="jobPageLink"
      class="mx-auto block rounded border border-solid border-brand-gray-2 bg-white hover:shadow-gray"
    >
      <div class="mx-8 pb-2 pt-5">
        <h2 class="mb-2 text-2xl">
          {{ job.title }}
        </h2>
        <div class="flex flex-row">
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <ul>
              <li
                v-for="location in job.locations"
                :key="location"
                class="mr-3 inline-block"
              >
                <span>{{ location }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <h3 class="mb-2 mt-1">Qualifications:</h3>
        <div>
          <ul class="list-disc pl-8">
            <li
              v-for="qualification in job.minimumQualifications"
              :key="qualification"
            >
              {{ qualification }}
            </li>
          </ul>
        </div>
      </div>
    </RouterLink>
  </li>
</template>

<script lang="ts" setup>
import { computed, type PropType } from "vue";
import type { Job } from "@/api/types";
const props = defineProps({
  job: {
    type: Object as PropType<Job>,
    required: true,
  },
});

const jobPageLink = computed(() => {
  return `/jobs/results/${props.job.id}`;
});
</script>
