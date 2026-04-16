import { datasourceConfigs } from "./datasources.config";
import type { ScriptConfig } from "./src/@types/script";
import { parseConfig } from "./src/utils/config";

const nocobaseDatasource = datasourceConfigs.find(
	(datasource) => datasource.datasource === "main",
);

const scriptConfig: Partial<ScriptConfig> = {
	outputDir: nocobaseDatasource?.outputDir ?? "src/generated/nocobase",
	splitCollections: nocobaseDatasource?.splitCollections ?? [],
	datasources: datasourceConfigs,
	lockWorkspaceFolder: true,
	baseInterfaceNaming: {
		prefix: "",
		suffix: "",
	},
	verbose: false,
} as const;

export const config = parseConfig(scriptConfig);
