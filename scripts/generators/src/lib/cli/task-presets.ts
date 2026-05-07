import type { Logger } from "@scripts/generators/src/lib/logging";
import type {
	GeneratorContext,
	GeneratorContextState,
	GeneratorTask,
} from "./types";

interface PreparationTaskOptions<
	TContext extends GeneratorContextState<TOverride, TExecutionContext>,
	TOverride,
	TExecutionContext,
> {
	createExecutionContext: (
		overrideConfig: TOverride | undefined,
		logger: Logger,
	) => TExecutionContext;
	getExecutionContext: (
		context: GeneratorContext<TContext>,
	) => TExecutionContext;
	onBeforePrepare?: () => void;
	lockWorkspace: () => void;
	backupOutputs: (context: TExecutionContext) => void;
}

interface FinalizationTaskOptions<
	TContext extends GeneratorContextState<unknown, TExecutionContext>,
	TExecutionContext,
> {
	getExecutionContext: (
		context: GeneratorContext<TContext>,
	) => TExecutionContext;
	assertResult: (context: TExecutionContext) => void;
	cleanupBackups: (context: TExecutionContext) => Promise<void>;
}

export function createStandardPreparationTasks<
	TContext extends GeneratorContextState<TOverride, TExecutionContext>,
	TOverride,
	TExecutionContext,
>(
	options: PreparationTaskOptions<TContext, TOverride, TExecutionContext>,
): GeneratorTask<TContext>[] {
	return [
		{
			title: "prepare-context",
			run: (context) => {
				options.onBeforePrepare?.();
				context.executionContext = options.createExecutionContext(
					context.overrideConfig,
					context.logger,
				);
			},
		},
		{
			title: "lock-workspace",
			run: () => {
				options.lockWorkspace();
			},
		},
		{
			title: "backup-outputs",
			run: (context) => {
				options.backupOutputs(options.getExecutionContext(context));
			},
		},
	];
}

export function createStandardFinalizationTasks<
	TContext extends GeneratorContextState<unknown, TExecutionContext>,
	TExecutionContext,
>(
	options: FinalizationTaskOptions<TContext, TExecutionContext>,
): GeneratorTask<TContext>[] {
	return [
		{
			title: "assert-result",
			run: (context) => {
				options.assertResult(options.getExecutionContext(context));
			},
		},
		{
			title: "cleanup-backups",
			run: async (context) => {
				await options.cleanupBackups(options.getExecutionContext(context));
			},
		},
	];
}
