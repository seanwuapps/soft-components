import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem';
import builtins from 'rollup-plugin-node-builtins';
import nodePolyfills from 'rollup-plugin-node-polyfills';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
  ],
  plugins: [
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
    ],
    after: [nodePolyfills()],
  },
};
