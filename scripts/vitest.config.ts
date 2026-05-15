import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	root: path.resolve(__dirname),
	test: {
		include: ["**/*.{test,spec}.{js,ts}"],
		environment: "node",
		passWithNoTests: true,
		onConsoleLog() {
			return false;
		},
		coverage: {
			provider: "v8",
			reporter: ["text", "json-summary", "html-spa"],
			include: ["**/*.ts"],
			exclude: ["**/*.d.ts"],
		},
	},
	resolve: {
		alias: {
			"@scripts": path.resolve(__dirname, "./"),
			"@generators": path.resolve(__dirname, "./generators/src/"),
			"@shared": path.resolve(__dirname, "./shared/"),
		},
	},
});
