import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import type { CustomRequestsAnalysisReport } from "@scripts/generators/generate-custom-requests/src/transformer/entry-transformer";
import { logger } from "@scripts/generators/shared/lib/logger";

const ANALYSIS_OUTPUT_FILE = "analysis-report.json";

interface AnalysisOutput extends CustomRequestsAnalysisReport {
	generatedAt: string;
}

export function writeAnalysisReport(
	report: CustomRequestsAnalysisReport,
): void {
	const outputPath = resolve(process.cwd(), ANALYSIS_OUTPUT_FILE);
	const payload: AnalysisOutput = {
		generatedAt: new Date().toISOString(),
		...report,
	};

	writeFileSync(outputPath, JSON.stringify(payload, null, 2), "utf-8");

	logger.info(
		`📊 Relatório salvo em: ${outputPath} (sem options: ${report.withoutOptions.length}, sem dataSourceKey: ${report.withoutDataSourceKey.length})`,
	);
}
