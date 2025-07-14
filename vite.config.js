import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/musicgram-frontend/',

    server: {
        port: 3000,
        host: true,
        open: true,
        allowedHosts: ['.ngrok-free.app'],
    },

    preview: {
        port: 3000,
        host: true
    },

    build: {
        outDir: 'dist',
        sourcemap: false,
        minify: 'terser',

        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],
                    router: ['react-router-dom'],
                    animations: ['framer-motion'],
                    icons: ['lucide-react']
                },

                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
            }
        },

        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
            }
        },

        chunkSizeWarningLimit: 1000
    },

    optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react']
    },

    css: {
        devSourcemap: true,
        modules: {
            localsConvention: 'camelCase'
        }
    },

    define: {
        __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
        __BUILD_DATE__: JSON.stringify(new Date().toISOString())
    },

    resolve: {
        alias: {
            '@': '/src',
            '@components': '/src/components',
            '@styles': '/src/styles',
            '@utils': '/src/utils'
        }
    }
})
