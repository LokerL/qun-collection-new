import { defineConfig } from "vite";
const { resolve } = require("path");
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    minify: "terser", // 混淆器，terser构建后文件体积更小
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        preProcessor: "less",
      },
    },
  },
  define: { "process.env": {} },
  server: {
    proxy: {
      "/ip": {
        target: "http://pv.sohu.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ip/, ""),
      },
      "/qq": {
        target: "https://r.qzone.qq.com/fcg-bin/cgi_get_portrait.fcg",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/qq/, ""),
      },
    },
  },
});
