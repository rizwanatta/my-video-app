import { createRouter, createWebHistory } from "vue-router";
import UserPage from "@/components/UserPage.vue";
import CreateVideoPage from "@/components/CreateVideoPage.vue"; // Adjust the path as needed

const routes = [
  {
    path: "/",
    name: "UserPage",
    component: UserPage,
  },
  {
    path: "/create-video",
    name: "CreateVideoPage",
    component: CreateVideoPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
