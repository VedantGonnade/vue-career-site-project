<template>
  <form
    class="flex h-14 items-center justify-between pt-3"
    @submit.prevent="submitForm"
  >
    <div class="relative flex h-full flex-1 items-center">
      <label for="role" class="absolute -top-8 left-0 ml-5">Role</label>
      <div
        class="flex h-full w-60 items-center rounded-full border border-solid border-brand-gray-3 focus-within:border-2 focus-within:border-brand-green-1"
      >
        <font-awesome-icon :icon="['fas', 'search']" class="ml-4" />
        <TextInput id="role" v-model="role" placeholder="Frontend Developer" />
      </div>
    </div>
    <div class="relative ml-10 flex h-full flex-1 items-center">
      <label for="location" class="absolute -top-8 left-0 ml-5">Where?</label>
      <div
        class="flex h-full w-60 items-center rounded-full border border-solid border-brand-gray-3 focus-within:border-2 focus-within:border-brand-green-1"
      >
        <font-awesome-icon :icon="['fas', 'location-dot']" class="ml-4" />
        <TextInput id="location" v-model="location" placeholder="Los Angeles" />
      </div>
    </div>
    <ActionButton
      text="Search"
      class="ml-10 flex h-full flex-1 items-center justify-center rounded-full"
    />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

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
