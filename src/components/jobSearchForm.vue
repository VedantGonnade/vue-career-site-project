<template>
  <div class="flex items-center">
    <div class="flex flex-col">
      <label class="mb-2 ml-5">Role</label>
      <form
        class="flex h-12 w-60 items-center rounded-full border border-solid border-brand-gray-3"
      >
        <font-awesome-icon :icon="['fas', 'search']" class="ml-4" />
        <input
          type="text"
          class="h-full w-full rounded-full px-4 text-brand-gray-1 outline-none"
          placeholder="Software Engineer"
        />
      </form>
    </div>
    <div class="ml-7 flex flex-col">
      <label class="mb-2 ml-5">Where?</label>
      <form
        class="flex h-12 w-60 items-center rounded-full border border-solid border-brand-gray-3"
      >
        <font-awesome-icon :icon="['fas', 'search']" class="ml-4" />
        <input
          type="text"
          class="h-full w-full rounded-full px-4 text-brand-gray-1 outline-none"
          placeholder="Los Angeles"
        />
      </form>
    </div>
    <div class="ml-7 mt-8">
      <ActionButton text="Search" class="p-5" />
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/actionButton.vue";

export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
  },
};
</script>
