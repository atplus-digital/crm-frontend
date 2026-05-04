import {
	formatPersistentLog,
	type LogEntry,
	type Logger,
	runWithLogger,
	shouldPersistLog,
} from "@scripts/generators/src/lib/logger";

export type TaskOutputWriter = (line: string) => void;

export function createPersistentOutputWriter(
	logger: Logger,
	writeOutput: TaskOutputWriter,
): (entry: LogEntry) => void {
	const minimumPersistentLevel = logger.getLevel();

	return (entry: LogEntry): void => {
		if (!shouldPersistLog(entry, minimumPersistentLevel)) {
			return;
		}

		writeOutput(formatPersistentLog(entry));
	};
}

interface RunTaskWithLoggerOptions<TResult> {
	logger: Logger;
	chain: string;
	run: () => Promise<TResult> | TResult;
	onEntry?: (entry: LogEntry) => void;
	formatError: (message: string) => string;
}

export async function runTaskWithLogger<TResult>(
	options: RunTaskWithLoggerOptions<TResult>,
): Promise<TResult> {
	try {
		return await runWithLogger(options.logger, options.run, {
			chain: options.chain,
			onEntry: options.onEntry,
		});
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		throw new Error(options.formatError(message), {
			cause: error,
		});
	}
}
