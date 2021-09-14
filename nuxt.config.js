export default {
  target: "static",
  server: {
    host: "0.0.0.0",
  },
  head: {
    title: "code4okinawa-org-nuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: [],
  plugins: [
    //
    "~/plugins/wpapi.ts",
  ],
  components: true,
  buildModules: [
    //
    "@nuxt/typescript-build",
  ],
  modules: [],
  build: {},
};
