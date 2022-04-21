import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Movies",
    component: () => import("../views/MovieList.vue"),
  },
  {
    path: "/movie/:id",
    name: "MovieDetails",
    component: () => import("../views/MovieDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
