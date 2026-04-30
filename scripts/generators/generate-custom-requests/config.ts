import { requestsConfig } from "./requests.config";
import type { ScriptConfig } from "./src/@types/script-config";
import { parseConfig } from "./src/utils/config";

const scriptConfig: Partial<ScriptConfig> = {
	lockWorkspaceFolder: true,
	generateAnalysisReport: true,
	outputDir: "src/generated/custom-requests",
	...requestsConfig,
};

export const config = parseConfig(scriptConfig);
