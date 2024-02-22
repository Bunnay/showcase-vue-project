import Home from "@/views/Home.vue";
import Error from "@/views/Error.vue";
import Dashboard from "@/views/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";
import GuestLayout from "@/layouts/GuestLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";

const routes = [
  {
    path: "/",
    component: GuestLayout,
    children: [
      {
        path: "/",
        component: Home,
        meta: { title: "Home" },
      },
    ],
  },
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        component: Dashboard,
        meta: { title: "Dashboard" },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    meta: { title: "Error" },
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Showcase Store`;
  next();
});

export default router;
