import { DEFAULT_TASK_RENDERER_OPTIONS } from "./defaults";
import {
	createPersistentOutputWriter,
	runTaskWithLogger,
} from "./task-runtime";
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
): GeneratorListrTask<TContext> {
	return {
		title: `[${index + 1}/${total}] ${step.title}`,
		task: async (context, task) => {
			const logger = context.logger;
			const ctx = context as GeneratorContext<TContext>;
			const writeOutput = ctx.writeOutput;
			const disableOutput = ctx.disableOutput;

			// When disableOutput is true, use the provided writeOutput
			// Otherwise, use task.output (default Listr behavior)
			const outputWriter =
				disableOutput && writeOutput
					? writeOutput
					: (line: string) => {
							task.output = line;
						};

			const renderStepLogs = createPersistentOutputWriter(logger, outputWriter);

			return runTaskWithLogger({
				logger,
				chain: step.title,
				run: () => step.run(context, task),
				onEntry: renderStepLogs,
				formatError: (message) =>
					`[${generatorName}] Falha na etapa "${step.title}": ${message}`,
			});
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
