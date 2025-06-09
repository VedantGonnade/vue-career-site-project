<template>
  <main class="flex h-screen flex-col">
    <section class="pb-20 pt-10">
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

    <Spotlight class="flex flex-row justify-center pb-16">
      <template #default="{ img, title, description }">
        <RouterLink
          to="/jobs/results"
          class="mx-5 flex h-96 w-72 flex-col rounded-lg border bg-brand-gray-2"
        >
          <img :src="img" class="object-contain" />
          <div class="mt-3 h-48 px-6 py-4">
            <h3 class="text-lg font-medium">{{ title }}</h3>
            <p class="mt-3 text-sm">{{ description }}</p>
          </div>

          <RouterLink
            to="/jobs/results"
            class="px-6 pb-4 text-sm text-brand-blue-1"
            >See Jobs</RouterLink
          >
        </RouterLink>
      </template>
    </Spotlight>
  </main>
</template>

<script>
import TheHeadline from "@/components/jobSearch/theHeadline.vue";
import JobSearchForm from "@/components/jobSearch/jobSearchForm.vue";
import VueImage from "@/images/Vue.js_Logo_2.svg.png";
import Spotlight from "@/components/jobSearch/spotLight.vue";

export default {
  name: "TheHero",
  components: {
    TheHeadline,
    JobSearchForm,
    Spotlight,
  },
  data() {
    return {
      VueImage,
    };
  },
};
</script>
