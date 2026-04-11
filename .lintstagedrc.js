export default {
	"*.{js,ts,tsx,jsx,json,css,html,md}": "biome check --write --no-errors-on-unmatched",
	"*.{ts,tsx}": () => "knip --no-progress",
};