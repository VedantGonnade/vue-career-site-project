<template>
  <div>
    <h1 class="text-6xl font-bold">Job Results page</h1>
    <button class="mt-10 bg-black text-rose-200" @click="goToHome">
      Go to Home
    </button>
  </div>
</template>

<script>
export default {
  name: "JobResultsView",
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
