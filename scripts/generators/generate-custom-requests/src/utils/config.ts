import {
	createNocoBaseEnvSchema,
	formatZodError,
	loadEnvFiles,
	resolveLogLevel,
} from "@scripts/generators/shared/utils/env-config";
import type {
	ManualRegistryEntry,
	RequestsMap,
	ScriptConfig,
} from "../@types/script-config";

const SPLIT_REQUEST_NAME_REGEX = /^[a-z][a-z-]*$/;

function validateRequests(requests: RequestsMap): RequestsMap {
	for (const [id, name] of Object.entries(requests)) {
		if (!SPLIT_REQUEST_NAME_REGEX.test(name)) {
			throw new Error(
				`Nome de split request inválido "${name}" (id: ${id}). ` +
					`Deve começar com letra minúscula e conter apenas letras minúsculas e hífens. ` +
					`Exemplo: "negociacao-atualizada"`,
			);
		}
	}
	return requests;
}

const VALID_METHODS = new Set(["GET", "POST", "PUT", "PATCH", "DELETE"]);

function validateManualRequests(
	manualRequests: ManualRegistryEntry[],
): ManualRegistryEntry[] {
	for (const entry of manualRequests) {
		if (!entry.key) {
			throw new Error(`Manual request sem "key": ${JSON.stringify(entry)}`);
		}
		if (!entry.name) {
			throw new Error(`Manual request "${entry.key}" sem "name".`);
		}
		if (!entry.collection) {
			throw new Error(`Manual request "${entry.key}" sem "collection".`);
		}
		if (!VALID_METHODS.has(entry.method)) {
			throw new Error(
				`Manual request "${entry.key}" com método inválido "${entry.method}". ` +
					`Métodos válidos: GET, POST, PUT, PATCH, DELETE.`,
			);
		}
		if (!entry.url) {
			throw new Error(`Manual request "${entry.key}" sem "url".`);
		}
		if (!entry.payloadSchema) {
			throw new Error(`Manual request "${entry.key}" sem "payloadSchema".`);
		}
	}
	return manualRequests;
}

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

	const requests = validateRequests(overrideConfig.requests ?? {});
	const manualRequests = validateManualRequests(
		overrideConfig.manualRequests ?? [],
	);

	const logLevel = resolveLogLevel(overrideConfig.logLevel);

	return {
		baseUrl: parsed.data.CRM_NOCOBASE_URL,
		token: parsed.data.CRM_NOCOBASE_TOKEN,
		timeoutMs: parsed.data.CRM_NOCOBASE_TIMEOUT_MS,
		logLevel: logLevel,
		outputDir: "src/generated/custom-requests",
		generateAnalysisReport: true,
		lockWorkspaceFolder: true,
		...overrideConfig,
		requests,
		manualRequests,
	};
}
