<template>
  <button
    class="rounded-lg bg-brand-blue-1 px-4 py-2 text-white hover:shadow-blue"
    @click="handleClick"
  >
    Sign up
  </button>
</template>

<script>
export default {
  name: "actionButton",
  methods: {
    handleClick() {
      console.log("Button clicked");
    },
  },
};
</script>
