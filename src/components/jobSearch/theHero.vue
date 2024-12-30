<template>
  <main>
    <section class="flex h-screen flex-col pb-20 pt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2">
          <TheHeadline />
          <JobSearchForm />
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img
            :src="VueImage"
            class="h-80 w-80 object-contain"
            alt="Vue.js logo"
          />
        </div>
        <div class="col-span-1 col-start-auto"></div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from "@/components/jobSearch/theHeadline.vue";
import JobSearchForm from "@/components/jobSearch/jobSearchForm.vue";
import VueImage from "@/images/Vue.js_Logo_2.svg.png";

export default {
  name: "TheHero",
  components: {
    TheHeadline,
    JobSearchForm,
  },
  data() {
    return {
      VueImage,
    };
  },
};
</script>
