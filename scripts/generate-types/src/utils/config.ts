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

	if (!mergedConfig.datasources || mergedConfig.datasources.length === 0) {
		errors.push("datasources deve conter ao menos um datasource configurado");
	}

	for (const datasource of mergedConfig.datasources ?? []) {
		if (datasource.name.trim() === "") {
			errors.push("datasource.name não pode ser vazio");
		}

		if (datasource.datasource.trim() === "") {
			errors.push(
				`datasource '${datasource.name}' deve definir a chave do datasource`,
			);
		}

		if (datasource.outputDir.trim() === "") {
			errors.push(
				`datasource '${datasource.name}' deve definir outputDir não vazio`,
			);
		}

		if (
			datasource.datasource !== "main" &&
			(!datasource.collections || datasource.collections.length === 0)
		) {
			errors.push(
				`datasource '${datasource.name}' (${datasource.datasource}) deve definir collections explicitamente`,
			);
		}
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
	const selectedDatasources = [...new Set(parsedArgs.options.datasources)];
	if (selectedDatasources.length > 0) {
		const availableDatasources = new Set(
			(mergedConfig.datasources ?? []).flatMap((datasource) => [
				datasource.name,
				datasource.datasource,
			]),
		);

		const unknownDatasources = selectedDatasources.filter(
			(datasourceName) => !availableDatasources.has(datasourceName),
		);

		if (unknownDatasources.length > 0) {
			throw new Error(
				`Datasource(s) desconhecido(s): ${unknownDatasources.join(", ")}`,
			);
		}
	}

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
		selectedDatasources,
		...getEnvConfig(),
	};

	return config;
}
