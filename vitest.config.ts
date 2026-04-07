import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}", "scripts/**/*.{test,spec}.{js,ts}"],
		environment: "node",
		setupFiles: ["./scripts/generate-types/test/setup.ts"],
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
		},
	},
});
