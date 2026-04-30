export type LogLevel = "debug" | "info" | "warn" | "error";

const LOG_LEVEL_PRIORITY: Record<LogLevel, number> = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
};

interface LogMeta {
	datasource?: string;
	stage?: string;
	collection?: string;
	[key: string]: string | undefined;
}

interface Logger {
	debug: (message: string, meta?: LogMeta) => void;
	info: (message: string, meta?: LogMeta) => void;
	warn: (message: string, meta?: LogMeta) => void;
	error: (message: string, meta?: LogMeta) => void;
	setLevel: (level: LogLevel) => void;
	getLevel: () => LogLevel;
}

let currentLevel: LogLevel = "info";

export const LEVEL_COLORS: Record<LogLevel, string> = {
	debug: "\x1b[90m",
	info: "\x1b[34m",
	warn: "\x1b[1m\x1b[33m",
	error: "\x1b[1m\x1b[31m",
};
export const RESET = "\x1b[0m";

function formatMessage(
	level: LogLevel,
	message: string,
	meta?: LogMeta,
): string {
	const color = LEVEL_COLORS[level];
	const prefix = `${color}[${level.toUpperCase()}]${RESET}`;
	if (!meta || Object.keys(meta).length === 0) {
		return `${prefix} ${message}`;
	}
	const metaStr = Object.entries(meta)
		.filter(([, v]) => v !== undefined)
		.map(([k, v]) => `${k}=${v}`)
		.join(" ");
	return `${prefix} [${metaStr}] ${message}`;
}

export function createLogger(): Logger {
	return {
		debug: (message: string, meta?: LogMeta) => {
			if (LOG_LEVEL_PRIORITY.debug >= LOG_LEVEL_PRIORITY[currentLevel]) {
				console.debug(
					formatMessage(
						"debug",
						`${LEVEL_COLORS.debug}${message}${RESET}`,
						meta,
					),
				);
			}
		},
		info: (message: string, meta?: LogMeta) => {
			if (LOG_LEVEL_PRIORITY.info >= LOG_LEVEL_PRIORITY[currentLevel]) {
				console.info(formatMessage("info", message, meta));
			}
		},
		warn: (message: string, meta?: LogMeta) => {
			if (LOG_LEVEL_PRIORITY.warn >= LOG_LEVEL_PRIORITY[currentLevel]) {
				console.warn(formatMessage("warn", message, meta));
			}
		},
		error: (message: string, meta?: LogMeta) => {
			if (LOG_LEVEL_PRIORITY.error >= LOG_LEVEL_PRIORITY[currentLevel]) {
				console.error(
					formatMessage(
						"error",
						`${LEVEL_COLORS.error}${message}${RESET}`,
						meta,
					),
				);
			}
		},
		setLevel: (level: LogLevel) => {
			currentLevel = level;
		},
		getLevel: () => currentLevel,
	};
}

export const logger = createLogger();
