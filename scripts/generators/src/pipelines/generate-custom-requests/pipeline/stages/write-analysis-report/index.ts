import { addJsonReport } from "@scripts/generators/src/lib/reports";
import type { GenerationStage } from "../../../@types/orchestration";
import { collectAnalysisReport } from "./analysis-collector";

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
				withoutOptions: analysisReport.withoutOptions,
				withoutDataSourceKey: analysisReport.withoutDataSourceKey,
			},
		});

		return {
			...context,
			reports,
		};
	};
}
