<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="changeActionStyle">{{ action }}</span> <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-normal">Find your next job at Zonal Surf</h2>
  </section>
</template>

<script lang="ts" setup>
import nextElementInList from "@/utils/nextElementInList";
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

const action = ref("Build");
const actions = ref(["Build", "Create", "Design", "Code"]);
const interval = ref<ReturnType<typeof setInterval>>();

const changeActionStyle = computed(() => {
  return {
    [action.value.toLowerCase()]: true,
  };
});

const changeAction = () => {
  interval.value = setInterval(() => {
    action.value = nextElementInList<string>(actions.value, action.value);
  }, 3000);
};

onMounted(changeAction);
onBeforeUnmount(() => {
  if (interval.value) {
    clearInterval(interval.value);
  }
});
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
