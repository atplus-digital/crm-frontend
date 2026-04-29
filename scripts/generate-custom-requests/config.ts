import { logger } from "@scripts/generate-types/src/utils/logger";
import type { ScriptConfig } from "./src/@types/script-config";
import { parseConfig } from "./src/utils/config";

const splitRequests = [
	"23btjo9ohrr",
	"criarContratoIxc",
	"qualirunInfo",
	"n8nCompras",
];

const scriptConfig: Partial<ScriptConfig> = {
	logLevel: "debug",
	outputDir: "src/generated/custom-requests",
	splitRequests,
	lockWorkspaceFolder: true,
};

export const config = parseConfig(scriptConfig);

logger.setLevel(config.logLevel);
