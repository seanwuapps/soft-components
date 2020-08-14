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
      type: "docs-readme",
      dir: "docs/src/docs/",
      strict: true,
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
  globalStyle: "src/global/app.css",
  plugins: [
    sass({
      injectGlobalPaths: ["src/global/mixins.scss"],
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
