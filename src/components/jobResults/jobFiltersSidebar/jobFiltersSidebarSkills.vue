<template>
  <div class="mt-2">
    <input
      v-model.lazy.trim="skillterm"
      type="text"
      class="shadow-gray p-3 border border-brand-gray-1 border-solid rounded w-full h-12 text-base"
      placeholder="Computer programming, Finance degree"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const skillterm = computed({
  get () {
    return userStore.skillsSearchTerm;
  },
  set (value: string) {
      userStore.ADD_SKILLS_SEARCH_TERM(value);
  }
});
</script>
