export default {
  name: "auth",
  component: () =>
    import(/* webpackChunkName: "Auth Layout" */ "../layouts/MainLayout.vue"),

  children: [
    {
      path: "/",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "Auth Layout" */ "../views/LoginUser.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(
          /* webpackChunkName: "Auth Layout" */ "../views/RegisterUser.vue"
        ),
    },
  ],
};
