import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { analyzer } from "vite-bundle-analyzer";

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");

export default defineConfig({
	plugins: [
		tailwindcss(),
		viteReact(),
		analyzer({
			analyzerMode: "static",
		}),
	],
	resolve: {
		tsconfigPaths: true,
	},
	server: {
		allowedHosts: [env.VITE_APP_URL],
	},
});
