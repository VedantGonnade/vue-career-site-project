<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white font-medium">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <RouterLink
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-xl"
        >
          Zonal Surf
        </RouterLink>
        <nav class="ml-12 h-full">
          <ul class="flex h-full">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="ml-9 flex h-full first:ml-0"
            >
              <RouterLink
                :to="menuItem.url"
                class="flex h-full items-center py-2"
                >{{ menuItem.text }}
              </RouterLink>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton
            v-else
            text="Sign in"
            class="rounded-lg"
            @click="login"
          />
        </div>
      </div>
      <TheSubnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { ref, computed } from "vue";

import ActionButton from "@/components/shared/actionButton.vue";
import ProfileImage from "@/components/navigation/profileImage.vue";
import TheSubnav from "@/components/navigation/theSubnav.vue";

const menuItems = ref([
  { text: "Teams", url: "/teams" },
  { text: "Locations", url: "/"},
  { text: "Life at Bobo Corp", url: "/" },
  { text: "How we hire", url: "/" },
  { text: "Students", url: "/" },
  { text: "Jobs", url: "/jobs/results" },
]);

const userStore = useUserStore();
const login = computed(() => userStore.login);
const isLoggedIn = computed(() => userStore.isLoggedIn);

const headerHeightClass = computed(() => {
  return {
    "h-16": !isLoggedIn.value,
    "h-32": isLoggedIn.value,
  };
})
</script>
