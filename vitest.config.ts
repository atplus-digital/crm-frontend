import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["src/**/*.{test,spec}.{js,ts,tsx}"],
		environment: "jsdom",
		globalSetup: ["./src/_tests/global-setup.ts"],
		setupFiles: ["./src/_tests/mock-env.ts"],
		onConsoleLog() {
			return false;
		},
		coverage: {
			provider: "v8",
			reporter: ["text", "json-summary", "html-spa"],
			include: ["src/**/*.ts"],
			exclude: [
				"src/generated/**",
				"src/_tests/global-setup.ts",
				"src/_tests/mock-env.ts",
			],
		},
	},
	resolve: {
		alias: {
			"#": path.resolve(__dirname, "./src"),
			"@": path.resolve(__dirname, "./src"),
			"@scripts": path.resolve(__dirname, "./scripts"),
		},
	},
});
