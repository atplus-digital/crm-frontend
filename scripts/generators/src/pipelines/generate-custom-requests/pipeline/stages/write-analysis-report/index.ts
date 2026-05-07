import { addJsonReport } from "@scripts/generators/src/lib/reports";
import type { GenerationStage } from "../../orchestration/types";
import { collectAnalysisReport } from "./analysis-collector";

function toJsonEntries(
	items: ReturnType<typeof collectAnalysisReport>["withoutOptions"],
) {
	return items.map((item) => ({
		key: item.key,
		name: item.name ?? null,
		collectionName: item.collectionName ?? null,
		method: item.method ?? null,
		url: item.url ?? null,
		dataSourceKey: item.dataSourceKey ?? null,
	}));
}

export function writeAnalysisReportStage(): GenerationStage {
	return async (context) => {
		const analysisReport = collectAnalysisReport(context.entries);
		const reports = addJsonReport(context.reports, {
			namespace: "custom-requests",
			key: "analysis-report",
			title: "Entradas sem options/dataSourceKey",
			scope: {
				pipeline: "generate-custom-requests",
				stage: "write-analysis-report",
			},
			payload: {
				totalAnalyzed: analysisReport.totalAnalyzed,
				withoutOptions: toJsonEntries(analysisReport.withoutOptions),
				withoutDataSourceKey: toJsonEntries(
					analysisReport.withoutDataSourceKey,
				),
			},
		});

		return {
			...context,
			reports,
		};
	};
}
