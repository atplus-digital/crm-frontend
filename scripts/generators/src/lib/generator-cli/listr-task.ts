import {
	formatPersistentLog,
	type LogEntry,
	type Logger,
	runWithLogger,
	shouldPersistLog,
} from "@scripts/generators/src/lib/logger";
import type { ListrTask } from "listr2";

import { DEFAULT_TASK_RENDERER_OPTIONS } from "./defaults";
import type { GeneratorContext, GeneratorTask } from "./types";

function getPersistentLogLine(
	entry: LogEntry,
	minimumPersistentLevel: ReturnType<Logger["getLevel"]>,
): string | null {
	if (!shouldPersistLog(entry, minimumPersistentLevel)) return null;
	return formatPersistentLog(entry);
}

export function createListrTask<TContext extends object>(
	generatorName: string,
	step: GeneratorTask<TContext>,
	index: number,
	total: number,
): ListrTask<GeneratorContext<TContext>> {
	return {
		title: `[${index + 1}/${total}] ${step.title}`,
		task: async (context, task) => {
			const logger = context.logger;
			const minimumPersistentLevel = logger.getLevel();

			const renderStepLogs = (entry: LogEntry): void => {
				const line = getPersistentLogLine(entry, minimumPersistentLevel);
				if (line) task.output = line;
			};

			try {
				return await runWithLogger(logger, () => step.run(context, task), {
					chain: step.title,
					onEntry: renderStepLogs,
				});
			} catch (error) {
				const message = error instanceof Error ? error.message : String(error);
				throw new Error(
					`[${generatorName}] Falha na etapa "${step.title}": ${message}`,
					{ cause: error },
				);
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
