export default {
	"*": "pnpm run biome:fix --no-errors-on-unmatched",
	"*.{md,mdx}": async (files) => {
		const escapedFiles = files.map((file) => `"${file}"`).join(" ");
		return `pnpm dlx prettier --write --log-level=warn --cache --ignore-unknown ${escapedFiles}`;
	},
	"*.{ts,tsx}": async () => {
		return "node --disable-warning=ExperimentalWarning --experimental-strip-types scripts/code-check/typecheck-staged.ts";
	},
};
