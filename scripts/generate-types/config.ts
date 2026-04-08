import type { ScriptConfig } from "./src/@types/script";
import { parseConfig } from "./src/utils/config";

const scriptConfig: Partial<ScriptConfig> = {
	outputDir: "src/@types/generated",
	splitCollections: ["users"],
	defaultEnvPath: ".env.local",
	requestTimeoutMs: 15_000,
	requestConcurrency: 5,
	lockWorkspaceFolder: true,
	baseInterfaceNaming: {
		prefix: "",
		suffix: "Base",
	},
} as const;

export const config = parseConfig(scriptConfig);
