import type { RuntimeConfig, ScriptConfig } from "../@types/script";
import { parseArgs } from "../cli/args";
import { resolveEnvConfig } from "./load-config";

const defaultConfig: ScriptConfig = {
	outputDir: "./generated",
	splitCollections: [],
	verbose: false,
	defaultEnvPath: ".env.local",
	requestTimeoutMs: 15_000,
	requestConcurrency: 5,
	lockWorkspaceFolder: true,
	baseInterfaceNaming: {
		prefix: "",
		suffix: "Base",
	},
} as const;

export function parseConfig(
	scriptConfig: Partial<ScriptConfig>,
): RuntimeConfig {
	const mergedConfig = {
		...defaultConfig,
		...scriptConfig,
	};
	const parsedArgs = parseArgs(process.argv.slice(2));

	let cachedEnvConfig: Awaited<ReturnType<typeof resolveEnvConfig>> | undefined;

	function getEnvConfig() {
		if (!cachedEnvConfig) {
			cachedEnvConfig = resolveEnvConfig(mergedConfig);
		}

		return cachedEnvConfig;
	}

	const config: RuntimeConfig = {
		...mergedConfig,
		dryRun: parsedArgs.options.dryRun,
		write: parsedArgs.options.write,
		showHelp: parsedArgs.showHelp,
		lockWorkspace: Boolean(
			parsedArgs.options.lockWorkspace || mergedConfig.lockWorkspaceFolder,
		),
		...getEnvConfig(),
	};

	return config;
}
