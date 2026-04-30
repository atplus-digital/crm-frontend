import {
	defaultLogger,
	formatPersistentLog,
	type LogEntry,
	type Logger,
	type LogLevel,
	runWithLogger,
	shouldPersistLog,
	shouldRenderLiveInTui,
} from "@scripts/generators/src/lib/logger";
import { Listr, type ListrTask } from "listr2";

export type GeneratorStepContext<TContext extends object> = TContext & {
	logger: Logger;
};

export type GeneratorStepStatus = "started" | "completed" | "failed";

export interface GeneratorStepProgressEvent {
	generatorName: string;
	stepName: string;
	stepPath: string[];
	stepType: "task" | "pipeline";
	status: GeneratorStepStatus;
	index: number;
	total: number;
	depth: number;
	errorMessage?: string;
}

export interface GeneratorExecutionHooks {
	onStepProgress?: (event: GeneratorStepProgressEvent) => void;
}

export interface GeneratorProgressSnapshot {
	generatorName: string;
	status: "idle" | "running" | "completed" | "failed";
	progressPercent: number;
	totalSteps: number;
	completedSteps: number;
	failedSteps: number;
	activeStepPath?: string[];
	lastEvent?: GeneratorStepProgressEvent;
}

interface CreateGeneratorProgressTrackerOptions {
	generatorName: string;
	includePipelinesInProgress?: boolean;
	onUpdate?: (snapshot: GeneratorProgressSnapshot) => void;
}

interface BufferedStepLogs {
	persistent: string[];
	transient: string[];
}

export interface GeneratorCliTask<TContext extends object> {
	name: string;
	stepPath?: string[];
	stepType?: "task" | "pipeline";
	depth?: number;
	run: (
		context: GeneratorStepContext<TContext>,
		task: Parameters<NonNullable<ListrTask["task"]>>[1],
	) => ReturnType<NonNullable<ListrTask["task"]>>;
}

export interface RunGeneratorCliOptions<TContext extends object> {
	name: string;
	context: TContext;
	tasks: GeneratorCliTask<TContext>[];
	logger?: Logger;
	hooks?: GeneratorExecutionHooks;
}

export interface GeneratorOrchestrationStep<TExecutionContext> {
	name: string;
	run: (context: TExecutionContext) => Promise<void> | void;
}

export interface CreateOrchestrationTasksOptions<
	TContext extends object,
	TExecutionContext,
> {
	stages: GeneratorOrchestrationStep<TExecutionContext>[];
	getExecutionContext: (context: TContext) => TExecutionContext;
	taskNamePrefix?: string;
	stepPathPrefix?: string[];
	depth?: number;
}

function renderStepOutput(buffer: BufferedStepLogs): string {
	return buffer.persistent.join("\n");
}

function renderLiveOutput(buffer: BufferedStepLogs): string {
	if (buffer.transient.length === 0) {
		return "";
	}

	return buffer.transient[buffer.transient.length - 1] ?? "";
}

function appendStepLog(
	entry: LogEntry,
	minimumPersistentLevel: LogLevel,
	buffer: BufferedStepLogs,
): { shouldUpdateLiveOutput: boolean } {
	const line = formatPersistentLog(entry);
	const shouldPersist = shouldPersistLog(entry, minimumPersistentLevel);
	const shouldRenderLive = shouldRenderLiveInTui(entry);

	if (shouldPersist) {
		buffer.persistent.push(line);
	}

	if (shouldRenderLive) {
		buffer.transient = [line];
		return { shouldUpdateLiveOutput: true };
	}

	return { shouldUpdateLiveOutput: false };
}

function getDefaultProgressSnapshot(
	generatorName: string,
): GeneratorProgressSnapshot {
	return {
		generatorName,
		status: "idle",
		progressPercent: 0,
		totalSteps: 0,
		completedSteps: 0,
		failedSteps: 0,
	};
}

