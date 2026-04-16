import type { RuntimeConfig, ScriptConfig } from "../@types/script";
import { parseArgs } from "../cli/args";
import { resolveEnvConfig } from "./load-config";

const defaultConfig: ScriptConfig = {
	outputDir: "./generated",
	splitCollections: [],
	datasources: [
		{
			name: "nocobase",
			datasource: "main",
			outputDir: "./generated",
			splitCollections: [],
		},
	],
	verbose: false,
	defaultEnvPath: ".env.local",
	requestTimeoutMs: 15_000,
	requestConcurrency: 5,
	lockWorkspaceFolder: true,
	baseInterfaceNaming: {
		prefix: "",
		suffix: "Base",
	},
	ixcOutputDir: "src/@types/generated/ixc",
} as const;

/**
 * Valida valores críticos da configuração após o merge.
 * Lança erro para valores inválidos que quebrariam a execução.
 */
function validateMergedConfig(mergedConfig: Partial<ScriptConfig>): void {
	const errors: string[] = [];

	// Validar timeout de requisição (deve ser positivo)
	if (
		mergedConfig.requestTimeoutMs !== undefined &&
		mergedConfig.requestTimeoutMs <= 0
	) {
		errors.push(
			`requestTimeoutMs deve ser > 0, recebido: ${mergedConfig.requestTimeoutMs}`,
		);
	}

	// Validar concorrência (deve ser >= 1)
	if (
		mergedConfig.requestConcurrency !== undefined &&
		mergedConfig.requestConcurrency < 1
	) {
		errors.push(
			`requestConcurrency deve ser >= 1, recebido: ${mergedConfig.requestConcurrency}`,
		);
	}

	// Validar outputDir (não pode ser vazio)
	if (
		mergedConfig.outputDir !== undefined &&
		mergedConfig.outputDir.trim() === ""
	) {
		errors.push("outputDir não pode ser vazio");
	}

	// Validar ixcOutputDir se fornecido
	if (
		mergedConfig.ixcOutputDir !== undefined &&
		mergedConfig.ixcOutputDir.trim() === ""
	) {
		errors.push("ixcOutputDir não pode ser vazio");
	}

	if (errors.length > 0) {
		throw new Error(
			`Configuração inválida:\n${errors.map((e) => `  - ${e}`).join("\n")}`,
		);
	}
}

export function parseConfig(
	scriptConfig: Partial<ScriptConfig>,
): RuntimeConfig {
	const mergedConfig = {
		...defaultConfig,
		...scriptConfig,
	};

	validateMergedConfig(mergedConfig);

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
		write: parsedArgs.options.write,
		showHelp: parsedArgs.showHelp,
		lockWorkspace: Boolean(
			parsedArgs.options.lockWorkspace || mergedConfig.lockWorkspaceFolder,
		),
		ixc: Boolean(parsedArgs.options.ixc),
		...getEnvConfig(),
	};

	return config;
}
