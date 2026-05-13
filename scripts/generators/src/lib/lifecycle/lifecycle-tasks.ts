import * as fs from "node:fs";
import * as path from "node:path";
import {
	backupDir,
	cleanupTempSessionDir,
	computeDiff,
	runValidation,
	swapTempToOutput,
} from "@generators/lib/io/atomic-writer";
import {
	countReports,
	type PipelineReportsContext,
	renderReportsMarkdown,
} from "@generators/lib/pipeline/reports";
import type { TaskRunner } from "@generators/lib/types";
import type { PipelineExecutionContext } from "../pipeline/context";

// ──────────────────────────────────────────────
// Shared types
// ──────────────────────────────────────────────

interface DiffSummary {
	changedFiles: string[];
	unchangedFiles: string[];
	deletedFiles: string[];
}

export interface LifecycleCtx {
	diffs?: DiffSummary[];
	hasChanges: boolean;
}

export interface PipelineJsonReportResult {
	label: string;
	hasChanges: boolean;
	reports: PipelineReportsContext;
}

// ──────────────────────────────────────────────
// Task parameters — collected once and passed through
// ──────────────────────────────────────────────

export interface LifecycleTaskParams<
	TRuntimeConfig,
	TPipelineContext = unknown,
> {
	tempDir: string;
	outputDirs: string[];
	context: PipelineExecutionContext<TRuntimeConfig, TPipelineContext>;
	label: string;
	reportsOutputPath?: string;
	task: TaskRunner;
	cwd: string;
	timestamp: number;
	randomId: string;
	onReportReady?: (result: PipelineJsonReportResult) => void;
}

// ──────────────────────────────────────────────
// Task functions
// ──────────────────────────────────────────────

/** Task 2 — Validate generated output */
export async function validateGeneratedOutput(
	params: LifecycleTaskParams<unknown, unknown>,
): Promise<void> {
	for (const outputDir of params.outputDirs) {
		const tempOutputDir = path.join(params.tempDir, outputDir);
		if (!fs.existsSync(tempOutputDir)) continue;

		const isValid = await runValidation(tempOutputDir);
		if (!isValid) {
			cleanupTempSessionDir(params.tempDir);
			throw new Error(
				`Validação falhou para ${outputDir}. Alterações descartadas.`,
			);
		}
	}
}

/** Task 3 — Diff temp vs output */
export async function diffTempVsOutput(
	ctx: LifecycleCtx,
	params: LifecycleTaskParams<unknown, unknown>,
): Promise<void> {
	const diffs: DiffSummary[] = [];
	let hasChanges = false;

	for (const outputDir of params.outputDirs) {
		const tempOutputDir = path.join(params.tempDir, outputDir);
		const resolvedOutputDir = path.resolve(outputDir);

		if (!fs.existsSync(tempOutputDir)) {
			diffs.push({
				changedFiles: [],
				unchangedFiles: [],
				deletedFiles: [],
			});
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

	ctx.diffs = diffs;
	ctx.hasChanges = hasChanges;
}

/** Task 4 — No changes: cleanup and render reports */
export async function handleNoChanges(
	ctx: LifecycleCtx,
	params: LifecycleTaskParams<unknown, unknown>,
): Promise<void> {
	cleanupTempSessionDir(params.tempDir);

	params.onReportReady?.({
		label: params.label,
		hasChanges: false,
		reports: params.context.reports,
	});
	if (params.reportsOutputPath) {
		const reportMd = renderReportsMarkdown(params.context.reports, {
			title: `Relatório — ${params.label}`,
		});
		fs.mkdirSync(path.dirname(params.reportsOutputPath), {
			recursive: true,
		});
		fs.writeFileSync(params.reportsOutputPath, reportMd, "utf-8");
	}

	const totalReports = countReports(params.context.reports);
	const totalUnchanged = (ctx.diffs ?? []).reduce(
		(sum, d) => sum + d.unchangedFiles.length,
		0,
	);

	params.task.output = `Sem alterações. ${totalUnchanged} inalterado(s), ${totalReports} report(s).`;
}

/** Task 5 — Backup current output */
export async function backupCurrentOutput(
	params: LifecycleTaskParams<unknown, unknown>,
): Promise<void> {
	const backupId = `${params.timestamp}-${params.randomId}`;
	const backupRootDir = path.join(params.cwd, ".backup", backupId);
	for (const outputDir of params.outputDirs) {
		const resolvedOutputDir = path.resolve(outputDir);
		const relativeOutputDir = path.relative(params.cwd, resolvedOutputDir);
		const backupPath = path.join(backupRootDir, relativeOutputDir);
		fs.mkdirSync(path.dirname(backupPath), {
			recursive: true,
		});
		backupDir(resolvedOutputDir, backupPath);
	}
}

/** Task 6 — Swap temp → output */
export async function swapTempToOutputDirs(
	params: LifecycleTaskParams<unknown, unknown>,
): Promise<void> {
	for (const outputDir of params.outputDirs) {
		const tempOutputDir = path.join(params.tempDir, outputDir);
		const resolvedOutputDir = path.resolve(outputDir);

		if (!fs.existsSync(tempOutputDir)) continue;
		swapTempToOutput(tempOutputDir, resolvedOutputDir);
	}

	cleanupTempSessionDir(params.tempDir);
}

/** Task 7 — Render reports + summary */
export async function renderReportsSummary(
	ctx: LifecycleCtx,
	params: LifecycleTaskParams<unknown, unknown>,
): Promise<void> {
	params.onReportReady?.({
		label: params.label,
		hasChanges: true,
		reports: params.context.reports,
	});
	if (params.reportsOutputPath) {
		const reportMd = renderReportsMarkdown(params.context.reports, {
			title: `Relatório — ${params.label}`,
		});
		fs.mkdirSync(path.dirname(params.reportsOutputPath), {
			recursive: true,
		});
		fs.writeFileSync(params.reportsOutputPath, reportMd, "utf-8");
	}

	const diffs = ctx.diffs ?? [];
	const totalChanged = diffs.reduce((sum, d) => sum + d.changedFiles.length, 0);
	const totalDeleted = diffs.reduce((sum, d) => sum + d.deletedFiles.length, 0);
	const totalUnchanged = diffs.reduce(
		(sum, d) => sum + d.unchangedFiles.length,
		0,
	);
	const totalReports = countReports(params.context.reports);

	const parts: string[] = [];
	if (totalChanged > 0) parts.push(`${totalChanged} alterado(s)`);
	if (totalDeleted > 0) parts.push(`${totalDeleted} removido(s)`);
	if (totalUnchanged > 0) parts.push(`${totalUnchanged} inalterado(s)`);
	parts.push(`${totalReports} report(s)`);

	params.task.output = parts.join(", ");
}
