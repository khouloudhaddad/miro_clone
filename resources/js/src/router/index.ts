import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../pages/auth/LoginPage.vue"),
    },
    {
        path: "/projects",
        name: "projects",
        component: () => import("../pages/admin/ProjectPage.vue"),
    },
    {
        path: "/project-boards",
        name: "project-board",
        component: () => import("../pages/admin/ProjectBoardPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory("/app"),
    routes,
});

export default router;
