import { ListrLogger } from "listr2";

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

export interface Logger {
	debug: (message: string, meta?: LogMeta) => void;
	info: (message: string, meta?: LogMeta) => void;
	warn: (message: string, meta?: LogMeta) => void;
	error: (message: string, meta?: LogMeta) => void;
	setLevel: (level: LogLevel) => void;
	getLevel: () => LogLevel;
}

export interface CreateLoggerOptions {
	level?: LogLevel;
	writeLine?: (line: string, level: LogLevel) => void;
}

function getLogLevelPriority(level: LogLevel): number {
	return LOG_LEVEL_PRIORITY[level];
}

export function isLogLevelEnabled(
	level: LogLevel,
	minimumLevel: LogLevel,
): boolean {
	return getLogLevelPriority(level) >= getLogLevelPriority(minimumLevel);
}

function formatMeta(meta?: LogMeta): string {
	if (!meta || Object.keys(meta).length === 0) {
		return "";
	}

	return Object.entries(meta)
		.filter(([, value]) => value !== undefined)
		.map(([key, value]) => `${key}=${value}`)
		.join(" ");
}

function formatMessage(
	level: LogLevel,
	message: string,
	meta?: LogMeta,
): string {
	const formattedMeta = formatMeta(meta);
	const prefix = `[${level.toUpperCase()}]`;

	if (formattedMeta === "") {
		return `${prefix} ${message}`;
	}

	return `${prefix} [${formattedMeta}] ${message}`;
}

function createDefaultWriter(): (line: string, level: LogLevel) => void {
	const listrLogger = new ListrLogger<LogLevel>({
		useIcons: false,
	});

	return (line, level) => {
		if (level === "warn" || level === "error") {
			listrLogger.toStderr(line);
			return;
		}

		listrLogger.toStdout(line);
	};
}

export function createLogger(options: CreateLoggerOptions = {}): Logger {
	let currentLevel = options.level ?? "info";
	const writeLine = options.writeLine ?? createDefaultWriter();

	const emit = (level: LogLevel, message: string, meta?: LogMeta): void => {
		if (!isLogLevelEnabled(level, currentLevel)) {
			return;
		}

		writeLine(formatMessage(level, message, meta), level);
	};

	return {
		debug: (message, meta) => {
			emit("debug", message, meta);
		},
		info: (message, meta) => {
			emit("info", message, meta);
		},
		warn: (message, meta) => {
			emit("warn", message, meta);
		},
		error: (message, meta) => {
			emit("error", message, meta);
		},
		setLevel: (level) => {
			currentLevel = level;
		},
		getLevel: () => currentLevel,
	};
}

export const defaultLogger = createLogger();

export const logger = defaultLogger;
