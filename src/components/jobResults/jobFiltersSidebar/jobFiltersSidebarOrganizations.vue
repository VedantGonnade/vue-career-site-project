<template>
  <CollapsibleAccordian header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="h-8 w-1/2">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <label for="VueTube" class="text-sm">VueTube</label>
          </li>

          <li class="h-8 w-1/2">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <label for="VueTube" class="text-sm">VueTube</label>
          </li>

          <li class="h-8 w-1/2">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <label for="VueTube" class="text-sm">VueTube</label>
          </li>

          <li class="h-8 w-1/2">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <label for="VueTube" class="text-sm">VueTube</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </CollapsibleAccordian>
</template>

<script>
import CollapsibleAccordian from "@/components/shared/collapsibleAccordian.vue";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    CollapsibleAccordian,
  },
};
</script>
