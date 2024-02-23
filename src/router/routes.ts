import Home from "@/views/Home.vue";
import Error from "@/views/Error.vue";
import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";
import GuestLayout from "@/layouts/GuestLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";

export const routes = [
  {
    path: "/",
    component: GuestLayout,
    children: [
      {
        path: "/",
        component: Home,
        meta: {
          title: "Home",
        },
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
        meta: {
          title: "Dashboard",
          isAuthenticated: false,
          permissions: ["view home page"],
          roles: ["admin"],
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    meta: { title: "Error" },
    component: Error,
  },
  {
    path: "/login",
    name: "Login",
    meta: { title: "Login" },
    component: Login,
  },
];
