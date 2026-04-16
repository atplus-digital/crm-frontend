import { datasourceConfigs } from "./datasources.config";
import type { ScriptConfig } from "./src/@types/script";
import { parseConfig } from "./src/utils/config";

const nocobaseDatasource = datasourceConfigs.find(
	(datasource) => datasource.datasource === "main",
);
const ixcDatasource = datasourceConfigs.find(
	(datasource) => datasource.datasource === "d_db_ixcsoft",
);

const scriptConfig: Partial<ScriptConfig> = {
	outputDir: nocobaseDatasource?.outputDir ?? "src/generated/nocobase",
	splitCollections: nocobaseDatasource?.splitCollections ?? [],
	ixcCollections: ixcDatasource?.collections ?? [],
	ixcOutputDir: ixcDatasource?.outputDir,
	datasources: datasourceConfigs,
	lockWorkspaceFolder: true,
	baseInterfaceNaming: {
		prefix: "",
		suffix: "",
	},
	generateIxcTypes: false,
	verbose: false,
} as const;

export const config = parseConfig(scriptConfig);
