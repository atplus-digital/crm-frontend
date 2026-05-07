import {
	resolveLogLevel,
	resolveNocoBaseEnv,
} from "@scripts/generators/src/lib/env-config";
import type {
	ManualRegistryEntry,
	RequestsMap,
	ScriptConfig,
} from "../@types/script-config";

const SPLIT_REQUEST_NAME_REGEX = /^[a-z][a-z-]*$/;
const VALID_METHODS = new Set(["GET", "POST", "PUT", "PATCH", "DELETE"]);

const defaultConfig = {
	outputDir: "src/generated/custom-requests",
	requests: {},
	manualRequests: [],
	generateAnalysisReport: true,
	lockWorkspaceFolder: true,
	reports: {
		generateConsolidatedMarkdown: true,
		consolidatedMarkdownOutputFile:
			"scripts/generators/custom-requests-reports.md",
	},
} as const satisfies Omit<
	ScriptConfig,
	"baseUrl" | "token" | "timeoutMs" | "logLevel"
>;

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
					"Métodos válidos: GET, POST, PUT, PATCH, DELETE.",
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

function validateMergedConfig(
	mergedConfig: Partial<ScriptConfig>,
): asserts mergedConfig is Partial<ScriptConfig> & {
	outputDir: string;
	requests: RequestsMap;
	manualRequests: ManualRegistryEntry[];
	reports: ScriptConfig["reports"];
} {
	const errors: string[] = [];

	if (!mergedConfig.outputDir || mergedConfig.outputDir.trim() === "") {
		errors.push("outputDir não pode ser vazio");
	}

	if (!mergedConfig.reports) {
		errors.push("reports é obrigatório");
	} else {
		if (
			typeof mergedConfig.reports.generateConsolidatedMarkdown !== "boolean"
		) {
			errors.push("reports.generateConsolidatedMarkdown deve ser boolean");
		}

		if (!mergedConfig.reports.consolidatedMarkdownOutputFile?.trim()) {
			errors.push("reports.consolidatedMarkdownOutputFile não pode ser vazio");
		}
	}

	if (errors.length > 0) {
		throw new Error(
			`Configuração inválida:\n${errors.map((e) => `  - ${e}`).join("\n")}`,
		);
	}
}

export function parseConfig(
	overrideConfig: Partial<ScriptConfig> = {},
): ScriptConfig {
	const parsed = resolveNocoBaseEnv({
		defaultEnvPath: ".env.local",
		defaultTimeoutMs: 15_000,
	});

	const logLevel = resolveLogLevel(overrideConfig.logLevel);
	const mergedConfig = {
		...defaultConfig,
		...overrideConfig,
		logLevel,
		reports: {
			...defaultConfig.reports,
			...overrideConfig.reports,
		},
	};

	validateMergedConfig(mergedConfig);

	return {
		baseUrl: parsed.baseUrl,
		token: parsed.token,
		timeoutMs: parsed.timeoutMs,
		...mergedConfig,
		requests: validateRequests(mergedConfig.requests),
		manualRequests: validateManualRequests(mergedConfig.manualRequests),
	};
}
