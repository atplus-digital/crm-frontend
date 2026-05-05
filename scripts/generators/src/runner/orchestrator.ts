import {
	createGeneratorOptions,
	type GeneratorTask,
	type GeneratorTaskResult,
	type ListrTaskRunner,
	runGeneratorCli,
} from "@scripts/generators/src/lib/cli";
import type { Logger } from "@scripts/generators/src/lib/logger";

export interface GeneratorContext {
	logger: Logger;
}

export interface GeneratorDescriptor {
	name: string;
	label: string;
	run: (
		ctx: GeneratorContext,
		task: ListrTaskRunner<OrchestratorContext>,
	) => Promise<unknown> | unknown;
}

export interface OrchestratorOptions {
	name: string;
	generators: GeneratorDescriptor[];
}

type OrchestratorContext = Record<string, never>;

export function createOrchestratorTasks(
	options: OrchestratorOptions,
): GeneratorTask<OrchestratorContext>[] {
	return options.generators.map((generator) => ({
		title: generator.name,
		run: (context, task) => {
			const generatorCtx: GeneratorContext = {
				logger: context.logger,
			};

			return generator.run(
				generatorCtx,
				task as ListrTaskRunner<OrchestratorContext>,
			) as GeneratorTaskResult<OrchestratorContext>;
		},
	}));
}

export async function runOrchestrator(
	options: OrchestratorOptions,
): Promise<void> {
	await runGeneratorCli(
		createGeneratorOptions({
			name: options.name,
			context: {},
			tasks: createOrchestratorTasks(options),
		}),
	);
}
