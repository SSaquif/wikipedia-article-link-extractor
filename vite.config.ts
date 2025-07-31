// vite.config.ts
import { defineConfig } from "vite";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  // need to copy the manifest.json to the dist folder
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "public/manifest.json",
          dest: ".", // copy to the root of the dist folder
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        // Adjust these paths as needed
        content: resolve(__dirname, "src/content.ts"),
        // popup: resolve(__dirname, 'src/popup.html') // optional
      },
      output: {
        entryFileNames: "assets/[name].js",
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
