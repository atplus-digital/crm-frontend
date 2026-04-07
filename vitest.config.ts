import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}", "scripts/**/*.{test,spec}.{js,ts}"],
		environment: "node",
	},
	 resolve: {
		alias: {
			"@scripts": path.resolve(__dirname, "./scripts"),
		},
	},
});
