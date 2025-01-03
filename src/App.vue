<template>
  <div>
    <mainNav />
    <RouterView />
  </div>
</template>

<script>
import mainNav from "@/components/navigation/mainNav.vue";
export default {
  name: "App",
  components: {
    mainNav,
  },
};
</script>
