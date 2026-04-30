import type {
	EnvConfig,
	ScriptConfig,
} from "@scripts/generators/generate-types/src/@types/script";
import {
	createNocoBaseEnvSchema,
	formatZodError,
	loadEnvFiles,
	normalizeBaseUrl,
} from "@scripts/generators/shared/utils/env-config";

export function resolveEnvConfig(scriptConfig: ScriptConfig): EnvConfig {
	const loadedEnvPaths = loadEnvFiles(scriptConfig.defaultEnvPath);

	const parsed = createNocoBaseEnvSchema(
		scriptConfig.requestTimeoutMs,
	).safeParse(process.env);

	if (!parsed.success) {
		throw new Error(
			`Variáveis de ambiente inválidas após carregar ${loadedEnvPaths.join(" e ")}: ${formatZodError(parsed.error)}`,
		);
	}

	return {
		baseUrl: normalizeBaseUrl(parsed.data.CRM_NOCOBASE_URL),
		token: parsed.data.CRM_NOCOBASE_TOKEN,
		timeoutMs: parsed.data.CRM_NOCOBASE_TIMEOUT_MS,
	};
}
