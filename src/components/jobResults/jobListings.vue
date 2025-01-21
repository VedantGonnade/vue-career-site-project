<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <JobListing v-for="job in jobs" :key="job.id" :job="job" />
    </ol>
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
  async mounted() {
    const { data } = await axios.get("http://localhost:3000/jobs");
    this.jobs = data;
  },
};
</script>
