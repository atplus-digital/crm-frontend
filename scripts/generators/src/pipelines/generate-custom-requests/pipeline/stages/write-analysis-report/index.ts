import type { GenerationStage } from "../../orchestration/types";
import { writeAnalysisReport } from "../write-output/analysis-writer";
import { collectAnalysisReport } from "./analysis-collector";

export function writeAnalysisReportStage(): GenerationStage {
	return async (context) => {
		if (context.config.generateAnalysisReport) {
			const analysisReport = collectAnalysisReport(context.entries);
			writeAnalysisReport(analysisReport, context.logger);
		}

		return context;
	};
}
