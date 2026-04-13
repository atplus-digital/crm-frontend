export default {
	"*.{js,ts,tsx,jsx,json,css,html,md}":
		"pnpm exec biome check --write --no-errors-on-unmatched",
	"*": () => "pnpm knip:silent",
};
