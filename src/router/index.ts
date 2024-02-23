import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import AuthMiddleware from "@/middleware/authMiddleware";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Showcase Store`;

  // Handle router using middleware
  if (
    AuthMiddleware.routerHandler(
      to.meta.isAuthenticated as boolean,
      (to.meta.permissions as string[]) || [],
      (to.meta.roles as string[]) || []
    )
  ) {
    next();
  } else {
    if (to.name !== "Login") {
      next({ path: "/login", query: { redirect: to.fullPath } });
    }
  }
});

export default router;
