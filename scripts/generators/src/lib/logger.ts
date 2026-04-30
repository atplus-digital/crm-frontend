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

interface LoggerExecutionSnapshot {
	chainPath: string[];
	onEntry?: LogListener;
}

interface LoggerExecutionContext extends LoggerExecutionSnapshot {
	logger: Logger;
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

interface CreateLoggerCoreOptions {
	resolveExecutionContext?: (
		owner: Logger,
	) => LoggerExecutionSnapshot | undefined;
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

function resolveDefaultExecutionContext(
	owner: Logger,
): LoggerExecutionSnapshot | undefined {
	const activeContext = activeLoggerStore.getStore();

	if (!activeContext || activeContext.logger !== owner) {
		return undefined;
	}

	return {
		chainPath: activeContext.chainPath,
		onEntry: activeContext.onEntry,
	};
}

function emitLog(
	owner: Logger,
	level: LogLevel,
	message: string,
	meta: LogMeta | undefined,
	logFn: (formatted: string) => void,
	resolveExecutionContext?: (
		owner: Logger,
	) => LoggerExecutionSnapshot | undefined,
): void {
	const executionContext = resolveExecutionContext?.(owner) ?? {
		chainPath: [],
	};

	const formattedMessage = formatMessage(level, message, meta);
	const entry: LogEntry = {
		level,
		message,
		meta,
		formattedMessage,
		chainPath: executionContext.chainPath,
		chainDepth: executionContext.chainPath.length,
	};

	if (executionContext.onEntry) {
		executionContext.onEntry(entry);
		return;
	}

	logFn(formattedMessage);
}

export function createLoggerCore(
	options: CreateLoggerCoreOptions = {},
): Logger {
	let currentLevel: LogLevel = "info";

	const instance = {} as Logger;

	instance.debug = (message: string, meta?: LogMeta) => {
		if (isLogLevelEnabled("debug", currentLevel)) {
			emitLog(
				instance,
				"debug",
				message,
				meta,
				console.debug,
				options.resolveExecutionContext,
			);
		}
	};

	instance.info = (message: string, meta?: LogMeta) => {
		if (isLogLevelEnabled("info", currentLevel)) {
			emitLog(
				instance,
				"info",
				message,
				meta,
				console.info,
				options.resolveExecutionContext,
			);
		}
	};

	instance.warn = (message: string, meta?: LogMeta) => {
		if (isLogLevelEnabled("warn", currentLevel)) {
			emitLog(
				instance,
				"warn",
				message,
				meta,
				console.warn,
				options.resolveExecutionContext,
			);
		}
	};

	instance.error = (message: string, meta?: LogMeta) => {
		if (isLogLevelEnabled("error", currentLevel)) {
			emitLog(
				instance,
				"error",
				message,
				meta,
				console.error,
				options.resolveExecutionContext,
			);
		}
	};

	instance.setLevel = (level: LogLevel) => {
		currentLevel = level;
	};

	instance.getLevel = () => currentLevel;

	return instance;
}

export function createLogger(): Logger {
	return createLoggerCore({
		resolveExecutionContext: resolveDefaultExecutionContext,
	});
}

export const defaultLogger = createLogger();

function getActiveLoggerContext(): LoggerExecutionContext {
	return (
		activeLoggerStore.getStore() ?? {
			logger: defaultLogger,
			chainPath: [],
		}
	);
}

function getActiveLogger(): Logger {
	return getActiveLoggerContext().logger;
}

function createExecutionScopedLogger(getLogger: () => Logger): Logger {
	return {
		debug: (message, meta) => {
			getLogger().debug(message, meta);
		},
		info: (message, meta) => {
			getLogger().info(message, meta);
		},
		warn: (message, meta) => {
			getLogger().warn(message, meta);
		},
		error: (message, meta) => {
			getLogger().error(message, meta);
		},
		setLevel: (level) => {
			getLogger().setLevel(level);
		},
		getLevel: () => getLogger().getLevel(),
	};
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

export const logger = createExecutionScopedLogger(getActiveLogger);
