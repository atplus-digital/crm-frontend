import type { ScriptConfig } from "./src/@types/script";
import { parseConfig } from "./src/utils/config";

const scriptConfig: Partial<ScriptConfig> = {
	outputDir: "src/@types/generated/crm",
	splitCollections: ["users", "t_negociacoes"],
	verbose: false,
	lockWorkspaceFolder: true,
	baseInterfaceNaming: {
		prefix: "",
		suffix: "",
	},
} as const;

export const config = parseConfig(scriptConfig);
