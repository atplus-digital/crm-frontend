export default {
	"*": "pnpm run biome:fix --no-errors-on-unmatched",
	"*.{md,mdx}": "pnpm run format:md",
	"*.{js,ts,jsx, tsx}": [
		// () => "pnpm run knip:silent",
		() => "pnpm run typecheck",
	],
};
