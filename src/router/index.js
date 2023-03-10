import { createRouter, createWebHistory } from "vue-router";
import ToDoList from "../views/ToDoList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ToDoList,
    },
  ],
});

export default router;
