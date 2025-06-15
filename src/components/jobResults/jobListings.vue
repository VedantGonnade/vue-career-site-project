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

<script>
import JobListing from "@/components/jobResults/jobListing.vue";
import { mapState, mapActions } from "pinia";
import { useJobsStore, FETCH_JOBS, FILTERED_JOBS } from "@/stores/jobs";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  computed: {
    currentPage() {
      return Number.parseInt(this.$route.query.page ?? "1");
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    ...mapState(useJobsStore, {
      FILTERED_JOBS,
      nextPage() {
        const nextPage = this.currentPage + 1;
        const maxpage = Math.ceil(this.FILTERED_JOBS.length / 10);
        return nextPage <= maxpage ? nextPage : undefined;
      },
      displayedJobs() {
        const pageNumber = this.currentPage;
        const startIndex =
          Math.min(pageNumber - 1, this.FILTERED_JOBS.length / 10 - 1) * 10;
        const lastIndex = Math.min(startIndex + 10, this.FILTERED_JOBS.length);
        return this.FILTERED_JOBS.slice(startIndex, lastIndex);
      },
    }),
  },
  async mounted() {
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions(useJobsStore, [FETCH_JOBS]),
  },
};
</script>
