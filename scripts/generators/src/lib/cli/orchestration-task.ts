import { DEFAULT_TASK_RENDERER_OPTIONS, getSubtaskOptions } from "./defaults";
import { createLoggedSubtask } from "./logged-subtask";
import type {
	CreateOrchestrationTaskOptions,
	GeneratorContext,
	GeneratorTask,
	OrchestrationListrTask,
} from "./types";

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
			const disableOutput = (context as GeneratorContext<TContext>)
				.disableOutput;

			const stageTasks: OrchestrationListrTask[] = options.stages.map((stage) =>
				createLoggedSubtask({
					title: stage.title,
					logger: context.logger,
					run: (stageTask) => stage.run(executionContext, stageTask),
					formatError: (message) =>
						`Falha na subetapa "${stage.title}": ${message}`,
					disableOutput,
				}),
			);

			// Use silent renderer options when disableOutput is true
			const subtaskOptions = disableOutput
				? getSubtaskOptions("silent")
				: getSubtaskOptions("nested");

			return task.newListr(stageTasks, subtaskOptions);
		},
		rendererOptions: DEFAULT_TASK_RENDERER_OPTIONS,
	};
}
