import type { ScriptConfig } from "./src/@types/script";
import { parseConfig } from "./src/utils/config";

const scriptConfig: Partial<ScriptConfig> = {
	outputDir: "src/generated/nocobase",
	splitCollections: ["users", "t_negociacoes", "t_empresas", "t_pessoas"],
	ixcCollections: ["cliente_contrato"],
	ixcOutputDir: "src/generated/ixc",
	lockWorkspaceFolder: true,
	baseInterfaceNaming: {
		prefix: "",
		suffix: "",
	},
	generateIxcTypes: false,
	verbose: false,
} as const;

export const config = parseConfig(scriptConfig);
