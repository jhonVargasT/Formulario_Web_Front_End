export default {
  name: "form",
  component: () =>
    import(/* webpackChunkName: "Auth Layout" */ "../layouts/MainLayout.vue"),

  children: [
    {
      path: "",
      name: "index",
      component: () =>
        import(/* webpackChunkName: "Auth Layout" */ "../views/IndexPage.vue"),
    },
  ],
};
