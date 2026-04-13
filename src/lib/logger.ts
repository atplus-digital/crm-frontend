import { env, isDev } from "#/env";

export type LogLevel = "debug" | "info" | "warn" | "error";

export const LOG_LEVELS: Record<LogLevel, number> = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
};

const MIN_LEVEL: number = isDev
	? LOG_LEVELS[env.VITE_LOG_LEVEL]
	: LOG_LEVELS.warn;

type LogFn = (message: string, ...data: unknown[]) => void;

interface Logger {
	debug: LogFn;
	info: LogFn;
	warn: LogFn;
	error: LogFn;
}

function log(
	level: LogLevel,
	module: string,
	message: string,
	data: unknown[],
): void {
	if (LOG_LEVELS[level] < MIN_LEVEL) return;

	const prefix = `[${module}] ${level.toUpperCase()} ${message}`;
	const consoleFn =
		level === "debug"
			? console.debug
			: level === "info"
				? console.info
				: level === "warn"
					? console.warn
					: console.error;

	if (data.length > 0) {
		consoleFn(prefix, ...data);
	} else {
		consoleFn(prefix);
	}
}

export function createLogger(module: string): Logger {
	return {
		debug: (message, ...data) => log("debug", module, message, data),
		info: (message, ...data) => log("info", module, message, data),
		warn: (message, ...data) => log("warn", module, message, data),
		error: (message, ...data) => log("error", module, message, data),
	};
}
