import { dataSourceConfigs } from "../../datasources.config";
import type { ScriptConfig } from "./@types/script";
import { enumInferenceConfig } from "./adapters/enum-inference.config";
import { parseConfig } from "./utils/config";

const scriptConfig: Partial<ScriptConfig> = {
	outputDir: "src/generated/types",
	datasources: dataSourceConfigs,

	lockWorkspaceFolder: true,
	maxConcurrency: 3,
	enumInference: enumInferenceConfig,
	cacheEnums: true,
	cacheDir: ".cache/ixc-wiki",
	validateTypes: true,
} as const;

export const config = parseConfig(scriptConfig);
