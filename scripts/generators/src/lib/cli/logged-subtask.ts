import { DEFAULT_TASK_RENDERER_OPTIONS } from "./defaults";
import { runTask } from "./run-helper";
import type { OrchestrationListrTask, OrchestrationTaskRunner } from "./types";

interface CreateLoggedSubtaskOptions {
	title: string;
	logger?: import("@scripts/generators/src/lib/logging").Logger;
	run: (task: OrchestrationTaskRunner) => Promise<unknown> | unknown;
	formatError?: (message: string) => string;
	disableOutput?: boolean;
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
			return runTask({
				title: options.title,
				run: () => options.run(task),
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
