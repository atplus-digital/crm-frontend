import type { RuntimeConfig } from "./src/@types/script";
import { parseArgs } from "./src/cli/args";
import { resolveEnvConfig } from "./src/utils/load-config";

const scriptConfig = {
	outputPath: "src/@types/generated/index.ts",
	splitOutputDir: "src/@types/generated",
	splitCollections: ["users"] as string[],
	defaultEnvPath: ".env.local",
	requestTimeoutMs: 15_000,
	requestConcurrency: 5,
	lockWorkspaceFolder: true,
};

const parsedArgs = parseArgs(process.argv.slice(2));

let cachedEnvConfig: Awaited<ReturnType<typeof resolveEnvConfig>> | undefined;

function getEnvConfig() {
	if (!cachedEnvConfig) {
		cachedEnvConfig = resolveEnvConfig(scriptConfig);
	}

	return cachedEnvConfig;
}

export const config: RuntimeConfig = {
	...scriptConfig,
	dryRun: parsedArgs.options.dryRun,
	showHelp: parsedArgs.showHelp,
	lockWorkspace: Boolean(
		parsedArgs.options.lockWorkspace || scriptConfig.lockWorkspaceFolder,
	),
	...getEnvConfig(),
};
