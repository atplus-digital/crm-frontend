import type { ScriptConfig } from "./src/@types/script";
import { parseConfig } from "./src/utils/config";

const scriptConfig: Partial<ScriptConfig> = {
	outputDir: "src/generated/nocobase",
	splitCollections: ["users", "t_negociacoes", "t_empresas", "t_pessoas"],
	verbose: false,
	lockWorkspaceFolder: true,
	baseInterfaceNaming: {
		prefix: "",
		suffix: "",
	},
} as const;

export const config = parseConfig(scriptConfig);
