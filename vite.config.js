import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Get the current working directory
const currentWorkingDirectory = new URL(".", import.meta.url).pathname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },

  resolve: {
    alias: {
      "@": `${currentWorkingDirectory}/src`, // Set the base directory for the project
      "@api": `${currentWorkingDirectory}/src/api`,
      "@provider": `${currentWorkingDirectory}/src/provider`,
      "@context": `${currentWorkingDirectory}/src/context`,
      "@utils": `${currentWorkingDirectory}/src/utils`,
      "@hooks": `${currentWorkingDirectory}/src/hooks`,
      "@auth": `${currentWorkingDirectory}/src/components/auth`,
      "@common": `${currentWorkingDirectory}/src/components/common`,
      "@features": `${currentWorkingDirectory}/src/components/features`,
      "@pages": `${currentWorkingDirectory}/src/pages`,
    },
    // Extension to provide suggestions for paths
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
});
