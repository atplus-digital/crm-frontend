import {
	type CreateLoggerOptions,
	createLogger,
	type Logger,
} from "@scripts/generators/src/lib/logging";
import type { ListrTaskRunner } from "./types";

export type TaskOutputWriter = (line: string) => void;

interface CreateTaskLoggerOptions<TContext extends object> {
	baseLogger: Logger;
	task: ListrTaskRunner<TContext>;
	writeOutput?: TaskOutputWriter;
}

function createTaskOutputWriter<TContext extends object>(
	task: ListrTaskRunner<TContext>,
): TaskOutputWriter {
	const stream = task.stdout();

	return (line: string) => {
		stream.write(`${line}\n`);
	};
}

export function createTaskLogger<TContext extends object>(
	options: CreateTaskLoggerOptions<TContext>,
): Logger {
	const write = options.writeOutput ?? createTaskOutputWriter(options.task);
	const loggerOptions: CreateLoggerOptions = {
		level: options.baseLogger.getLevel(),
		writeLine: (line) => {
			write(line);
		},
	};

	const taskLogger = createLogger(loggerOptions);

	return {
		...taskLogger,
		setLevel: (level) => {
			options.baseLogger.setLevel(level);
			taskLogger.setLevel(level);
		},
		getLevel: () => taskLogger.getLevel(),
	};
}

interface RunTaskWithLoggerOptions<TResult> {
	run: () => Promise<TResult> | TResult;
	formatError: (message: string) => string;
}

export async function runTaskWithLogger<TResult>(
	options: RunTaskWithLoggerOptions<TResult>,
): Promise<TResult> {
	try {
		return await options.run();
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		throw new Error(options.formatError(message), {
			cause: error,
		});
	}
}
