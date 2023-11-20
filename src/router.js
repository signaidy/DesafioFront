import { createRouter, createWebHistory } from "vue-router";
import AllCards from "./components/Cards.vue";
import UserProfile from "./components/UserProfile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: AllCards,
  },
  {
    path: "/perfil/:id",
    name: "UserProfile",
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
