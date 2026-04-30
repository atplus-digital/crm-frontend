import { logger } from "@scripts/generators/shared/lib/logger";

export type GeneratorStepTask<TContext extends object> = (
	context: TContext,
) => Promise<void> | void;

interface GeneratorStep<TContext extends object> {
	name: string;
	run: GeneratorStepTask<TContext>;
}

export class GeneratorFactory<TContext extends object> {
	private readonly steps: GeneratorStep<TContext>[] = [];

	public constructor(
		public readonly name: string,
		private readonly context: TContext,
	) {}

	public addStep(
		name: string,
		run: GeneratorStepTask<TContext>,
	): GeneratorFactory<TContext> {
		this.steps.push({ name, run });
		return this;
	}

	public async execute(): Promise<void> {
		for (const step of this.steps) {
			try {
				await step.run(this.context);
			} catch (error) {
				const message = error instanceof Error ? error.message : String(error);
				throw new Error(
					`[${this.name}] Falha na etapa "${step.name}": ${message}`,
				);
			}
		}
	}
}

export function createGenerator<TContext extends object>(
	name: string,
	context: TContext,
): GeneratorFactory<TContext> {
	return new GeneratorFactory(name, context);
}

export async function runGeneratorCli<TContext extends object>(
	generator: GeneratorFactory<TContext>,
): Promise<void> {
	try {
		await generator.execute();
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		logger.error(message);
		process.exit(1);
	}
}
