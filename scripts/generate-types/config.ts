import { dataSourceConfigs } from "./datasources.config";
import type { ScriptConfig } from "./src/@types/script";
import { parseConfig } from "./src/utils/config";
import { logger } from "./src/utils/logger";

const scriptConfig: Partial<ScriptConfig> = {
	datasources: dataSourceConfigs,
	lockWorkspaceFolder: true,
	logLevel: "info",
	maxConcurrency: 3,
} as const;

export const config = parseConfig(scriptConfig);

// Configurar nível de log após parse da configuração
logger.setLevel(config.logLevel);
