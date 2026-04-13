export default {
	"*": "pnpm run typecheck",
	"*.{js,ts,tsx,jsx,json,css,html,md, mdx}":
		"pnpm exec biome check --write --no-errors-on-unmatched",
	"*": () => "pnpm knip:silent",
};
