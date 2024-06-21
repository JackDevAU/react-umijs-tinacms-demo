import { defineConfig } from "umi";


export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: 'posts', component: '@/pages/posts' },
    { path: 'posts/:filename', component: '@/pages/posts/$filename' },
    
  ],
  proxy: {
    "/admin": {
      target: "/admin/index.html",
      changeOrigin: false,
    },
  }, 
  npmClient: "pnpm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
  clientLoader: {}
});
