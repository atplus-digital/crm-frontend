import type {
	EnvConfig,
	ScriptConfig,
} from "@scripts/generators/src/pipelines/generate-types/@types/script";
import {
	normalizeBaseUrl,
	resolveNocoBaseEnv,
} from "@scripts/generators/src/utils/env-config";

export function resolveEnvConfig(scriptConfig: ScriptConfig): EnvConfig {
	const parsed = resolveNocoBaseEnv({
		defaultEnvPath: scriptConfig.defaultEnvPath,
		defaultTimeoutMs: scriptConfig.requestTimeoutMs,
	});

	return {
		baseUrl: normalizeBaseUrl(parsed.baseUrl),
		token: parsed.token,
		timeoutMs: parsed.timeoutMs,
	};
}
