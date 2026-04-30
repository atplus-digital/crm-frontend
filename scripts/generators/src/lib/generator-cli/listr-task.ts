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

interface BufferedStepLogs {
	persistent: string[];
}

function appendStepLog(
	entry: LogEntry,
	minimumPersistentLevel: ReturnType<Logger["getLevel"]>,
	buffer: BufferedStepLogs,
): void {
	const line = formatPersistentLog(entry);

	if (shouldPersistLog(entry, minimumPersistentLevel)) {
		buffer.persistent.push(line);
	}
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
			const buffer: BufferedStepLogs = { persistent: [] };
			const logger = context.logger;
			const minimumPersistentLevel = logger.getLevel();

			const renderStepLogs = (entry: LogEntry): void => {
				appendStepLog(entry, minimumPersistentLevel, buffer);
				task.output = buffer.persistent.join("\n");
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
