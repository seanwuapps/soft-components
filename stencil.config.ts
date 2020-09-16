import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";
import pxtorem from "postcss-pxtorem";

export const config: Config = {
  namespace: "soft-components",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
    { type: "docs-json", file: "docs/docs-data.json" },
  ],
  globalStyle: "src/global/app.scss",
  plugins: [
    sass({
      injectGlobalPaths: ["src/global/scss/mixins.scss"],
    }),
    postcss({
      plugins: [
        autoprefixer(),
        pxtorem({
          propList: ["*"],
          selectorBlackList: [":root", "html", "body"],
          replace: false,
        }),
      ],
    }),
  ],
};
