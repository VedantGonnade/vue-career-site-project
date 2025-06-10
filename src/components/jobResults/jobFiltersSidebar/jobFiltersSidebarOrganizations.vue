<template>
  <CollapsibleAccordian header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATION"
            :key="organization"
            class="flex h-8 w-1/2 items-center justify-start p-2"
          >
            <input :id="organization" type="checkbox" class="mr-3" />
            <label :for="organization" class="text-sm">{{
              organization
            }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </CollapsibleAccordian>
</template>

<script>
import CollapsibleAccordian from "@/components/shared/collapsibleAccordian.vue";
import { useJobsStore, UNIQUE_ORGANIZATION } from "@/stores/jobs";
import { mapState } from "pinia";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    CollapsibleAccordian,
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATION]),
  },
};
</script>
