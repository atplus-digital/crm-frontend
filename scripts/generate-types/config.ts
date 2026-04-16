import { datasourceConfigs } from "./datasources.config";
import type { ScriptConfig } from "./src/@types/script";
import { parseConfig } from "./src/utils/config";

const scriptConfig: Partial<ScriptConfig> = {
	datasources: datasourceConfigs,
	lockWorkspaceFolder: true,
	verbose: false,
} as const;

export const config = parseConfig(scriptConfig);
