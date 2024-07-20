/// <reference types="vitest" />
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";
import * as fs from "node:fs";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: './setupTest.ts',
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, ',src')
        }
    }
});
