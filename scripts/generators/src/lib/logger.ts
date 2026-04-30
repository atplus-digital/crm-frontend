import { AsyncLocalStorage } from "node:async_hooks";

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

export interface LogEntry {
	level: LogLevel;
	message: string;
	meta?: LogMeta;
	formattedMessage: string;
	chainPath: string[];
	chainDepth: number;
}

export type LogListener = (entry: LogEntry) => void;

interface LoggerExecutionContext {
	logger: Logger;
	chainPath: string[];
	onEntry?: LogListener;
}

export interface Logger {
	debug: (message: string, meta?: LogMeta) => void;
	info: (message: string, meta?: LogMeta) => void;
	warn: (message: string, meta?: LogMeta) => void;
	error: (message: string, meta?: LogMeta) => void;
	setLevel: (level: LogLevel) => void;
	getLevel: () => LogLevel;
}

export interface RunWithLoggerOptions {
	chain?: string;
	onEntry?: LogListener;
}

const activeLoggerStore = new AsyncLocalStorage<LoggerExecutionContext>();

function getLogLevelPriority(level: LogLevel): number {
	return LOG_LEVEL_PRIORITY[level];
}

export function isLogLevelEnabled(
	level: LogLevel,
	minimumLevel: LogLevel,
): boolean {
	return getLogLevelPriority(level) >= getLogLevelPriority(minimumLevel);
}

export function formatPersistentLog(entry: LogEntry): string {
	const indent = "  ".repeat(Math.max(1, entry.chainDepth));
	return `${indent}${entry.formattedMessage}`;
}

export function shouldPersistLog(
	entry: LogEntry,
	minimumLevel: LogLevel,
): boolean {
	return isLogLevelEnabled(entry.level, minimumLevel);
}

function getActiveChainPath(owner: Logger): string[] {
	const activeContext = activeLoggerStore.getStore();

	if (!activeContext || activeContext.logger !== owner) {
		return [];
	}

	return activeContext.chainPath;
}

function getActiveEntryListener(owner: Logger): LogListener | undefined {
	const activeContext = activeLoggerStore.getStore();

	if (!activeContext || activeContext.logger !== owner) {
		return undefined;
	}

	return activeContext.onEntry;
}

function formatMessage(
	level: LogLevel,
	message: string,
	meta?: LogMeta,
): string {
	const prefix = `[${level.toUpperCase()}]`;
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
	let currentLevel: LogLevel = "info";

	const instance = {} as Logger;

	const emit = (
		owner: Logger,
		level: LogLevel,
		message: string,
		meta: LogMeta | undefined,
		logFn: (formatted: string) => void,
	): void => {
		const chainPath = getActiveChainPath(owner);
		const formattedMessage = formatMessage(level, message, meta);
		const entry: LogEntry = {
			level,
			message,
			meta,
			formattedMessage,
			chainPath,
			chainDepth: chainPath.length,
		};

		const onEntry = getActiveEntryListener(owner);
		if (onEntry) {
			onEntry(entry);
			return;
		}

		logFn(formattedMessage);
	};

	instance.debug = (message: string, meta?: LogMeta) => {
		if (isLogLevelEnabled("debug", currentLevel)) {
			emit(instance, "debug", message, meta, console.debug);
		}
	};
	instance.info = (message: string, meta?: LogMeta) => {
		if (isLogLevelEnabled("info", currentLevel)) {
			emit(instance, "info", message, meta, console.info);
		}
	};
	instance.warn = (message: string, meta?: LogMeta) => {
		if (isLogLevelEnabled("warn", currentLevel)) {
			emit(instance, "warn", message, meta, console.warn);
		}
	};
	instance.error = (message: string, meta?: LogMeta) => {
		if (isLogLevelEnabled("error", currentLevel)) {
			emit(instance, "error", message, meta, console.error);
		}
	};
	instance.setLevel = (level: LogLevel) => {
		currentLevel = level;
	};
	instance.getLevel = () => currentLevel;

	return instance;
}

const rootLogger = createLogger();
export const defaultLogger = rootLogger;

function getActiveLoggerContext(): LoggerExecutionContext {
	return activeLoggerStore.getStore() ?? { logger: rootLogger, chainPath: [] };
}

function getActiveLogger(): Logger {
	return getActiveLoggerContext().logger;
}

export function runWithLogger<T>(
	activeLogger: Logger,
	run: () => Promise<T> | T,
	options: RunWithLoggerOptions = {},
): Promise<T> | T {
	const parentContext = activeLoggerStore.getStore();
	const parentChainPath =
		parentContext && parentContext.logger === activeLogger
			? parentContext.chainPath
			: [];
	const nextChainPath = options.chain
		? [...parentChainPath, options.chain]
		: parentChainPath;
	const inheritedEntryListener =
		parentContext && parentContext.logger === activeLogger
			? parentContext.onEntry
			: undefined;
	const onEntry = options.onEntry ?? inheritedEntryListener;

	return activeLoggerStore.run(
		{ logger: activeLogger, chainPath: nextChainPath, onEntry },
		run,
	);
}

export const logger: Logger = {
	debug: (message, meta) => {
		getActiveLogger().debug(message, meta);
	},
	info: (message, meta) => {
		getActiveLogger().info(message, meta);
	},
	warn: (message, meta) => {
		getActiveLogger().warn(message, meta);
	},
	error: (message, meta) => {
		getActiveLogger().error(message, meta);
	},
	setLevel: (level) => {
		getActiveLogger().setLevel(level);
	},
	getLevel: () => getActiveLogger().getLevel(),
};
