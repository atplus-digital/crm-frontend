import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import type { Logger } from "@scripts/generators/src/lib/logger";
import { logger as defaultRuntimeLogger } from "@scripts/generators/src/lib/logger";
import type { CustomRequestsAnalysisReport } from "../write-analysis-report/analysis-collector";

const ANALYSIS_OUTPUT_FILE = "analysis-report.json";

interface AnalysisOutput extends CustomRequestsAnalysisReport {
	generatedAt: string;
}

export function writeAnalysisReport(
	report: CustomRequestsAnalysisReport,
	logger?: Logger,
): void {
	const activeLogger = logger ?? defaultRuntimeLogger;
	const outputPath = resolve(
		process.cwd(),
		"scripts",
		"generators",
		ANALYSIS_OUTPUT_FILE,
	);
	const payload: AnalysisOutput = {
		generatedAt: new Date().toISOString(),
		...report,
	};

	writeFileSync(outputPath, JSON.stringify(payload, null, 2), "utf-8");

	activeLogger.info(
		`📊 Relatório salvo em: ${ANALYSIS_OUTPUT_FILE} (sem options: ${report.withoutOptions.length}, sem dataSourceKey: ${report.withoutDataSourceKey.length})`,
	);
	activeLogger.debug(`Em: ${outputPath}`);
}
