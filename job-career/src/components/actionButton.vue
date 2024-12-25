<template>
  <button
    class="rounded-lg bg-brand-blue-1 px-4 py-2 text-white hover:shadow-blue"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "actionButton",
  props: ["text"],
};
</script>
