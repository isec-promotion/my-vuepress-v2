import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  lang: "ja-JP",

  locales: {
    "/": {
      lang: "ja-JP",
      title: "オンライン取説",
      description: "A docs demo for vuepress-theme-hope",
    },
  },

  theme,

  shouldPrefetch: false,
  plugins: [
    registerComponentsPlugin({
      // options
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
});
