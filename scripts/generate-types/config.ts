import type {
	EnvConfig,
	RuntimeConfig,
	ScriptConfig,
} from "./src/@types/script";
import { parseArgs } from "./src/cli/args";
import { resolveEnvConfig } from "./src/utils/load-config";

const scriptConfig: ScriptConfig = {
	outputPath: "src/@types/generated/index.ts",
	splitOutputDir: "src/@types/generated",
	splitCollections: [
		"users",
		"f_funcionarios",
		"t_negociacoes",
		"t_pessoas",
		"t_empresas",
		"t_contratos",
		"t_servicos",
		"t_sites",
		"t_equipamentos",
		"t_telecom_recursos",
	],
	defaultEnvPath: ".env.local",
	requestTimeoutMs: 15_000,
	requestConcurrency: 5,
};

const parsedArgs = parseArgs(process.argv.slice(2));

let cachedEnvConfig: EnvConfig | undefined;

function getEnvConfig(): EnvConfig {
	if (!cachedEnvConfig) {
		cachedEnvConfig = resolveEnvConfig(scriptConfig);
	}

	return cachedEnvConfig;
}

export const config: RuntimeConfig = {
	...scriptConfig,
	...parsedArgs.options,
	script: scriptConfig,
	args: parsedArgs.options,
	parsedArgs,
	get env() {
		return getEnvConfig();
	},
	get showHelp() {
		return parsedArgs.showHelp;
	},
	get dryRun() {
		return parsedArgs.options.dryRun;
	},
	get baseUrl() {
		return getEnvConfig().baseUrl;
	},
	get token() {
		return getEnvConfig().token;
	},
	get timeoutMs() {
		return getEnvConfig().timeoutMs;
	},
};
