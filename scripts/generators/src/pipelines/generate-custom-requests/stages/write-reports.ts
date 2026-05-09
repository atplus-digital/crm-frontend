import type { PipelineExecutionContext } from "@generators/lib/pipeline/context";
import { addJsonReport } from "@generators/lib/pipeline/reports";
import type { TaskRunner } from "@generators/lib/types";
import type { CustomRequestApiEntry } from "../@types/custom-request-api";
import type { ScriptConfig } from "../@types/script-config";
import type { CustomRequestsPipelineCtx } from "./load-schemas";

interface AnalyzedItem {
	key: string;
	name?: string;
	collectionName?: string;
	method?: string;
	url?: string;
	dataSourceKey?: string;
	data?: Record<string, unknown> | null;
}

function toJsonEntries(
	items: AnalyzedItem[],
): Record<
	string,
	import("@generators/lib/pipeline/reports").ReportJsonValue
>[] {
	return items.map((item) => ({
		key: item.key,
		name: item.name ?? null,
		collectionName: item.collectionName ?? null,
		method: item.method ?? null,
		url: item.url ?? null,
		dataSourceKey: item.dataSourceKey ?? null,
		data: item.data ? JSON.parse(JSON.stringify(item.data)) : null,
	}));
}

function collectAnalysisReport(entries: CustomRequestApiEntry[]): {
	totalAnalyzed: number;
	allEntries: AnalyzedItem[];
	withoutOptions: AnalyzedItem[];
	withoutDataSourceKey: AnalyzedItem[];
} {
	const allEntries: AnalyzedItem[] = [];
	const withoutOptions: AnalyzedItem[] = [];
	const withoutDataSourceKey: AnalyzedItem[] = [];

	for (const entry of entries) {
		allEntries.push({
			key: entry.key,
			name: entry.name,
			collectionName: entry.options?.collectionName,
			method: entry.options?.method,
			url: entry.options?.url,
			dataSourceKey: entry.options?.dataSourceKey,
			data: entry.options?.data ?? null,
		});

		if (!entry.options) {
			withoutOptions.push({ key: entry.key, name: entry.name });
			continue;
		}

		if (!entry.options.dataSourceKey) {
			withoutDataSourceKey.push({
				key: entry.key,
				name: entry.name,
				collectionName: entry.options.collectionName,
				method: entry.options.method,
				url: entry.options.url,
				data: entry.options.data ?? null,
			});
		}
	}

	allEntries.sort((a, b) => a.key.localeCompare(b.key));
	withoutOptions.sort((a, b) => a.key.localeCompare(b.key));
	withoutDataSourceKey.sort((a, b) => a.key.localeCompare(b.key));

	return {
		totalAnalyzed: entries.length,
		allEntries,
		withoutOptions,
		withoutDataSourceKey,
	};
}

export async function writeReportsStage(
	context: PipelineExecutionContext<ScriptConfig, CustomRequestsPipelineCtx>,
	task: TaskRunner,
): Promise<PipelineExecutionContext<ScriptConfig, CustomRequestsPipelineCtx>> {
	const pipelineCtx = (context.pipelineContext ??
		{}) as CustomRequestsPipelineCtx;
	const entries = pipelineCtx.entries ?? [];

	task.output = "Gerando relatórios de análise...";

	const analysis = collectAnalysisReport(entries);

	const reports = addJsonReport(context.reports, {
		namespace: "custom-requests",
		key: "analysis-report",
		title: "Entradas sem options/dataSourceKey",
		scope: {
			pipeline: "generate-custom-requests",
			stage: "write-reports",
		},
		payload: {
			totalAnalyzed: analysis.totalAnalyzed,
			allEntriesBeforeProcessing: toJsonEntries(analysis.allEntries),
			withoutOptions: toJsonEntries(analysis.withoutOptions),
			withoutDataSourceKey: toJsonEntries(analysis.withoutDataSourceKey),
		},
	});

	task.output = `Relatórios: ${analysis.totalAnalyzed} entradas analisadas, ${analysis.withoutOptions.length} sem options, ${analysis.withoutDataSourceKey.length} sem dataSourceKey`;

	return {
		...context,
		reports,
	};
}
