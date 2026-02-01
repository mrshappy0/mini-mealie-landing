import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
    plugins: [
        react(),
        sitemap({
            hostname: 'https://mini-mealie.shaplabs.org',
            dynamicRoutes: ['/'],
            // Note: Google ignores changefreq and priority as of 2024, but kept for other search engines
            changefreq: 'monthly',
            priority: 1.0,
        }),
    ],
    base: '/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
