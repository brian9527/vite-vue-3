// cSpell:disable
import { defineConfig } from 'vite';
import { resolve } from 'path';
import pluginVue from '@vitejs/plugin-vue';
import pluginPages from 'vite-plugin-pages';
import pluginLayouts from 'vite-plugin-vue-layouts';
import pluginComponents, { ComponentResolver } from 'vite-plugin-components';
import pluginWindicss from 'vite-plugin-windicss';
import pluginIcons, { ViteIconsResolver } from 'vite-plugin-icons';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    pluginVue(),
    pluginPages(),
    pluginLayouts(),
    pluginComponents({
      extensions: ['ts'],
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: 'iconify'
        })
      ]
    }),
    pluginWindicss(),
    pluginIcons()
  ],
  server: {
    port: 8080
  }
});