export function createGeneratorProgressTracker(
	options: CreateGeneratorProgressTrackerOptions,
): {
	hooks: GeneratorExecutionHooks;
	getSnapshot: () => GeneratorProgressSnapshot;
	reset: () => void;
} {
	let snapshot = getDefaultProgressSnapshot(options.generatorName);
	const stepStatuses = new Map<string, GeneratorStepStatus>();

	function shouldTrack(event: GeneratorStepProgressEvent): boolean {
		if (options.includePipelinesInProgress) {
			return true;
		}
		return event.stepType === "task";
	}

	function updateProgress(event: GeneratorStepProgressEvent): void {
		const key = event.stepPath.join(">");
		const existingStatus = stepStatuses.get(key);
		const isTracked = shouldTrack(event);

		if (isTracked && !existingStatus) {
			snapshot.totalSteps += 1;
		}

		if (isTracked && existingStatus !== event.status) {
			if (event.status === "completed") {
				snapshot.completedSteps += 1;
			}
			if (event.status === "failed") {
				snapshot.failedSteps += 1;
			}
		}

		stepStatuses.set(key, event.status);
		snapshot.activeStepPath = event.stepPath;
		snapshot.lastEvent = event;

		if (event.status === "started") {
			snapshot.status = "running";
		}
		if (event.status === "failed") {
			snapshot.status = "failed";
		} else if (
			snapshot.totalSteps > 0 &&
			snapshot.completedSteps + snapshot.failedSteps >= snapshot.totalSteps
		) {
			snapshot.status = snapshot.failedSteps > 0 ? "failed" : "completed";
		}

		const resolvedSteps = snapshot.completedSteps + snapshot.failedSteps;
		snapshot.progressPercent =
			snapshot.totalSteps === 0
				? 0
				: Math.round((resolvedSteps / snapshot.totalSteps) * 100);

		options.onUpdate?.({ ...snapshot });
	}

	return {
		hooks: {
			onStepProgress: updateProgress,
		},
		getSnapshot: () => ({ ...snapshot }),
		reset: () => {
			snapshot = getDefaultProgressSnapshot(options.generatorName);
			stepStatuses.clear();
		},
	};
}

function createListrTask<TContext extends object>(
	generatorName: string,
	context: GeneratorStepContext<TContext>,
	logger: Logger,
	hooks: GeneratorExecutionHooks | undefined,
	step: GeneratorCliTask<TContext>,
	index: number,
	total: number,
): ListrTask {
	const stepPath = step.stepPath ?? [step.name];
	const stepType = step.stepType ?? "task";
	const depth = step.depth ?? 0;

	const emitProgress = (
		status: GeneratorStepStatus,
		errorMessage?: string,
	): void => {
		hooks?.onStepProgress?.({
			generatorName,
			stepName: step.name,
			stepPath,
			stepType,
			status,
			index,
			total,
			depth,
			errorMessage,
		});
	};

	return {
		title: `[${index + 1}/${total}] ${step.name}`,
		task: async (_ctx, task) => {
			emitProgress("started");

			const buffer: BufferedStepLogs = { persistent: [], transient: [] };
			const unsubscribe = logger.subscribe((entry) => {
				const { shouldUpdateLiveOutput } = appendStepLog(
					entry,
					logger.getLevel(),
					buffer,
				);
				if (shouldUpdateLiveOutput) {
					task.output = renderLiveOutput(buffer);
				}
			});

			try {
				const result = await runWithLogger(
					logger,
					() => step.run(context, task),
					{
						chain: step.name,
					},
				);
				emitProgress("completed");
				return result;
			} catch (error) {
				const message = error instanceof Error ? error.message : String(error);
				emitProgress("failed", message);
				throw new Error(
					`[${generatorName}] Falha na etapa "${step.name}": ${message}`,
				);
			} finally {
				unsubscribe();
				buffer.transient = [];
				task.output = renderStepOutput(buffer);
			}
		},
		rendererOptions: {
			outputBar: true,
			persistentOutput: true,
		},
	};
}

export function createGeneratorListr<TContext extends object>(
	options: RunGeneratorCliOptions<TContext>,
): Listr {
	const logger = options.logger ?? defaultLogger;
	const context: GeneratorStepContext<TContext> = {
		...options.context,
		logger,
	};

	const tasks = options.tasks.map((step, index) =>
		createListrTask(
			options.name,
			context,
			logger,
			options.hooks,
			step,
			index,
			options.tasks.length,
		),
	);

	return new Listr(tasks, {
		concurrent: false,
		renderer: "default",
		rendererOptions: {
			collapseSubtasks: false,
		},
	});
}

export function createOrchestrationTasks<
	TContext extends object,
	TExecutionContext,
>(
	options: CreateOrchestrationTasksOptions<TContext, TExecutionContext>,
): GeneratorCliTask<TContext>[] {
	const taskNamePrefix = options.taskNamePrefix ?? "orchestration";
	const stepPathPrefix = options.stepPathPrefix ?? ["orchestration"];
	const depth = options.depth ?? 1;

	return options.stages.map((stage) => ({
		name: `${taskNamePrefix}/${stage.name}`,
		stepPath: [...stepPathPrefix, stage.name],
		stepType: "pipeline",
		depth,
		run: async (context) => {
			await stage.run(options.getExecutionContext(context));
		},
	}));
}

export async function runGeneratorCli<TContext extends object>(
	options: RunGeneratorCliOptions<TContext>,
): Promise<void> {
	try {
		await createGeneratorListr(options).run();
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		defaultLogger.error(message);
		process.exit(1);
	}
}
