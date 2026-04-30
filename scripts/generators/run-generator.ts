import {
	defaultLogger,
	formatPersistentLog,
	type LogEntry,
	type Logger,
	runWithLogger,
	shouldPersistLog,
	shouldRenderLiveInTui,
} from "@scripts/generators/src/lib/logger";
import { Listr, type ListrTask } from "listr2";

export type GeneratorContext<TContext extends object> = TContext & {
	logger: Logger;
};

type ListrTaskRunner = Parameters<NonNullable<ListrTask["task"]>>[1];
type ListrTaskReturn = ReturnType<NonNullable<ListrTask["task"]>>;

export interface GeneratorTask<TContext extends object> {
	title: string;
	run: (
		context: GeneratorContext<TContext>,
		task: ListrTaskRunner,
	) => ListrTaskReturn;
}

export interface GeneratorOrchestrationStage<TExecutionContext> {
	title: string;
	run: (context: TExecutionContext) => Promise<void> | void;
}

export interface CreateOrchestrationTaskOptions<
	TContext extends object,
	TExecutionContext,
> {
	title?: string;
	stages: GeneratorOrchestrationStage<TExecutionContext>[];
	getExecutionContext: (
		context: GeneratorContext<TContext>,
	) => TExecutionContext;
}

export interface RunGeneratorCliOptions<TContext extends object> {
	name: string;
	context: TContext;
	tasks: GeneratorTask<TContext>[];
	logger?: Logger;
}

interface BufferedStepLogs {
	persistent: string[];
}

function appendStepLog(
	entry: LogEntry,
	minimumPersistentLevel: ReturnType<Logger["getLevel"]>,
	buffer: BufferedStepLogs,
): string | undefined {
	const line = formatPersistentLog(entry);

	if (shouldPersistLog(entry, minimumPersistentLevel)) {
		buffer.persistent.push(line);
	}

	return shouldRenderLiveInTui(entry) ? line : undefined;
}

function createListrTask<TContext extends object>(
	generatorName: string,
	context: GeneratorContext<TContext>,
	logger: Logger,
	step: GeneratorTask<TContext>,
	index: number,
	total: number,
): ListrTask {
	return {
		title: `[${index + 1}/${total}] ${step.title}`,
		task: async (_ctx, task) => {
			const buffer: BufferedStepLogs = { persistent: [] };
			const minimumPersistentLevel = logger.getLevel();
			const unsubscribe = logger.subscribe((entry) => {
				const liveOutput = appendStepLog(entry, minimumPersistentLevel, buffer);
				if (liveOutput) {
					task.output = liveOutput;
				}
			});

			try {
				return await runWithLogger(logger, () => step.run(context, task), {
					chain: step.title,
				});
			} catch (error) {
				const message = error instanceof Error ? error.message : String(error);
				throw new Error(
					`[${generatorName}] Falha na etapa "${step.title}": ${message}`,
				);
			} finally {
				unsubscribe();
				task.output = buffer.persistent.join("\n");
			}
		},
		rendererOptions: {
			outputBar: true,
			persistentOutput: true,
		},
	};
}

export function createOrchestrationTask<
	TContext extends object,
	TExecutionContext,
>(
	options: CreateOrchestrationTaskOptions<TContext, TExecutionContext>,
): GeneratorTask<TContext> {
	return {
		title: options.title ?? "orchestration",
		run: (context, task) =>
			task.newListr(
				options.stages.map((stage) => ({
					title: stage.title,
					task: async () => {
						await stage.run(options.getExecutionContext(context));
					},
					rendererOptions: {
						outputBar: true,
						persistentOutput: true,
					},
				})),
				{
					concurrent: false,
					rendererOptions: {
						collapseSubtasks: false,
					},
				},
			),
	};
}

export function createGeneratorListr<TContext extends object>(
	options: RunGeneratorCliOptions<TContext>,
): Listr {
	const logger = options.logger ?? defaultLogger;
	const context: GeneratorContext<TContext> = {
		...options.context,
		logger,
	};

	const tasks = options.tasks.map((step, index) =>
		createListrTask(
			options.name,
			context,
			logger,
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

export async function runGeneratorCli<TContext extends object>(
	options: RunGeneratorCliOptions<TContext>,
): Promise<void> {
	const logger = options.logger ?? defaultLogger;

	try {
		await createGeneratorListr(options).run();
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		logger.error(message);
		process.exit(1);
	}
}
