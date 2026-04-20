export type LogLevel = "debug" | "info" | "warn" | "error";

const LOG_LEVEL_PRIORITY: Record<LogLevel, number> = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
};

interface Logger {
	debug: (message: string) => void;
	info: (message: string) => void;
	warn: (message: string) => void;
	error: (message: string) => void;
	setLevel: (level: LogLevel) => void;
	getLevel: () => LogLevel;
}

let currentLevel: LogLevel = "info";

export function createLogger(): Logger {
	return {
		debug: (message: string) => {
			if (LOG_LEVEL_PRIORITY["debug"] >= LOG_LEVEL_PRIORITY[currentLevel]) {
				console.debug(`[DEBUG] ${message}`);
			}
		},
		info: (message: string) => {
			if (LOG_LEVEL_PRIORITY["info"] >= LOG_LEVEL_PRIORITY[currentLevel]) {
				console.info(`[INFO] ${message}`);
			}
		},
		warn: (message: string) => {
			if (LOG_LEVEL_PRIORITY["warn"] >= LOG_LEVEL_PRIORITY[currentLevel]) {
				console.warn(`[WARN] ${message}`);
			}
		},
		error: (message: string) => {
			if (LOG_LEVEL_PRIORITY["error"] >= LOG_LEVEL_PRIORITY[currentLevel]) {
				console.error(`[ERROR] ${message}`);
			}
		},
		setLevel: (level: LogLevel) => {
			currentLevel = level;
		},
		getLevel: () => currentLevel,
	};
}

export const logger = createLogger();

// Legacy exports for backward compatibility
export const logInfo = (message: string) => logger.info(message);
export const logVerbose = (message: string) => logger.debug(message);
