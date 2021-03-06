import { ViteSSG } from "vite-ssg";
import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";
import App from "./App.vue";
import "virtual:windi.css";
import "virtual:windi-devtools";
import "./styles/main.css";
import { createApp } from "vue";

import FontAwesomeIcon from "./config/icons";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";

const routes = setupLayouts(generatedRoutes);

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes,
    //base: 'dist',
  },
  (ctx) => {
    // install all modules under `modules/`
    ctx.app.component("vue-fontawesome", FontAwesomeIcon);

    ctx.app.use(createPinia());
    ctx.app.use(vuetify);
    Object.values(import.meta.globEager("./modules/*.ts")).map((i) =>
      i.install?.(ctx)
    );
  }
);
