<template>
  <div class="flex h-14 items-center justify-between pt-3">
    <div class="relative flex h-full flex-1 items-center">
      <label class="absolute -top-8 left-0 ml-5">Role</label>
      <form
        class="flex h-full w-60 items-center rounded-full border border-solid border-brand-gray-3 focus-within:border-2 focus-within:border-brand-green-1"
      >
        <font-awesome-icon :icon="['fas', 'search']" class="ml-4" />
        <TextInput v-model="role" placeholder="Frontend Developer" />
      </form>
    </div>
    <div class="relative ml-10 flex h-full flex-1 items-center">
      <label class="absolute -top-8 left-0 ml-5">Where?</label>
      <form
        class="flex h-full w-60 items-center rounded-full border border-solid border-brand-gray-3 focus-within:border-2 focus-within:border-brand-green-1"
      >
        <font-awesome-icon :icon="['fas', 'location-dot']" class="ml-4" />
        <TextInput v-model="location" placeholder="Los Angeles" />
      </form>
    </div>
    <ActionButton
      text="Search"
      class="ml-10 flex h-full flex-1 items-center justify-center rounded-full"
    />
  </div>
</template>

<script>
import ActionButton from "@/components/shared/actionButton.vue";
import TextInput from "@/components/shared/textInput.vue";

export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return { role: "", location: "" };
  },
};
</script>
