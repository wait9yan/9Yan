/*!
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-14 17:48:31
 * @FilePath     : \9Yan\vite.config.js
 * @Description  :
 */
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    server: {
        host: '0.0.0.0',
        port: 9120,
    },
    plugins: [
        vue(),
        VueDevTools(),
        createSvgIconsPlugin({
            // eslint-disable-next-line no-undef
            iconDirs: [path.resolve(process.cwd(), './src/icons')],
            symbolId: 'icon-[dir]-[name]',
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
