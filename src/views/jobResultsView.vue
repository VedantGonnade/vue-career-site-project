<template>
  <div class="flex w-full flex-row flex-nowrap">
    <JobFiltersSidebar />
    <JobListings />
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/jobResults/jobFiltersSidebar/jobFiltersSidebar.vue";
import JobListings from "@/components/jobResults/jobListings.vue";

export default {
  name: "JobResultsView",
  components: { JobFiltersSidebar, JobListings },
};
</script>
