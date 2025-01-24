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
          :to="{ name: 'JobResults', query: { page: previousPage } }"
          class="mx-3 text-sm font-semibold text-brand-blue-1"
          >Previous</RouterLink
        >
        <RouterLink
          v-if="nextPage"
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
import axios from "axios";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    };
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
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxpage = this.jobs.length / 10;
      return nextPage <= maxpage ? nextPage : undefined;
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const startIndex =
        Math.min(pageNumber - 1, this.jobs.length / 10 - 1) * 10;
      const lastIndex = Math.min(startIndex + 10, this.jobs.length);
      return this.jobs.slice(startIndex, lastIndex);
    },
  },
  async mounted() {
    const { data } = await axios.get("http://localhost:3000/jobs");
    this.jobs = data;
  },
};
</script>
