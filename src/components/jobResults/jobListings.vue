<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <JobListing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mx-auto mt-8 flex flex-row flex-nowrap">
      <p class="flex-grow text-sm">Page {{ currentPage }}</p>
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
