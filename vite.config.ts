import vercel from "vite-plugin-vercel";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import { prerender } from "react-dom/static";

export default defineConfig({
  plugins: [
    vike({
      prerender: false,
    }),
    react({}),
    tailwindcss(),
    vercel({
      source: "/.*",
    }),
  ],
  build: {
    target: "es2022",
  },

  vercel: {
    additionalEndpoints: [
      {
        // entry file to the server. Default export must be a node server or a function
        source: "express-entry.ts",
        // replaces default Vike target
        destination: "ssr_",
        // already added by default Vike route
        route: false,
      },
    ],
  },
});
