import {
	createNocoBaseEnvSchema,
	formatZodError,
	loadEnvFiles,
} from "@scripts/shared/utils/env-config";
import type { ScriptConfig } from "../@types/script-config";

export function parseConfig(
	overrideConfig: Partial<ScriptConfig> = {},
): ScriptConfig {
	const envPaths = loadEnvFiles(".env.local");
	const envSchema = createNocoBaseEnvSchema(15_000);
	const parsed = envSchema.safeParse(process.env);

	if (!parsed.success) {
		throw new Error(
			`Variáveis de ambiente inválidas após carregar ${envPaths.join(" e ")}: ${formatZodError(parsed.error)}`,
		);
	}

	return {
		baseUrl: parsed.data.CRM_NOCOBASE_URL,
		token: parsed.data.CRM_NOCOBASE_TOKEN,
		timeoutMs: parsed.data.CRM_NOCOBASE_TIMEOUT_MS,
		logLevel: "info",
		outputDir: "src/generated/custom-requests",
		splitRequests: {},
		manualRequests: [],
		generateAnalysisReport: true,
		lockWorkspaceFolder: true,
		...overrideConfig,
	};
}
