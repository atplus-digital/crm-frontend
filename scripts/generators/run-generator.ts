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

export type GeneratorStepTask<TContext extends object> = (
	context: GeneratorStepContext<TContext>,
) => Promise<void> | void;

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

interface GeneratorPipeline<TContext extends object> {
	name: string;
	steps: GeneratorStep<TContext>[];
}

interface GeneratorTaskStep<TContext extends object> {
	name: string;
	run: GeneratorStepTask<TContext>;
}

type GeneratorStep<TContext extends object> =
	| GeneratorTaskStep<TContext>
	| GeneratorPipeline<TContext>;

type ListrTaskArgs = Parameters<NonNullable<ListrTask["task"]>>;

interface BufferedStepLogs {
	persistent: string[];
	transient: string[];
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

function isPipelineStep<TContext extends object>(
	step: GeneratorStep<TContext>,
): step is GeneratorPipeline<TContext> {
	return "steps" in step;
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

export class GeneratorFactory<TContext extends object> {
	private readonly steps: GeneratorStep<TContext>[] = [];
	private readonly stepContext: GeneratorStepContext<TContext>;

	public constructor(
		public readonly name: string,
		private readonly context: TContext,
		private readonly logger: Logger = defaultLogger,
		private readonly hooks?: GeneratorExecutionHooks,
	) {
		this.stepContext = {
			...this.context,
			logger: this.logger,
		};
	}

	public addStep(
		name: string,
		run: GeneratorStepTask<TContext>,
	): GeneratorFactory<TContext> {
		this.steps.push({ name, run });
		return this;
	}

	public addPipeline(
		name: string,
		configure: (pipeline: GeneratorFactory<TContext>) => void,
	): GeneratorFactory<TContext> {
		const childPipeline = new GeneratorFactory<TContext>(
			`${this.name}/${name}`,
			this.context,
			this.logger,
			this.hooks,
		);
		configure(childPipeline);
		this.steps.push({ name, steps: childPipeline.steps });
		return this;
	}

	private createTaskFromStep(
		step: GeneratorStep<TContext>,
		index: number,
		total: number,
		parentPath: string[] = [],
		depth = 0,
	): ListrTask {
		const stepPath = [...parentPath, step.name];
		const emitProgress = (
			status: GeneratorStepStatus,
			errorMessage?: string,
		): void => {
			this.hooks?.onStepProgress?.({
				generatorName: this.name,
				stepName: step.name,
				stepPath,
				stepType: isPipelineStep(step) ? "pipeline" : "task",
				status,
				index,
				total,
				depth,
				errorMessage,
			});
		};

		return {
			title: `[${index + 1}/${total}] ${step.name}`,
			task: async (_ctx: ListrTaskArgs[0], task: ListrTaskArgs[1]) => {
				emitProgress("started");

				if (isPipelineStep(step)) {
					const subTasks = this.createTasks(step.steps, stepPath, depth + 1);
					return task.newListr(subTasks, {
						concurrent: false,
					});
				}

				const buffer: BufferedStepLogs = { persistent: [], transient: [] };

				const unsubscribe = this.logger.subscribe((entry) => {
					const { shouldUpdateLiveOutput } = appendStepLog(
						entry,
						this.logger.getLevel(),
						buffer,
					);
					if (shouldUpdateLiveOutput) {
						task.output = renderLiveOutput(buffer);
					}
				});

				try {
					await runWithLogger(this.logger, () => step.run(this.stepContext), {
						chain: step.name,
					});
					emitProgress("completed");
				} catch (error) {
					const message =
						error instanceof Error ? error.message : String(error);
					emitProgress("failed", message);
					throw new Error(
						`[${this.name}] Falha na etapa "${step.name}": ${message}`,
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

	private createTasks(
		steps: GeneratorStep<TContext>[],
		parentPath: string[] = [],
		depth = 0,
	): ListrTask[] {
		return steps.map((step, index) =>
			this.createTaskFromStep(step, index, steps.length, parentPath, depth),
		);
	}

	public async execute(): Promise<void> {
		const tasks = new Listr(this.createTasks(this.steps), {
			concurrent: false,
			renderer: "default",
			rendererOptions: {
				collapseSubtasks: false,
			},
		});

		await tasks.run();
	}
}

export function createGenerator<TContext extends object>(
	name: string,
	context: TContext,
	logger?: Logger,
	hooks?: GeneratorExecutionHooks,
): GeneratorFactory<TContext> {
	return new GeneratorFactory(name, context, logger, hooks);
}

export async function runGeneratorCli<TContext extends object>(
	generator: GeneratorFactory<TContext>,
): Promise<void> {
	try {
		await generator.execute();
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		defaultLogger.error(message);
		process.exit(1);
	}
}
