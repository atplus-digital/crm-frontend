import type { Logger } from "@scripts/generators/src/lib/logger";

import { DEFAULT_TASK_RENDERER_OPTIONS } from "./defaults";
import {
	createPersistentOutputWriter,
	runTaskWithLogger,
} from "./task-runtime";
import type { OrchestrationListrTask, OrchestrationTaskRunner } from "./types";

interface CreateLoggedSubtaskOptions {
	title: string;
	logger: Logger;
	run: (task: OrchestrationTaskRunner) => Promise<unknown> | unknown;
	formatError?: (message: string) => string;
	enabled?: OrchestrationListrTask["enabled"];
	skip?: OrchestrationListrTask["skip"];
	retry?: OrchestrationListrTask["retry"];
	rollback?: OrchestrationListrTask["rollback"];
	exitOnError?: OrchestrationListrTask["exitOnError"];
	fallbackRendererOptions?: OrchestrationListrTask["fallbackRendererOptions"];
	rendererOptions?: OrchestrationListrTask["rendererOptions"];
}

export function createLoggedSubtask(
	options: CreateLoggedSubtaskOptions,
): OrchestrationListrTask {
	return {
		title: options.title,
		task: (_context, task) => {
			const renderLogs = createPersistentOutputWriter(
				options.logger,
				(line) => {
					task.output = line;
				},
			);

			return runTaskWithLogger({
				logger: options.logger,
				chain: options.title,
				run: () => options.run(task),
				onEntry: renderLogs,
				formatError:
					options.formatError ??
					((message) => `Falha na subetapa "${options.title}": ${message}`),
			});
		},
		enabled: options.enabled,
		skip: options.skip,
		retry: options.retry,
		rollback: options.rollback,
		exitOnError: options.exitOnError,
		fallbackRendererOptions: options.fallbackRendererOptions,
		rendererOptions: options.rendererOptions ?? DEFAULT_TASK_RENDERER_OPTIONS,
	};
}
