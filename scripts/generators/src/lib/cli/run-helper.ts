import { runTaskWithLogger } from "@scripts/generators/src/lib/cli/task-runtime";

export interface TaskRunnerOptions {
	title: string;
	run: () => Promise<unknown> | unknown;
	formatError?: (message: string) => string;
}

export function runTask(options: TaskRunnerOptions): Promise<unknown> {
	return runTaskWithLogger({
		run: () => options.run(),
		formatError:
			options.formatError ??
			((message) => `Falha na etapa "${options.title}": ${message}`),
	});
}
