import {
	defineDataSource,
	type RuntimeConfig,
	type ScriptConfig,
} from "../@types/script";
import { resolveEnvConfig } from "./load-config";

const defaultConfig: ScriptConfig = {
	outputDir: "./generated",
	splitCollections: [],
	datasources: [
		{
			name: "nocobase",
			dataSource: "main",
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
		suffix: "",
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

	for (const dataSource of mergedConfig.datasources ?? []) {
		if (dataSource.name.trim() === "") {
			errors.push("dataSource.name não pode ser vazio");
		}

		if (dataSource.dataSource.trim() === "") {
			errors.push(
				`dataSource '${dataSource.name}' deve definir a chave do dataSource`,
			);
		}

		if (dataSource.outputDir.trim() === "") {
			errors.push(
				`dataSource '${dataSource.name}' deve definir outputDir não vazio`,
			);
		}

		if (
			dataSource.dataSource !== "main" &&
			(!dataSource.collections || dataSource.collections.length === 0)
		) {
			errors.push(
				`dataSource '${dataSource.name}' (${dataSource.dataSource}) deve definir collections explicitamente`,
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

	const normalizedConfig = {
		...mergedConfig,
		datasources: mergedConfig.datasources?.map((datasource) =>
			defineDataSource(datasource),
		),
	};

	validateMergedConfig(normalizedConfig);

	const envConfig = resolveEnvConfig(normalizedConfig);

	const config: RuntimeConfig = {
		...normalizedConfig,
		...envConfig,
	};

	return config;
}
