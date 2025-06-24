<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <JobListing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mx-auto mt-8 flex flex-row flex-nowrap">
      <p class="flex-grow text-sm">Page {{ currentPage }}</p>
      <div>
        <RouterLink
          v-if="previousPage"
          role="link"
          :to="{ name: 'JobResults', query: { page: previousPage } }"
          class="mx-3 text-sm font-semibold text-brand-blue-1"
          >Previous</RouterLink
        >
        <RouterLink
          v-if="nextPage"
          role="link"
          :to="{ name: 'JobResults', query: { page: nextPage } }"
          class="mx-3 text-sm font-semibold text-brand-blue-1"
          >Next</RouterLink
        >
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import JobListing from "@/components/jobResults/jobListing.vue";
import { useJobsStore } from "@/stores/jobs";
import { useDegreesStore } from "@/stores/degrees";
import { usePreviousAndNextPage } from "@/composables/usePreviousAndNextPage";

const route = useRoute();
const jobsStore = useJobsStore();
const degreesStore = useDegreesStore();

onMounted(jobsStore.FETCH_JOBS);
onMounted(degreesStore.FETCH_DEGREES);

const currentPage = computed(() => {
  return Number.parseInt(route.query.page as string ?? "1");
});

const FILTERED_JOBS = computed(() => {
  return jobsStore.FILTERED_JOBS;
});
const maxpage = computed(() => Math.ceil(FILTERED_JOBS.value.length / 10));

const { previousPage, nextPage } = usePreviousAndNextPage(currentPage, maxpage);

const displayedJobs = computed(() => {
  const pageNumber = currentPage.value;
  const startIndex =
    Math.min(pageNumber - 1, FILTERED_JOBS.value.length / 10 - 1) * 10;
  const lastIndex = Math.min(startIndex + 10, FILTERED_JOBS.value.length);
  return FILTERED_JOBS.value.slice(startIndex, lastIndex);
});
</script>
