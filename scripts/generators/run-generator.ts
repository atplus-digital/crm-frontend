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
import { Listr } from "listr2";

export type GeneratorStepContext<TContext extends object> = TContext & {
	logger: Logger;
};

export type GeneratorStepTask<TContext extends object> = (
	context: GeneratorStepContext<TContext>,
) => Promise<void> | void;

interface GeneratorStep<TContext extends object> {
	name: string;
	run: GeneratorStepTask<TContext>;
}

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

export class GeneratorFactory<TContext extends object> {
	private readonly steps: GeneratorStep<TContext>[] = [];
	private readonly stepContext: GeneratorStepContext<TContext>;

	public constructor(
		public readonly name: string,
		private readonly context: TContext,
		private readonly logger: Logger = defaultLogger,
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

	public async execute(): Promise<void> {
		const tasks = new Listr(
			this.steps.map((step, index) => ({
				title: `[${index + 1}/${this.steps.length}] ${step.name}`,
				task: async (_, task) => {
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
					} catch (error) {
						const message =
							error instanceof Error ? error.message : String(error);
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
					outputBar: Infinity,
					persistentOutput: true,
				},
			})),
			{
				concurrent: false,
				renderer: "default",
			},
		);

		await tasks.run();
	}
}

export function createGenerator<TContext extends object>(
	name: string,
	context: TContext,
	logger?: Logger,
): GeneratorFactory<TContext> {
	return new GeneratorFactory(name, context, logger);
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
