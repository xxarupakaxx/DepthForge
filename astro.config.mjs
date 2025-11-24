// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://depthforge.pages.dev', // Cloudflare Pages のデフォルトドメイン（後で変更可能）
  vite: {
    plugins: [tailwindcss()]
  }
});