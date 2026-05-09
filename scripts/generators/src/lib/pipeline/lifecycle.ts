import * as fs from "node:fs";
import * as path from "node:path";
import type { TaskRunner } from "@scripts/generators/src/lib/cli/types";
import { applyWorkspaceLockIfNeeded } from "@scripts/generators/src/lib/io/locker";
import { createReportsContext } from "@scripts/generators/src/lib/reports";
import type { PipelineExecutionContext } from "./context";
import type { LifecycleCtx, LifecycleTaskParams } from "./lifecycle-tasks";
import {
	backupCurrentOutput,
	diffTempVsOutput,
	handleNoChanges,
	renderReportsSummary,
	swapTempToOutputDirs,
	validateGeneratedOutput,
} from "./lifecycle-tasks";
import { type AsyncPipelineStage, runPipelineStages } from "./runner";

export interface StandardPipelineOptions<TRuntimeConfig, TPipelineContext> {
	task: TaskRunner;
	overrideConfig?: Partial<TRuntimeConfig>;
	defaultConfig: TRuntimeConfig;
	getOutputDirs: (config: TRuntimeConfig) => string[];
	pipelineContext?: TPipelineContext;
	stages: AsyncPipelineStage<
		PipelineExecutionContext<TRuntimeConfig, TPipelineContext>
	>[];
	reportsOutputPath?: string;
	label?: string;
}

export function runStandardPipeline<TRuntimeConfig, TPipelineContext>(
	options: StandardPipelineOptions<TRuntimeConfig, TPipelineContext>,
): ReturnType<TaskRunner["newListr"]> {
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
		tempDir,
		outputDirs,
		runtimeConfig,
		overrideConfig: options.overrideConfig,
		reports: createReportsContext(),
		pipelineContext: options.pipelineContext,
	};

	// Ensure temp dir exists
	fs.mkdirSync(tempDir, { recursive: true });

	// Run all lifecycle phases as Listr2 subtasks for proper rendering
	const taskParams: LifecycleTaskParams<TRuntimeConfig, TPipelineContext> = {
		tempDir,
		outputDirs,
		context,
		label,
		reportsOutputPath: options.reportsOutputPath,
		task: options.task,
		cwd,
		timestamp,
		randomId,
	};

	return options.task.newListr(
		[
			// 0. Lock generated output folders in workspace editor settings
			{
				title: "Bloqueando workspace para saídas geradas",
				task: async (): Promise<void> => {
					applyWorkspaceLockIfNeeded(outputDirs, true);
				},
			},
			// 1. Run pipeline stages (each becomes a nested subtask)
			{
				title: `Executando ${options.stages.length} estágio(s)`,
				task: (_, subTask) =>
					runPipelineStages(context, options.stages, subTask),
			},
			// 2. Validate generated output
			{
				title: "Validando saída gerada",
				task: async (): Promise<void> => validateGeneratedOutput(taskParams),
			},
			// 3. Diff temp vs output
			{
				title: "Comparando alterações",
				task: async (ctx: LifecycleCtx): Promise<void> =>
					diffTempVsOutput(ctx, taskParams),
			},
			// 4. No changes → cleanup and render reports
			{
				title: "Sem alterações",
				skip: (ctx: LifecycleCtx): string | boolean =>
					ctx.hasChanges ? "Alterações detectadas" : false,
				task: async (ctx: LifecycleCtx): Promise<void> =>
					handleNoChanges(ctx, taskParams),
			},
			// 5. Backup current output (only when changes exist)
			{
				title: "Realizando backup",
				skip: (ctx: LifecycleCtx): string | boolean =>
					!ctx.hasChanges ? "Sem alterações" : false,
				task: async (): Promise<void> => backupCurrentOutput(taskParams),
			},
			// 6. Swap temp → output (only when changes exist)
			{
				title: "Aplicando alterações",
				skip: (ctx: LifecycleCtx): string | boolean =>
					!ctx.hasChanges ? "Sem alterações" : false,
				task: async (): Promise<void> => swapTempToOutputDirs(taskParams),
			},
			// 7. Render reports + summary (only when changes exist)
			{
				title: "Gerando relatórios",
				skip: (ctx: LifecycleCtx): string | boolean =>
					!ctx.hasChanges ? "Sem alterações" : false,
				task: async (ctx: LifecycleCtx): Promise<void> =>
					renderReportsSummary(ctx, taskParams),
			},
		],
		{
			concurrent: false,
			exitOnError: true,
			ctx: { hasChanges: false } satisfies LifecycleCtx,
		},
	) as ReturnType<TaskRunner["newListr"]>;
}
