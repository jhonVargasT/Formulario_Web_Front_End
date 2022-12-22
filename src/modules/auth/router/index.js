export default {
  name: "auth",
  component: () =>
    import(/* webpackChunkName: "Auth Layout" */ "../layouts/MainLayout.vue"),

  children: [
    {
      path: "/login/:id",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "Auth Layout" */ "../views/LoginUser.vue"),
    },
    {
      path: "/registers",
      name: "register",
      component: () =>
        import(
          /* webpackChunkName: "Auth Layout" */ "../views/RegisterUser.vue"
        ),
    },
  ],
};
