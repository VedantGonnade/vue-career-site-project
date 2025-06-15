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
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              @change="selectOrganization"
            />
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
import { ADD_SELECTED_ORGANIZATION, useUserStore } from "@/stores/user";
import { mapState, mapActions } from "pinia";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    CollapsibleAccordian,
  },
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATION]),
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATION]),

    selectOrganization() {
      this.ADD_SELECTED_ORGANIZATION(this.selectedOrganizations);
      this.$router.push({
        name: "JobResults",
      });
    },
  },
};
</script>
