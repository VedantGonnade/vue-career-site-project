import { createRouter, createWebHashHistory } from "vue-router";
import homeView from "@/views/homeView.vue";
import jobResultsView from "@/views/jobResultsView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: homeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: jobResultsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
