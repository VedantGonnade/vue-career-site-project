<template>
  <div>
    <MainNav />
    <TheHero />
  </div>
</template>

<script>
import MainNav from "@/components/mainNav.vue";
import TheHero from "@/components/theHero.vue";

export default {
  name: "App",
  components: {
    MainNav,
    TheHero,
  },
};
</script>
