<template>
  <div>Job Page is {{ currentJobId }}</div>
</template>

<script>
export default {
  name: "JobView",
  computed: {
    currentJobId() {
      return this.$route.params.jobId;
    },
  },
};
</script>
