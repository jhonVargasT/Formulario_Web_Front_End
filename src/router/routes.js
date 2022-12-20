import { createRouter, createWebHashHistory } from "vue-router";

import authRouter from "../modules/auth/router";
import formRouter from "../modules/form/router";

const routes = [
  ,
  //Configuracion de pantalla inicial del router
  {
    path: "/auth",
    ...authRouter,
  },
  {
    path: "/form",
    ...formRouter,
  },
  {
    path: "/main",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
