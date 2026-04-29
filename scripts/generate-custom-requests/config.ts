import { logger } from "@scripts/shared/utils/logger";
import type { ScriptConfig } from "./src/@types/script-config";
import { parseConfig } from "./src/utils/config";

const splitRequests = ["23btjo9ohrr", "qbk10nf76um", "n8nCompras"];

const scriptConfig: Partial<ScriptConfig> = {
	logLevel: "debug",
	outputDir: "src/generated/custom-requests",
	splitRequests,
	lockWorkspaceFolder: true,
};

export const config = parseConfig(scriptConfig);

logger.setLevel(config.logLevel);
