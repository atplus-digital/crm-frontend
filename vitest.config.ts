import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: [
			"src/**/*.{test,spec}.{js,ts,tsx}",
			"scripts/**/*.{test,spec}.{js,ts}",
		],
		environment: "jsdom",
		globalSetup: ["./src/_tests/global-setup.ts"],
		setupFiles: [
			"./src/_tests/mock-env.ts",
			"./scripts/generate-types/test/setup.ts",
		],
		coverage: {
			provider: "v8",
			reporter: ["text", "json-summary", "html-spa"],
			include: ["src/**/*.ts", "scripts/**/*.ts"],
			exclude: [
				"src/generated/**",
				"scripts/generate-types/config.ts",
				"scripts/generate-types/src/@types/**",
				"src/_tests/global-setup.ts",
				"src/_tests/mock-env.ts",
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
