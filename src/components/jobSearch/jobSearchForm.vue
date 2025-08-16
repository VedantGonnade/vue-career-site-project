<template>
  <form
    class="flex justify-between items-center pt-3 h-14"
    @submit.prevent="submitForm"
  >
    <div class="relative flex flex-1 items-center h-full">
      <label for="role" class="-top-8 left-0 absolute ml-5">Role</label>
      <div
        class="flex items-center border focus-within:border-2 border-brand-gray-3 focus-within:border-brand-green-1 border-solid rounded-full w-60 h-full"
      >
        <font-awesome-icon :icon="['fas', 'search']" class="ml-4" />
        <TextInput id="role" v-model="role" placeholder="Frontend Developer" />
      </div>
    </div>
    <div class="relative flex flex-1 items-center ml-10 h-full">
      <label for="location" class="-top-8 left-0 absolute ml-5">Where?</label>
      <div
        class="flex items-center border focus-within:border-2 border-brand-gray-3 focus-within:border-brand-green-1 border-solid rounded-full w-60 h-full"
      >
        <font-awesome-icon :icon="['fas', 'location-dot']" class="ml-4" />
        <TextInput id="location" v-model="location" placeholder="Los Angeles" />
      </div>
    </div>
    <ActionButton
      text="Search"
      class="flex flex-1 justify-center items-center ml-10 rounded-full h-full"
    />
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useUserStore } from "@/stores/user";

import ActionButton from "@/components/shared/actionButton.vue";
import TextInput from "@/components/shared/textInput.vue";

const role = ref("");
const location = ref("");

const router = useRouter();

const submitForm = () => {
  router.push({
    name: "JobResults",
    query: { role: role.value, location: location.value },
  });
};
</script>
