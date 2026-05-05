import { DEFAULT_TASK_RENDERER_OPTIONS } from "./defaults";
import { runTask } from "./run-helper";
import { createTaskLogger } from "./task-runtime";
import type {
	GeneratorContext,
	GeneratorListrTask,
	GeneratorTask,
} from "./types";

export function createListrTask<TContext extends object>(
	generatorName: string,
	step: GeneratorTask<TContext>,
	index: number,
	total: number,
	sharedContext?: GeneratorContext<TContext>,
): GeneratorListrTask<TContext> {
	return {
		title: `[${index + 1}/${total}] ${step.title}`,
		task: async (context, task) => {
			const ctx = (sharedContext ?? context) as GeneratorContext<TContext>;
			const writeOutput = ctx.writeOutput;
			const disableOutput = ctx.disableOutput;
			const baseLogger = ctx.logger;

			const taskLogger = createTaskLogger({
				baseLogger,
				task,
				writeOutput: disableOutput && writeOutput ? writeOutput : undefined,
			});

			ctx.logger = taskLogger;
			try {
				return runTask({
					title: step.title,
					run: () => step.run(ctx, task),
					formatError: (message) =>
						`[${generatorName}] Falha na etapa "${step.title}": ${message}`,
				});
			} finally {
				ctx.logger = baseLogger;
			}
		},
		enabled: step.enabled,
		skip: step.skip,
		retry: step.retry,
		rollback: step.rollback,
		exitOnError: step.exitOnError,
		fallbackRendererOptions: step.fallbackRendererOptions,
		rendererOptions: step.rendererOptions ?? DEFAULT_TASK_RENDERER_OPTIONS,
	};
}
