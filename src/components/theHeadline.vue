<template>
  <section>
    <h1>{{ action }} for everyone</h1>
    <h2>Find your next job at Zonal Surf</h2>
  </section>
</template>

<script>
export default {
  name: "TheHeadline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  created() {
    this.changeAction();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeAction() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        const actionIndex = actions.indexOf(this.action);
        const nextActionIndex = (actionIndex + 1) % actions.length;
        this.action = actions[nextActionIndex];
      }, 3000);
    },
  },
};
</script>
