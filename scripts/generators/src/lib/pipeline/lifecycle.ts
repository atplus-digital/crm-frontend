import * as fs from "node:fs";
import * as path from "node:path";
import type { TaskRunner } from "@scripts/generators/src/lib/cli/types";
import {
	backupDir,
	computeDiff,
	removeDir,
	runValidation,
	swapTempToOutput,
} from "@scripts/generators/src/lib/io/atomic-writer";
import {
	countReports,
	createReportsContext,
	renderReportsMarkdown,
} from "@scripts/generators/src/lib/reports";
import type { PipelineExecutionContext } from "./context";
import { type AsyncPipelineStage, runPipelineStages } from "./runner";

export interface StandardPipelineOptions<TRuntimeConfig, TPipelineContext> {
	task: TaskRunner;
	overrideConfig?: Partial<TRuntimeConfig>;
	defaultConfig: TRuntimeConfig;
	getOutputDirs: (config: TRuntimeConfig) => string[];
	stages: AsyncPipelineStage<
		PipelineExecutionContext<TRuntimeConfig, TPipelineContext>
	>[];
	lockWorkspace: () => void;
	unlockWorkspace: () => void;
	reportsOutputPath?: string;
	label?: string;
}

interface DiffSummary {
	changedFiles: string[];
	unchangedFiles: string[];
	deletedFiles: string[];
}

export async function runStandardPipeline<TRuntimeConfig, TPipelineContext>(
	options: StandardPipelineOptions<TRuntimeConfig, TPipelineContext>,
): Promise<PipelineExecutionContext<TRuntimeConfig, TPipelineContext>> {
	const label = options.label ?? "pipeline";
	const cwd = process.cwd();
	const timestamp = Date.now();
	const randomId = Math.random().toString(36).slice(2, 8);
	const tempDir = path.join(cwd, ".temp", `${timestamp}-${randomId}`);
	const runtimeConfig: TRuntimeConfig = options.overrideConfig
		? { ...options.defaultConfig, ...options.overrideConfig }
		: options.defaultConfig;
	const outputDirs = options.getOutputDirs(runtimeConfig);

	const context: PipelineExecutionContext<TRuntimeConfig, TPipelineContext> = {
		task: options.task,
		tempDir,
		outputDirs,
		runtimeConfig,
		overrideConfig: options.overrideConfig,
		reports: createReportsContext(),
	};

	options.task.output = `🔧 Iniciando pipeline "${label}"`;

	options.lockWorkspace();

	try {
		// Ensure temp dir exists
		fs.mkdirSync(tempDir, { recursive: true });

		// 1. Run pipeline stages
		options.task.output = `▶ Executando ${options.stages.length} estágio(s)...`;
		const finalContext = await runPipelineStages(context, options.stages);

		// 2. Validate temp output
		options.task.output = "🔍 Validando saída gerada...";
		for (const outputDir of outputDirs) {
			const tempOutputDir = path.join(tempDir, outputDir);
			if (!fs.existsSync(tempOutputDir)) continue;

			const isValid = await runValidation(tempOutputDir);
			if (!isValid) {
				removeDir(tempDir);
				throw new Error(
					`❌ Validação falhou para ${outputDir}. Alterações descartadas.`,
				);
			}
		}

		// 3. Diff temp vs output for each output dir
		options.task.output = "📋 Comparando alterações...";
		const diffs: DiffSummary[] = [];
		let hasChanges = false;

		for (const outputDir of outputDirs) {
			const tempOutputDir = path.join(tempDir, outputDir);
			const resolvedOutputDir = path.resolve(outputDir);

			if (!fs.existsSync(tempOutputDir)) {
				diffs.push({ changedFiles: [], unchangedFiles: [], deletedFiles: [] });
				continue;
			}

			const diffResult = computeDiff(tempOutputDir, resolvedOutputDir);
			diffs.push(diffResult);

			if (
				diffResult.changedFiles.length > 0 ||
				diffResult.deletedFiles.length > 0
			) {
				hasChanges = true;
			}
		}

		if (!hasChanges) {
			// No changes — clean up temp and render reports
			removeDir(tempDir);

			const reportMd = renderReportsMarkdown(finalContext.reports, {
				title: `Relatório — ${label}`,
			});
			if (options.reportsOutputPath) {
				fs.mkdirSync(path.dirname(options.reportsOutputPath), {
					recursive: true,
				});
				fs.writeFileSync(options.reportsOutputPath, reportMd, "utf-8");
			}

			const totalReports = countReports(finalContext.reports);
			const totalUnchanged = diffs.reduce(
				(sum, d) => sum + d.unchangedFiles.length,
				0,
			);

			options.task.output = `ℹ Nenhuma alteração detectada em "${label}". ${totalUnchanged} arquivo(s) inalterado(s). ${totalReports} report(s) gerado(s).`;

			return finalContext;
		}

		// 4. Backup current output directories
		options.task.output = "💾 Realizando backup...";
		const backupId = `${timestamp}-${randomId}`;
		const backupRootDir = path.join(cwd, ".backup", backupId);
		for (const outputDir of outputDirs) {
			const resolvedOutputDir = path.resolve(outputDir);
			const relativeOutputDir = path.relative(cwd, resolvedOutputDir);
			const backupPath = path.join(backupRootDir, relativeOutputDir);
			fs.mkdirSync(path.dirname(backupPath), { recursive: true });
			backupDir(resolvedOutputDir, backupPath);
		}

		// 5. Swap temp → output for each output dir
		options.task.output = "🔄 Aplicando alterações...";
		for (const outputDir of outputDirs) {
			const tempOutputDir = path.join(tempDir, outputDir);
			const resolvedOutputDir = path.resolve(outputDir);

			if (!fs.existsSync(tempOutputDir)) continue;
			swapTempToOutput(tempOutputDir, resolvedOutputDir);
		}

		// Remove temp root (subdirs already moved)
		removeDir(tempDir);

		// 6. Render reports
		const reportMd = renderReportsMarkdown(finalContext.reports, {
			title: `Relatório — ${label}`,
		});
		if (options.reportsOutputPath) {
			fs.mkdirSync(path.dirname(options.reportsOutputPath), {
				recursive: true,
			});
			fs.writeFileSync(options.reportsOutputPath, reportMd, "utf-8");
		}

		// 7. Summary
		const totalChanged = diffs.reduce(
			(sum, d) => sum + d.changedFiles.length,
			0,
		);
		const totalDeleted = diffs.reduce(
			(sum, d) => sum + d.deletedFiles.length,
			0,
		);
		const totalUnchanged = diffs.reduce(
			(sum, d) => sum + d.unchangedFiles.length,
			0,
		);
		const totalReports = countReports(finalContext.reports);

		const summaryParts: string[] = [`✓ Pipeline "${label}" concluído`];
		if (totalChanged > 0)
			summaryParts.push(`${totalChanged} arquivo(s) alterado(s)`);
		if (totalDeleted > 0)
			summaryParts.push(`${totalDeleted} arquivo(s) removido(s)`);
		if (totalUnchanged > 0)
			summaryParts.push(`${totalUnchanged} arquivo(s) inalterado(s)`);
		summaryParts.push(`${totalReports} report(s) gerado(s)`);

		options.task.output = summaryParts.join(" | ");

		return finalContext;
	} catch (error) {
		// Clean up temp on any error
		removeDir(tempDir);
		console.error(
			`❌ Pipeline "${label}" falhou:`,
			error instanceof Error ? error.message : String(error),
		);
		throw error;
	} finally {
		options.unlockWorkspace();
	}
}
