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
              :key="menuItem"
              class="ml-9 flex h-full first:ml-0"
            >
              <a href="" class="flex h-full items-center py-2">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton
            v-else
            text="Sign in"
            class="rounded-lg"
            @click="loginUser"
          />
        </div>
      </div>
      <TheSubnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/shared/actionButton.vue";
import ProfileImage from "@/components/navigation/profileImage.vue";
import TheSubnav from "@/components/navigation/theSubnav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav,
  },
  data() {
    return {
      menuItems: [
        "Teams",
        "Locations",
        "Life at Bobo Corp",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
