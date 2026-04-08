import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}", "scripts/**/*.{test,spec}.{js,ts}"],
		environment: "node",
		globalSetup: ["./src/_tests/global-setup.ts"],
		setupFiles: ["./src/_tests/mock-env.ts"],
		coverage: {
			provider: "v8",
			reporter: ["text", "json-summary", "html-spa"],
			include: ["src/**/*.ts", "scripts/**/*.ts"],
			exclude: [
				"src/@types/generated/**",
				"src/routeTree.gen.ts",
				"scripts/generate-types/config.ts",
				"scripts/generate-types/src/@types/**",
			],
		},
	},
	resolve: {
		alias: {
			"@scripts": path.resolve(__dirname, "./scripts"),
			"@": path.resolve(__dirname, "./src"),
			"#": path.resolve(__dirname, "./src"),
		},
	},
});
