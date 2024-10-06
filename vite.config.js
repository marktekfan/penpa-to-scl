import dts from "vite-plugin-dts";
import path from "path";
import { defineConfig } from "vite";
export default defineConfig({
    base: "./",
    plugins: [dts({ rollupTypes: true })],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "mylib",
            formats: ["es", "cjs", "umd", "iife"],
            fileName: function (format) { return "index.".concat(format, ".js"); },
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {},
            },
        },
    },
});
