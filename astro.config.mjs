import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://rysthdesign.com",
  integrations: [tailwind(), react(), sitemap()],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
