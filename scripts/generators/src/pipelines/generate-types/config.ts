import type { ScriptConfig } from "./@types/script";
import { dataSourceConfigs } from "./datasources.config";
import { enumInferenceConfig } from "./enum-inference.config";
import { parseConfig } from "./utils/config";

const scriptConfig: Partial<ScriptConfig> = {
	outputDir: "src/generated/types",
	datasources: dataSourceConfigs,
	lockWorkspaceFolder: true,
	maxConcurrency: 3,
	// dryRun é controlado pelo argv + overrideConfig — não defina aqui
	// requestConcurrency foi removido (nunca utilizado pelo cliente HTTP)

	// Configuração global de inferência de enums (ver enum-inference.config.ts)
	enumInference: enumInferenceConfig,

	// Cache de enums
	cacheEnums: true,
	cacheDir: ".cache/ixc-wiki",
	cacheTtlMs: 86400000, // 24 horas

	validateTypes: true,
} as const;

export const config = parseConfig(scriptConfig);
