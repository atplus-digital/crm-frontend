import { collectAnalysisReport } from "../../../transformer/entry-transformer";
import { writeAnalysisReport } from "../../../writer/analysis-writer";
import type { GenerationStage } from "../types";

export function writeAnalysisReportStage(): GenerationStage {
	return async (context) => {
		if (context.config.generateAnalysisReport) {
			const analysisReport = collectAnalysisReport(context.entries);
			writeAnalysisReport(analysisReport);
		}

		return context;
	};
}
