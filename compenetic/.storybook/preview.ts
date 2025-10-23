import type { Preview } from '@storybook/react';

import '../src/styles/palette.module.css';
import '../src/styles/brand.module.css';
import '../src/styles/tokens.module.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
