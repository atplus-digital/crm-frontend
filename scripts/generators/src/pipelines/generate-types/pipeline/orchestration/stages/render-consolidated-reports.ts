import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { renderReportsMarkdown } from "@scripts/generators/src/lib/reports";
import type { GenerationContext, GenerationStage } from "../types";

export function renderConsolidatedReportsStage(): GenerationStage {
	return async (ctx: GenerationContext): Promise<GenerationContext> => {
		if (!ctx.config.reports?.generateConsolidatedMarkdown) {
			return ctx;
		}

		const outputFile =
			ctx.config.reports.consolidatedMarkdownOutputFile ??
			"scripts/generators/generate-types-reports.md";
		const outputPath = resolve(process.cwd(), outputFile);
		mkdirSync(dirname(outputPath), { recursive: true });

		const markdown = renderReportsMarkdown(ctx.reports, {
			title: "Generate Types - Reports Consolidados",
		});
		writeFileSync(outputPath, markdown, "utf-8");

		ctx.logger.info(
			`📘 Relatório markdown consolidado salvo em: ${outputFile}`,
		);
		ctx.logger.debug(`Em: ${outputPath}`);

		return ctx;
	};
}
