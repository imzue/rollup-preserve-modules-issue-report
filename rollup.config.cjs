import { defineConfig } from "rollup";

export default defineConfig({
  input: ["src/index.js"],
  output: [
    {
      format: "esm",
      dir: "es",
      entryFileNames: "[name].js",
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    {
      format: "cjs",
      dir: "lib",
      entryFileNames: "[name].js",
      preserveModules: true,
      preserveModulesRoot: "src",
    },
  ],
});
