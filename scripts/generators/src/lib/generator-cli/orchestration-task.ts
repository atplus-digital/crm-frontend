import {
	formatPersistentLog,
	type LogEntry,
	type Logger,
	runWithLogger,
	shouldPersistLog,
} from "@scripts/generators/src/lib/logger";
import type { ListrTask } from "listr2";

import {
	DEFAULT_SUBTASK_OPTIONS,
	DEFAULT_TASK_RENDERER_OPTIONS,
} from "./defaults";
import type { CreateOrchestrationTaskOptions, GeneratorTask } from "./types";

function getPersistentStageLogLine(
	entry: LogEntry,
	minimumPersistentLevel: ReturnType<Logger["getLevel"]>,
): string | null {
	if (!shouldPersistLog(entry, minimumPersistentLevel)) return null;
	return formatPersistentLog(entry);
}

export function createOrchestrationTask<
	TContext extends object,
	TExecutionContext,
>(
	options: CreateOrchestrationTaskOptions<TContext, TExecutionContext>,
): GeneratorTask<TContext> {
	return {
		title: options.title ?? "orchestration",
		run: async (context, task) => {
			const executionContext = options.getExecutionContext(context);
			const stageTasks: ListrTask[] = options.stages.map((stage) => ({
				title: stage.title,
				task: async (_stageCtx, stageTask) => {
					const logger = context.logger;
					const minimumPersistentLevel = logger.getLevel();

					const renderStageLogs = (entry: LogEntry): void => {
						const line = getPersistentStageLogLine(
							entry,
							minimumPersistentLevel,
						);
						if (line) stageTask.output = line;
					};

					try {
						await runWithLogger(
							logger,
							() => stage.run(executionContext, stageTask),
							{
								chain: stage.title,
								onEntry: renderStageLogs,
							},
						);
					} catch (error) {
						const message =
							error instanceof Error ? error.message : String(error);
						throw new Error(`Falha na subetapa "${stage.title}": ${message}`, {
							cause: error,
						});
					}
				},
				rendererOptions: DEFAULT_TASK_RENDERER_OPTIONS,
			}));

			return task.newListr(stageTasks, DEFAULT_SUBTASK_OPTIONS);
		},
		rendererOptions: DEFAULT_TASK_RENDERER_OPTIONS,
	};
}
