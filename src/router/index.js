import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/homeView.vue";
import JobResultsView from "@/views/jobResultsView.vue";
import JobView from "@/views/jobView.vue";
import TeamsView from "@/views/teamsView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:jobId",
    name: "JobListing",
    component: JobView,
  },
  {
    path: "/teams",
    name: "Teams",
    component: TeamsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
