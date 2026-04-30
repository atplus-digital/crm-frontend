import { runWithLogger } from "@scripts/generators/src/lib/logger";
import type { ListrTask } from "listr2";

import {
	DEFAULT_SUBTASK_OPTIONS,
	DEFAULT_TASK_RENDERER_OPTIONS,
} from "./defaults";
import type { CreateOrchestrationTaskOptions, GeneratorTask } from "./types";

export function createOrchestrationTask<
	TContext extends object,
	TExecutionContext,
>(
	options: CreateOrchestrationTaskOptions<TContext, TExecutionContext>,
): GeneratorTask<TContext> {
	return {
		title: options.title ?? "orchestration",
		run: (context, task) => {
			const executionContext = options.getExecutionContext(context);
			const stageTasks: ListrTask[] = options.stages.map((stage) => ({
				title: stage.title,
				task: async (_stageCtx, stageTask) => {
					try {
						await runWithLogger(
							context.logger,
							() => stage.run(executionContext, stageTask),
							{ chain: stage.title },
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
