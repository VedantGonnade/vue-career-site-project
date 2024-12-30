<template>
  <div>
    <MainNav />
    <TheHero />
  </div>
</template>

<script>
import MainNav from "@/components/navigation/mainNav.vue";
import TheHero from "@/components/jobSearch/theHero.vue";

export default {
  name: "App",
  components: {
    MainNav,
    TheHero,
  },
};
</script>
