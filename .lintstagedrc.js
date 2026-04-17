export default {
	"*": "pnpm run biome:fix --no-errors-on-unmatched",
	"*.{md,mdx}": "pnpm run format:md",
	"*.{ts,tsx}": [() => "pnpm tsx scripts/code-check/typecheck-staged.ts"],
};
