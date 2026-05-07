import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { renderReportsMarkdown } from "@scripts/generators/src/lib/reports";
import type { GenerationStage } from "../../orchestration/types";

export function renderConsolidatedReportsStage(): GenerationStage {
	return async (context) => {
		if (!context.config.reports.generateConsolidatedMarkdown) {
			return context;
		}

		const outputPath = resolve(
			process.cwd(),
			context.config.reports.consolidatedMarkdownOutputFile,
		);
		mkdirSync(dirname(outputPath), { recursive: true });

		const markdown = renderReportsMarkdown(context.reports, {
			title: "Custom Requests - Reports Consolidados",
		});
		writeFileSync(outputPath, markdown, "utf-8");

		context.logger.info(
			`📘 Relatório markdown consolidado salvo em: ${context.config.reports.consolidatedMarkdownOutputFile}`,
		);
		context.logger.debug(`Em: ${outputPath}`);

		return context;
	};
}
