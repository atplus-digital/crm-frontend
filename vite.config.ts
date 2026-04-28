import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { analyzer } from "vite-bundle-analyzer";

export default defineConfig({
	plugins: [tailwindcss(), viteReact(), analyzer()],
	resolve: {
		tsconfigPaths: true,
	},
	server: {
		allowedHosts: ["crm.gugacarbo.space"],
	},
});
