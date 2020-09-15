import { PrerenderConfig } from '@stencil/core/internal';
import docsData from './docs-data';

const softComponents = docsData.components.map(component => component.tag);

export const config: PrerenderConfig = {
  hydrateOptions(url) {
    return {
      excludeComponents: [...softComponents, 'linkable-title', 'codpen-link'],
    };
  },
};
