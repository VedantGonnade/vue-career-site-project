<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="changeActionStyle">{{ action }}</span> <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Zonal Surf</h2>
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
  computed: {
    changeActionStyle() {
      return {
        build: this.action === "Build",
        create: this.action === "Create",
        design: this.action === "Design",
        code: this.action === "Code",
      };
    },
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

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
