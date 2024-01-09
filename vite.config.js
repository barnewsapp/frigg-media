import { createHtmlPlugin } from 'vite-plugin-html';

export default {
  base: '/frigg-media',
  server: {
    port: 8080,
  },
  plugins: [createHtmlPlugin()],
};
