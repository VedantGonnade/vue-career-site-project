<template>
  <div
    class="border-brang-gray-1 flex w-96 flex-col border-r border-solid bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Clear Filter" type="secondary" />
        </div>
      </div>
      <CollapsibleAccordian />
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/shared/actionButton.vue";
import CollapsibleAccordian from "@/components/shared/collapsibleAccordian.vue";
export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    CollapsibleAccordian,
  },
};
</script>
