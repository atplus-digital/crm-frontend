import type { PipelineExecutionContext } from "@generators/lib/pipeline/context";
import type { TaskRunner } from "@generators/lib/types";
import { requestsConfig } from "@scripts/generators/config/requests";
import { resolveNocoBaseEnv } from "@scripts/generators/src/lib/utils/env";
import type {
	ManualRegistryEntry,
	RequestsMap,
	ScriptConfig,
} from "../@types/script-config";
import type { CustomRequestsPipelineCtx } from "./load-schemas";

const SPLIT_REQUEST_NAME_REGEX = /^[a-z][a-z-]*$/;
const VALID_METHODS = new Set(["GET", "POST", "PUT", "PATCH", "DELETE"]);

const defaults = {
	outputDir: "src/generated/custom-requests",
	requests: {} as RequestsMap,
	manualRequests: [] as ManualRegistryEntry[],
	generateAnalysisReport: true,
	lockWorkspaceFolder: true,
	reports: {
		generateConsolidatedMarkdown: true,
		consolidatedMarkdownOutputFile: ".reports/custom-requests-report.md",
	},
};

function validateRequests(requests: RequestsMap): RequestsMap {
	for (const [id, name] of Object.entries(requests)) {
		if (!SPLIT_REQUEST_NAME_REGEX.test(name)) {
			throw new Error(
				`Nome de split request inválido "${name}" (id: ${id}). ` +
					"Deve começar com letra minúscula e conter apenas " +
					"letras minúsculas e hífens. " +
					'Exemplo: "negociacao-atualizada"',
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

export async function loadConfigStage(
	context: PipelineExecutionContext<ScriptConfig, CustomRequestsPipelineCtx>,
	task: TaskRunner,
): Promise<PipelineExecutionContext<ScriptConfig, CustomRequestsPipelineCtx>> {
	task.output = "Carregando configuração...";

	const env = resolveNocoBaseEnv();

	const cfg = {
		baseUrl: env.baseUrl,
		token: env.token,
		timeoutMs: env.timeoutMs,
		outputDir: defaults.outputDir,
		requests: validateRequests({
			...defaults.requests,
			...(requestsConfig.requests ?? {}),
		}),
		manualRequests: validateManualRequests([
			...defaults.manualRequests,
			...(requestsConfig.manualRequests ?? []),
		]),
		generateAnalysisReport:
			requestsConfig.generateAnalysisReport ?? defaults.generateAnalysisReport,
		lockWorkspaceFolder:
			requestsConfig.lockWorkspaceFolder ?? defaults.lockWorkspaceFolder,
		reports: {
			...defaults.reports,
			...(requestsConfig.reports ?? {}),
		},
	} satisfies ScriptConfig;

	task.output = `Configuração carregada: ${Object.keys(cfg.requests).length} requests configurados, ${cfg.manualRequests.length} manuais`;

	return {
		...context,
		runtimeConfig: cfg,
	};
}
