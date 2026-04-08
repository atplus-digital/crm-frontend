import type { ScriptConfig } from "./src/@types/script";
import { parseConfig } from "./src/utils/config";

const scriptConfig: Partial<ScriptConfig> = {
	outputDir: "src/@types/generated/crm",
	splitCollections: ["users"],
	lockWorkspaceFolder: true,
	baseInterfaceNaming: {
		prefix: "",
		suffix: "Base",
	},
} as const;

export const config = parseConfig(scriptConfig);
