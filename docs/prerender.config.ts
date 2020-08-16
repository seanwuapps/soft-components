import { PrerenderConfig } from '@stencil/core/internal';

export const config: PrerenderConfig = {
  hydrateOptions(url) {
    return {
      excludeComponents: ['sc-button', 'sc-card', 'sc-input', 'sc-tab-button', 'sc-tab-content', 'sc-tabs', 'sc-toggle', 'box-icon'],
    };
  },
};
