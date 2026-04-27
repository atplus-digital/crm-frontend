import { logger } from "@scripts/generate-types/src/utils/logger";
import type { ScriptConfig } from "./src/@types/script-config";
import { parseCliArgs, parseConfig } from "./src/utils/config";

// Processa argumentos CLI antes de qualquer outra coisa (inclui --help)
const cliArgs = parseCliArgs();

const defaultSplitRequests = ["criarContratoIxc", "qualirunInfo", "n8nCompras"];

// CLI args sobrescrevem defaults, mas não substituem — acumulam
const mergedSplitRequests =
	cliArgs.splitRequests.length > 0
		? [...new Set([...defaultSplitRequests, ...cliArgs.splitRequests])]
		: defaultSplitRequests;

const scriptConfig: Partial<ScriptConfig> = {
	logLevel: "debug",
	outputDir: "src/features/custom-requests",
	splitRequests: mergedSplitRequests,
};

export const config = parseConfig(scriptConfig);

logger.setLevel(config.logLevel);
