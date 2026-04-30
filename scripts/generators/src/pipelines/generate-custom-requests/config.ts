import type { ScriptConfig } from "./@types/script-config";
import { requestsConfig } from "./requests.config";
import { parseConfig } from "./utils/config";

const scriptConfig: Partial<ScriptConfig> = {
	lockWorkspaceFolder: true,
	generateAnalysisReport: true,
	outputDir: "src/generated/custom-requests",
	...requestsConfig,
};

export const config = parseConfig(scriptConfig);
