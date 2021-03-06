import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';
import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem';
import builtins from 'rollup-plugin-node-builtins';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { nodeResolve } from '@rollup/plugin-node-resolve';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://soft.components.rocks/',
      prerenderConfig: './prerender.config.ts',
      copy: [
        {
          src: 'site-content',
        },
      ],
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/app/variables.scss', 'src/global/app/mixins.scss'],
    }),
    postcss({
      plugins: [
        autoprefixer(),
        pxtorem({
          propList: ['*'],
          selectorBlackList: [':root', 'html', '.container', 'h2'],
          replace: false,
        }),
      ],
    }),
  ],
  rollupPlugins: {
    before: [
      builtins({
        preferBuiltins: false,
      }),
      nodeResolve(),
    ],
    after: [nodePolyfills()],
  },
};
